"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export default function CoursesPage() {
  const { dictionary } = useLanguage();
  const levels = {
    beginner: dictionary.coursesPage.levelBeginner,
    intermediate: dictionary.coursesPage.levelIntermediate,
    advanced: dictionary.coursesPage.levelAdvanced,
  };
  const week = (count: number) => `${count} ${dictionary.coursesPage.durationWeeks}`;
  const courseCategories = [
    {
      category: dictionary.coursesPage.categories.webTitle,
      description: dictionary.coursesPage.categories.webDescription,
      courses: [
        { name: "HTML & CSS", level: levels.beginner, duration: week(4) },
        { name: "JavaScript", level: levels.beginner, duration: week(6) },
        { name: "TypeScript", level: levels.intermediate, duration: week(6) },
        { name: "React / Next.js", level: levels.intermediate, duration: week(8) },
        { name: "Angular", level: levels.advanced, duration: week(10) },
      ],
      color: "from-accent-cyan to-blue-500",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      category: dictionary.coursesPage.categories.mobileTitle,
      description: dictionary.coursesPage.categories.mobileDescription,
      courses: [
        { name: "React Native", level: levels.intermediate, duration: week(10) },
        { name: "Ionic", level: levels.intermediate, duration: week(8) },
        { name: "Redux Toolkit", level: levels.advanced, duration: week(6) },
        { name: "Firebase", level: levels.advanced, duration: week(6) },
      ],
      color: "from-blue-500 to-purple-500",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      category: dictionary.coursesPage.categories.backendTitle,
      description: dictionary.coursesPage.categories.backendDescription,
      courses: [
        { name: "Node.js / Express.js", level: levels.intermediate, duration: week(8) },
        { name: "Python / Flask", level: levels.intermediate, duration: week(8) },
        {
          name: "MongoDB / MySQL / PostgreSQL",
          level: levels.intermediate,
          duration: week(6),
        },
        { name: "PHP / Laravel", level: levels.intermediate, duration: week(10) },
      ],
      color: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      category: dictionary.coursesPage.categories.designTitle,
      description: dictionary.coursesPage.categories.designDescription,
      courses: [
        { name: "Figma", level: levels.beginner, duration: week(4) },
        { name: "Canva", level: levels.beginner, duration: week(2) },
        { name: "Photoshop", level: levels.intermediate, duration: week(6) },
        { name: "CorelDRAW", level: levels.intermediate, duration: week(4) },
        { name: "InPage", level: levels.beginner, duration: week(3) },
      ],
      color: "from-pink-500 to-red-500",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      category: dictionary.coursesPage.categories.cmsTitle,
      description: dictionary.coursesPage.categories.cmsDescription,
      courses: [
        { name: "WordPress", level: levels.beginner, duration: week(4) },
        { name: "Wix", level: levels.beginner, duration: week(3) },
        { name: "Elementor", level: levels.intermediate, duration: week(3) },
        { name: "WooCommerce", level: levels.intermediate, duration: week(4) },
      ],
      color: "from-emerald-500 to-cyan-500",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 3h4.5A2.25 2.25 0 0116.5 5.25v1.5A2.25 2.25 0 0114.25 9h-4.5A2.25 2.25 0 017.5 6.75v-1.5A2.25 2.25 0 019.75 3zM6 13.5h12M6 18h12"
          />
        </svg>
      ),
    },
    {
      category: dictionary.coursesPage.categories.officeTitle,
      description: dictionary.coursesPage.categories.officeDescription,
      courses: [
        { name: "MS Word", level: levels.beginner, duration: week(3) },
        { name: "MS Excel", level: levels.beginner, duration: week(5) },
        { name: "MS PowerPoint", level: levels.beginner, duration: week(3) },
        { name: "Email Writing", level: levels.beginner, duration: week(2) },
        { name: "Documentation", level: levels.intermediate, duration: week(3) },
        { name: "Reporting", level: levels.intermediate, duration: week(3) },
      ],
      color: "from-amber-500 to-orange-500",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
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
              {dictionary.coursesPage.badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mt-4 mb-6"
            >
              {dictionary.coursesPage.title}{" "}
              <span className="text-gradient">{dictionary.coursesPage.titleHighlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-foreground-muted max-w-2xl mx-auto text-lg"
            >
              {dictionary.coursesPage.description}
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {courseCategories.map((category, index) => (
          <SectionWrapper key={index} delay={index * 0.1}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h2
                      className={`text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.category}
                    </h2>
                    <p className="text-foreground-muted">{category.description}</p>
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {category.courses.map((course, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent-cyan/30 transition-colors"
                    >
                      <h3 className="font-semibold mb-2">{course.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-foreground-muted">
                        <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs">
                          {course.level}
                        </span>
                        <span>{course.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>

      <SectionWrapper className="px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {dictionary.coursesPage.ctaTitle}
            </h2>
            <p className="text-foreground-muted mb-6">
              {dictionary.coursesPage.ctaDescription}
            </p>
            <Button href="/contact">{dictionary.coursesPage.ctaButton}</Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
