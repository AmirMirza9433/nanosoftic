"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Hero() {
  const { dictionary } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-blue/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,var(--accent-cyan-glow),transparent_40%),radial-gradient(circle_at_80%_75%,var(--accent-blue-glow),transparent_42%)] opacity-70" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-soft)] border border-[var(--surface-border)] mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-sm text-foreground-muted">
              {dictionary.hero.badge}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gradient">{dictionary.hero.titleTop}</span>
          <br />
          <span className="text-foreground">{dictionary.hero.titleBottom}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10"
        >
          {dictionary.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/contact" size="lg">
            {dictionary.hero.getStarted}
          </Button>
          <Button href="/services" variant="outline" size="lg">
            {dictionary.hero.ourServices}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--surface-border)] flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent-cyan"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
