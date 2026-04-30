"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ContactPage() {
  const { dictionary } = useLanguage();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const resolveTheme = () => {
      const attributeTheme = document.documentElement.getAttribute("data-theme");
      if (attributeTheme === "light") {
        setIsDarkTheme(false);
        return;
      }
      if (attributeTheme === "dark") {
        setIsDarkTheme(true);
        return;
      }
      setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    };

    resolveTheme();
    const observer = new MutationObserver(resolveTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

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
              {dictionary.contactPage.badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mt-4 mb-6"
            >
              {dictionary.contactPage.title}{" "}
              <span className="text-gradient">
                {dictionary.contactPage.titleHighlight}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-foreground-muted max-w-2xl mx-auto text-lg"
            >
              {dictionary.contactPage.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="mb-10 rounded-2xl border border-[var(--surface-border)] bg-[linear-gradient(135deg,rgba(18,24,40,0.95),rgba(9,17,32,0.88))] p-6 shadow-[0_12px_36px_rgba(6,10,20,0.45)]"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{dictionary.contactPage.businessHours}</h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  Available hours for visits, guidance, and support.
                </p>
              </div>
              <div className="grid gap-3 text-sm sm:grid-cols-3 sm:gap-6">
                <div className="rounded-xl border border-[var(--surface-border-subtle)] bg-[var(--surface-soft)] px-4 py-3">
                  <p className="text-foreground-muted">{dictionary.contactPage.mondayFriday}</p>
                  <p className="mt-1 font-medium">9:00 AM - 6:00 PM</p>
                </div>
                <div className="rounded-xl border border-[var(--surface-border-subtle)] bg-[var(--surface-soft)] px-4 py-3">
                  <p className="text-foreground-muted">{dictionary.contactPage.saturday}</p>
                  <p className="mt-1 font-medium">10:00 AM - 4:00 PM</p>
                </div>
                <div className="rounded-xl border border-[var(--surface-border-subtle)] bg-[var(--surface-soft)] px-4 py-3">
                  <p className="text-foreground-muted">{dictionary.contactPage.sunday}</p>
                  <p className="mt-1 font-medium">10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-2xl bg-[var(--surface-soft)] border border-[var(--surface-border)] shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  {dictionary.contactPage.contactInformation}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{dictionary.contactPage.addressLabel}</p>
                      <p className="text-foreground-muted text-sm">
                        Opposite side Children Park,
                        <br />
                        Alipur Chatha, Punjab, Pakistan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{dictionary.contactPage.emailLabel}</p>
                      <p className="text-foreground-muted text-sm">
                        nanosoftic@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{dictionary.contactPage.phoneLabel}</p>
                      <p className="text-foreground-muted text-sm">
                        03287872532
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="font-medium mb-3">Follow Us</p>
                    <div className="flex gap-3">
                      <a
                        href="https://www.facebook.com/profile.php?id=61589113948095"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan hover:bg-accent-cyan/30 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/nanosoftic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan hover:bg-accent-cyan/30 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nano-softic-a46453407/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan hover:bg-accent-cyan/30 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="https://x.com/NanoSoftic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan hover:bg-accent-cyan/30 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-soft)] shadow-sm">
                <div className="border-b border-[var(--surface-border-subtle)] p-5">
                  <h3 className="text-xl font-semibold">Our Location</h3>
                  <p className="mt-1 text-sm text-foreground-muted">
                    Visit NanoSoftic at Alipur Chatha, Punjab.
                  </p>
                </div>
                <div className="relative h-[310px]">
                  <iframe
                    title="NanoSoftic location on Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.073483044472!2d68.9941235!3d30.3629572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80271c661186dec5%3A0xf375009fcba66051!2sNanoSoftic!5e0!3m2!1sen!2s!4v1714245600000!5m2!1sen!2s"
                    className={`h-full w-full border-0 transition duration-300 ${isDarkTheme
                        ? "grayscale invert hue-rotate-180 saturate-75 brightness-90 contrast-110"
                        : "saturate-100 brightness-100 contrast-100"
                      }`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {isDarkTheme ? (
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),rgba(1,6,18,0.22)_58%,rgba(1,6,18,0.34)_100%)]" />
                  ) : (
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),rgba(255,255,255,0.18)_55%,rgba(255,255,255,0.28)_100%)]" />
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[var(--surface-soft)] border border-[var(--surface-border)] text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-accent-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-accent-cyan"
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
                  <h3 className="text-2xl font-bold mb-2">{dictionary.contactPage.thankYou}</h3>
                  <p className="text-foreground-muted">
                    {dictionary.contactPage.successMessage}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl bg-[var(--surface-soft)] border border-[var(--surface-border)] space-y-6 shadow-sm"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {dictionary.contactPage.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--surface-border-subtle)] focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-colors placeholder:text-foreground-muted/80"
                      placeholder={dictionary.contactPage.yourName}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {dictionary.contactPage.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--surface-border-subtle)] focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-colors placeholder:text-foreground-muted/80"
                      placeholder={dictionary.contactPage.yourEmail}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {dictionary.contactPage.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--surface-border-subtle)] focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-colors placeholder:text-foreground-muted/80"
                      placeholder={dictionary.contactPage.yourPhone}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {dictionary.contactPage.subject}
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full appearance-none px-4 py-3 pr-11 rounded-xl bg-[var(--surface-muted)] border border-[var(--surface-border-subtle)] focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-colors"
                      >
                        <option value="" className="bg-background">
                          {dictionary.contactPage.selectSubject}
                        </option>
                        <option value="training" className="bg-background">
                          {dictionary.contactPage.trainingInquiry}
                        </option>
                        <option value="software" className="bg-background">
                          {dictionary.contactPage.softwareDevelopment}
                        </option>
                        <option value="support" className="bg-background">
                          {dictionary.contactPage.support}
                        </option>
                        <option value="other" className="bg-background">
                          {dictionary.contactPage.other}
                        </option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {dictionary.contactPage.message}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-muted)] border border-[var(--surface-border-subtle)] focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan outline-none transition-colors resize-none placeholder:text-foreground-muted/80"
                      placeholder={dictionary.contactPage.messagePlaceholder}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? dictionary.contactPage.sending
                      : dictionary.contactPage.sendMessage}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
