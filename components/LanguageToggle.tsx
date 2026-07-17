"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-full border border-white/15 p-0.5 text-xs ${className}`}
      role="group"
      aria-label={t.languageToggle.label}
    >
      {(["sv", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors duration-200 ${
            lang === l ? "bg-white text-black" : "text-white/50 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
