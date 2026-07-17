"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { dictionary, type Lang } from "@/lib/i18n/dictionary";

const STORAGE_KEY = "nawton-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof dictionary)["sv"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Module-level store so setLang (called from anywhere) can notify the
// useSyncExternalStore subscription in the provider without going through
// setState-in-an-effect.
let listeners: Array<() => void> = [];

function subscribe(listener: () => void) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "en" ? "en" : "sv";
}

// Swedish is the default and what the server renders — the client re-syncs
// to the saved preference (if any) right after hydration.
function getServerSnapshot(): Lang {
  return "sv";
}

function setStoredLang(next: Lang) {
  localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((l) => l());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang: setStoredLang, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
