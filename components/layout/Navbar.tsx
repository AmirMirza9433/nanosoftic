"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, dictionary } = useLanguage();

  const navLinks = [
    { href: "/", label: dictionary.nav.home },
    { href: "/services", label: dictionary.nav.services },
    { href: "/courses", label: dictionary.nav.courses },
    { href: "/about", label: dictionary.nav.about },
    { href: "/contact", label: dictionary.nav.contact },
  ];

  useEffect(() => {
    setHasMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode, hasMounted]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-[var(--surface-border-subtle)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="NanoSoftic logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg object-cover"
              priority
            />
            <span className="text-xl font-bold text-gradient">NanoSoftic</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${pathname === link.href
                  ? "text-accent-cyan"
                  : "text-foreground-muted hover:text-foreground"
                  }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-11 px-3 rounded-lg border border-[var(--surface-border)] text-sm font-medium text-foreground-muted hover:text-foreground hover:bg-[var(--surface-hover)] transition-colors cursor-pointer"
              onClick={() => setLocale(locale === "en" ? "ur" : "en")}
              aria-label={dictionary.nav.languageLabel}
            >
              {locale === "en" ? "اردو" : "English"}
            </button>
            <button
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-[var(--surface-border)] text-foreground-muted hover:text-foreground hover:bg-[var(--surface-hover)] transition-colors cursor-pointer"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label={hasMounted ? (isDarkMode ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
            >
              {hasMounted ? (
                isDarkMode ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.364 6.364l-1.06-1.06M6.697 6.697l-1.06-1.06m12.726 0l-1.06 1.06M6.697 17.303l-1.06 1.06M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                  />
                </svg>
              )}
            </button>

            <button
              className="md:hidden w-11 h-11 flex items-center justify-center text-foreground-muted rounded-lg hover:bg-[var(--surface-hover)] transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-secondary border-t border-[var(--surface-border-subtle)]"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                    ? "bg-accent-cyan/10 text-accent-cyan"
                    : "text-foreground-muted hover:text-foreground hover:bg-[var(--surface-hover)]"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
