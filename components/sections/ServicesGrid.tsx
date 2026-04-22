"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useRouteChange } from "@/hooks/useRouteChange";
import { useLanguage } from "@/components/providers/LanguageProvider";

const serviceIcons = [
  () => (
    <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
    </svg>
  ),
  () => (
    <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
    </svg>
  ),
  () => (
    <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
    </svg>
  ),
  () => (
    <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
    </svg>
  ),
];

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ServicesGrid() {
  const routeKey = useRouteChange();
  const { dictionary } = useLanguage();
  const services = [
    {
      title: dictionary.services.webTitle,
      description: dictionary.services.webDescription,
      icon: serviceIcons[0](),
    },
    {
      title: dictionary.services.mobileTitle,
      description: dictionary.services.mobileDescription,
      icon: serviceIcons[1](),
    },
    {
      title: dictionary.services.backendTitle,
      description: dictionary.services.backendDescription,
      icon: serviceIcons[2](),
    },
    {
      title: dictionary.services.customTitle,
      description: dictionary.services.customDescription,
      icon: serviceIcons[3](),
    },
  ];

  return (
    <SectionWrapper key={routeKey} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            key={`span-${routeKey}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-accent-cyan text-sm font-medium uppercase tracking-wider"
          >
            {dictionary.services.badge}
          </motion.span>
          <motion.h2
            key={`h2-${routeKey}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            {dictionary.services.title}{" "}
            <span className="text-gradient">{dictionary.services.titleHighlight}</span>
          </motion.h2>
          <motion.p
            key={`p-${routeKey}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="text-foreground-muted max-w-2xl mx-auto"
          >
            {dictionary.services.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${routeKey}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
              className="relative group p-6 rounded-2xl bg-[var(--surface-soft)] border border-[var(--surface-border)] hover:border-accent-cyan/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 flex items-center justify-center text-accent-cyan mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
