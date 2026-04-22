"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function AboutPage() {
  const { dictionary } = useLanguage();
  const techStack = [
    { name: "Next.js", category: dictionary.aboutPage.stackFramework },
    { name: "React", category: dictionary.aboutPage.stackUiLibrary },
    { name: "TypeScript", category: dictionary.aboutPage.stackLanguage },
    { name: "Tailwind CSS", category: dictionary.aboutPage.stackStyling },
    { name: "Framer Motion", category: dictionary.aboutPage.stackAnimation },
    { name: "MongoDB", category: dictionary.aboutPage.stackDatabase },
    { name: "PostgreSQL", category: dictionary.aboutPage.stackDatabase },
    { name: "Prisma ORM", category: dictionary.aboutPage.stackOrm },
    { name: "Node.js", category: dictionary.aboutPage.stackRuntime },
    { name: "React Native", category: dictionary.aboutPage.stackMobile },
  ];

  return (
    <div className="pt-24 pb-16">
      <SectionWrapper className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-accent-cyan text-sm font-medium uppercase tracking-wider"
            >
              {dictionary.aboutPage.badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mt-4 mb-6"
            >
              {dictionary.aboutPage.title}{" "}
              <span className="text-gradient">{dictionary.aboutPage.titleHighlight}</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {dictionary.aboutPage.missionTitle}
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-6">
                {dictionary.aboutPage.missionParagraphOne}
              </p>
              <p className="text-foreground-muted leading-relaxed">
                {dictionary.aboutPage.missionParagraphTwo}
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {dictionary.aboutPage.chooseTitle}
              </h2>
              <div className="space-y-4">
                {dictionary.aboutPage.chooseItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-accent-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <SectionWrapper delay={0.2}>
            <div className="mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-8 text-center"
              >
                {dictionary.aboutPage.stackTitle}{" "}
                <span className="text-gradient">{dictionary.aboutPage.stackHighlight}</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
              >
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-6 py-3 rounded-full bg-[var(--surface-soft)] border border-[var(--surface-border)] hover:border-accent-cyan/50 transition-colors shadow-sm"
                  >
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-foreground-muted text-sm ml-2">
                      {tech.category}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.3}>
            <div className="p-8 md:p-12 rounded-3xl bg-[var(--surface-soft)] border border-[var(--surface-border)] shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {dictionary.aboutPage.visionTitle}
                  </h2>
                  <p className="text-foreground-muted leading-relaxed">
                    {dictionary.aboutPage.visionDescription}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {dictionary.aboutPage.valuesTitle}
                  </h2>
                  <p className="text-foreground-muted leading-relaxed">
                    {dictionary.aboutPage.valuesDescription}
                  </p>
                </div>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.4} className="mt-16">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-accent-cyan/12 to-accent-blue/12 border border-[var(--surface-border)] shadow-sm"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {dictionary.aboutPage.ctaTitle}
                </h2>
                <p className="text-foreground-muted mb-6">
                  {dictionary.aboutPage.ctaDescription}
                </p>
                <Button href="/contact">{dictionary.aboutPage.ctaButton}</Button>
              </motion.div>
            </div>
          </SectionWrapper>
        </div>
      </SectionWrapper>
    </div>
  );
}
