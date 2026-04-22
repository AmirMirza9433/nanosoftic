"use client";

import { motion } from "framer-motion";
import { useRouteChange } from "@/hooks/useRouteChange";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = "",
  delay = 0,
}: SectionWrapperProps) {
  const routeKey = useRouteChange();

  return (
    <motion.section
      key={routeKey}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
