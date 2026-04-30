"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useRouteChange } from "@/hooks/useRouteChange";
import { useLanguage } from "@/components/providers/LanguageProvider";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const routeKey = useRouteChange();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [routeKey, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function CoursesList() {
  const { dictionary } = useLanguage();
  const courses = [
    {
      category: dictionary.courses.webCategory,
      items: ["HTML/CSS", "JavaScript", "TypeScript", "React/Next.js", "Angular"],
      color: "from-accent-cyan to-blue-500",
    },
    {
      category: dictionary.courses.mobileCategory,
      items: ["React Native", "Ionic", "Redux Toolkit", "Firebase"],
      color: "from-blue-500 to-purple-500",
    },
    {
      category: dictionary.courses.backendCategory,
      items: ["Node.js/Express.js", "Python/Flask", "MongoDB/MySQL/PostgreSQL", "PHP/Laravel"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: dictionary.courses.designCategory,
      items: ["Figma", "Canva", "Photoshop", "CorelDRAW", "InPage"],
      color: "from-pink-500 to-red-500",
    },
    {
      category: dictionary.courses.cmsCategory,
      items: ["WordPress", "Wix", "Elementor", "WooCommerce"],
      color: "from-emerald-500 to-cyan-500",
    },
    {
      category: dictionary.courses.officeCategory,
      items: [
        "MS Word",
        "MS Excel",
        "MS PowerPoint",
        "Email Writing",
        "Documentation",
        "Reporting",
      ],
      color: "from-amber-500 to-orange-500",
    },
  ];
  const stats = [
    { value: 45, suffix: "+", label: dictionary.courses.studentsTrained },
    { value: 35, suffix: "+", label: dictionary.courses.projectsDelivered },
    { value: 10, suffix: "+", label: dictionary.courses.corporateClients },
    { value: 5, suffix: "+", label: dictionary.courses.yearsExperience },
  ];

  return (
    <SectionWrapper className="py-24 px-4 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-accent-cyan text-sm font-medium uppercase tracking-wider"
          >
            {dictionary.courses.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            {dictionary.courses.title}{" "}
            <span className="text-gradient">{dictionary.courses.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-foreground-muted max-w-2xl mx-auto"
          >
            {dictionary.courses.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {courses.map((course, index) => (
            <motion.div
              key={course.category}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: easeOut }}
              className="relative p-6 rounded-2xl bg-[var(--surface-soft)] border border-[var(--surface-border)] overflow-hidden group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />
              <div className="relative z-10">
                <h3
                  className={`text-xl font-semibold mb-4 bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}
                >
                  {course.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-[var(--surface-muted)] text-sm text-foreground-muted border border-[var(--surface-border-subtle)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-foreground-muted text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
