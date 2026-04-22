"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import en from "@/lib/i18n/en";
import ur from "@/lib/i18n/ur";

const dictionaries = { en, ur };

type Locale = keyof typeof dictionaries;
type Dictionary = typeof en;

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (nextLocale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const savedLocale = localStorage.getItem("locale");
    return savedLocale === "ur" ? "ur" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ur" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    localStorage.setItem("locale", nextLocale);
  }, []);

  const value = useMemo(
    () => ({ locale, dictionary: dictionaries[locale], setLocale }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
