"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { useRouteChange } from "@/hooks/useRouteChange";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CTASection() {
  const routeKey = useRouteChange();
  const { dictionary } = useLanguage();

  return (
    <SectionWrapper key={routeKey} className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-blue/10 to-accent-cyan/10 rounded-3xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />

        <div className="relative z-10 py-16 px-8">
          <motion.h2
            key={`cta-h2-${routeKey}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {dictionary.cta.titleStart}{" "}
            <span className="text-gradient">{dictionary.cta.titleHighlight}</span>{" "}
            {dictionary.cta.titleEnd}
          </motion.h2>
          <motion.p
            key={`cta-p-${routeKey}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="text-foreground-muted text-lg mb-10 max-w-2xl mx-auto"
          >
            {dictionary.cta.description}
          </motion.p>
          <motion.div
            key={`cta-div-${routeKey}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/contact" size="lg">
              {dictionary.cta.contactUs}
            </Button>
            <Button href="/courses" variant="outline" size="lg">
              {dictionary.cta.viewCourses}
            </Button>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
