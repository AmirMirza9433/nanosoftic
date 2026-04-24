"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { dictionary } = useLanguage();
  const footerLinks = [
    { href: "/", label: dictionary.nav.home },
    { href: "/services", label: dictionary.nav.services },
    { href: "/courses", label: dictionary.nav.courses },
    { href: "/about", label: dictionary.nav.about },
    { href: "/contact", label: dictionary.nav.contact },
  ];

  return (
    <footer className="bg-background-secondary border-t border-[var(--surface-border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">NS</span>
              </div>
              <span className="text-xl font-bold text-gradient">NanoSoftic</span>
            </div>
            <p className="text-foreground-muted text-sm">
              {dictionary.footer.tagline}
            </p>
            <p className="text-foreground-muted text-sm mt-2">
              {dictionary.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">
              {dictionary.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted text-sm hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">
              {dictionary.footer.contact}
            </h3>
            <p className="text-foreground-muted text-sm">
              Opposite side Children Park,
              <br />
              Alipur Chatha, Punjab, Pakistan.
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--surface-border-subtle)] mt-8 pt-8 text-center">
          <p className="text-foreground-muted text-xs">
            &copy; {new Date().getFullYear()} NanoSoftic. {dictionary.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
