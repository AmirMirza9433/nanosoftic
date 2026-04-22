"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ServicesPage() {
  const { dictionary } = useLanguage();
  const services = [
    {
      title: dictionary.servicesPage.items.webTitle,
      description: dictionary.servicesPage.items.webDescription,
      features: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "React / Next.js",
        "TypeScript",
        "Angular Framework",
      ],
      price: dictionary.servicesPage.items.webPrice,
    },
    {
      title: dictionary.servicesPage.items.mobileTitle,
      description: dictionary.servicesPage.items.mobileDescription,
      features: [
        "React Native Apps",
        "Ionic Development",
        "Redux State Management",
        "Firebase Integration",
        "App Store Deployment",
      ],
      price: dictionary.servicesPage.items.mobilePrice,
    },
    {
      title: dictionary.servicesPage.items.backendTitle,
      description: dictionary.servicesPage.items.backendDescription,
      features: [
        "Node.js / Express.js",
        "Python / Flask",
        "MongoDB / MySQL / PostgreSQL",
        "PHP / Laravel",
        "RESTful APIs",
      ],
      price: dictionary.servicesPage.items.backendPrice,
    },
    {
      title: dictionary.servicesPage.items.customTitle,
      description: dictionary.servicesPage.items.customDescription,
      features: [
        "Custom POS Systems",
        "Order Management",
        "Expense Tracking",
        "Inventory Management",
        "Analytics Dashboards",
      ],
      price: dictionary.servicesPage.items.customPrice,
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
              {dictionary.servicesPage.badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mt-4 mb-6"
            >
              {dictionary.servicesPage.title}{" "}
              <span className="text-gradient">
                {dictionary.servicesPage.titleHighlight}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-foreground-muted max-w-2xl mx-auto text-lg"
            >
              {dictionary.servicesPage.description}
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {services.map((service, index) => (
          <SectionWrapper
            key={index}
            delay={index * 0.1}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 md:p-12 rounded-3xl bg-[var(--surface-soft)] border border-[var(--surface-border)] overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-foreground-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 bg-[var(--surface-muted)] border border-[var(--surface-border-subtle)]"
                    >
                      <svg
                        className="w-5 h-5 text-accent-cyan flex-shrink-0"
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
                      <span className="text-sm text-foreground-muted">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Button href="/contact" size="sm">
                    {dictionary.servicesPage.getQuote}
                  </Button>
                </div>
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
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-accent-cyan/12 to-accent-blue/12 border border-[var(--surface-border)] shadow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {dictionary.servicesPage.customCtaTitle}
            </h2>
            <p className="text-foreground-muted mb-6">
              {dictionary.servicesPage.customCtaDescription}
            </p>
            <Button href="/contact">{dictionary.servicesPage.contactUs}</Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
