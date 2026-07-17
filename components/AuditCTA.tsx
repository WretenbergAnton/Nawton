"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

export default function AuditCTA() {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-16 py-20 md:py-28 border-t border-white/8">
      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          {t.auditCta.title}
        </h2>
        <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-xl">
          {t.auditCta.description}
        </p>
        <Link
          href="/contact?type=granskning"
          className="mt-2 flex items-center gap-2 bg-white text-[#080810] font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/90 transition-colors duration-200"
        >
          {t.auditCta.button} <ArrowRight size={14} />
        </Link>
      </motion.div>
    </section>
  );
}
