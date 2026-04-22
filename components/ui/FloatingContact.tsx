"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const phoneRaw = "+92 300 1234567";
const phoneHref = "tel:+923001234567";
const whatsappHref = "https://wa.me/923001234567";
const email = "contact@tutorsoftic.com";

type ContactAction = {
  id: "whatsapp" | "call" | "email";
  href: string;
  label: string;
  icon: React.ReactNode;
};

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M6 18l-2 2 .8-3A8 8 0 1112 20a7.9 7.9 0 01-3.2-.7L6 20v-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 5.5A1.5 1.5 0 015.5 4h2.8a1.5 1.5 0 011.42 1.02l.96 2.88a1.5 1.5 0 01-.75 1.82l-1.6.8a12.2 12.2 0 005.58 5.58l.8-1.6a1.5 1.5 0 011.82-.75l2.88.96A1.5 1.5 0 0120 16.7v2.8A1.5 1.5 0 0118.5 21h-.75C10.16 21 3 13.84 3 5.5V4.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 7.5A1.5 1.5 0 015.5 6h13A1.5 1.5 0 0120 7.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 16.5v-9z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 8l7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const { dictionary } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const actions: ContactAction[] = [
    {
      id: "whatsapp",
      href: whatsappHref,
      label: dictionary.floatingContact.whatsapp,
      icon: <MessageIcon />,
    },
    {
      id: "call",
      href: phoneHref,
      label: `${dictionary.floatingContact.call} (${phoneRaw})`,
      icon: <PhoneIcon />,
    },
    {
      id: "email",
      href: `mailto:${email}`,
      label: `${dictionary.floatingContact.email} (${email})`,
      icon: <MailIcon />,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end md:bottom-7 md:right-7">
      <AnimatePresence>
        {open ? (
          <motion.div
            key="contact-popup"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.95 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-soft)] p-3 shadow-2xl backdrop-blur"
          >
            <p className="px-2 pb-2 text-sm font-semibold text-foreground">
              {dictionary.floatingContact.title}
            </p>
            <div className="space-y-2">
              {actions.map((action) => (
                <a
                  key={action.id}
                  href={action.href}
                  target={action.id === "email" ? undefined : "_blank"}
                  rel={action.id === "email" ? undefined : "noreferrer"}
                  className="flex min-h-11 items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:border-[var(--surface-border)] hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                >
                  <span className="text-accent-cyan">{action.icon}</span>
                  <span>{action.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={
          open ? dictionary.floatingContact.closeLabel : dictionary.floatingContact.openLabel
        }
        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
        animate={
          shouldReduceMotion
            ? undefined
            : open
              ? { scale: 1, boxShadow: "0 10px 25px rgba(6, 182, 212, 0.22)" }
              : {
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 10px 25px rgba(6, 182, 212, 0.22)",
                    "0 0 0 14px rgba(6, 182, 212, 0)",
                    "0 10px 25px rgba(6, 182, 212, 0.22)",
                  ],
                }
        }
        transition={
          open
            ? { duration: 0.2, ease: "easeOut" }
            : { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
        }
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
      >
        <motion.span animate={open ? { rotate: 45 } : { rotate: 0 }} transition={{ duration: 0.2 }}>
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </motion.button>
    </div>
  );
}
