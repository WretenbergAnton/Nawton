"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function PageHeader({ showContactLink = true }: { showContactLink?: boolean }) {
  const { t } = useLanguage();

  return (
    <header className="flex items-center justify-between px-6 md:px-16 py-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
        {t.about.back}
      </Link>
      <span style={{ fontFamily: "var(--font-grotesk)" }} className="text-white font-semibold text-lg tracking-tight">
        Nawton
      </span>
      <div className="flex items-center gap-4">
        <LanguageToggle />
        {showContactLink && (
          <Link
            href="/contact"
            className="hidden sm:block text-sm text-white/40 hover:text-white transition-colors duration-200"
          >
            {t.about.contact}
          </Link>
        )}
      </div>
    </header>
  );
}
