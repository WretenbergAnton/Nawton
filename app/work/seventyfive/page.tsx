"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: EASE },
});

export default function SeventyFivePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#080810] text-white">

      <PageHeader />

      {/* Hero */}
      <section className="px-6 md:px-16 pt-16 pb-16 max-w-4xl mx-auto">
        <motion.p
          className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6"
          {...fade(0)}
        >
          {t.seventyfivePage.tagline}
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
          {...fade(0.08)}
        >
          {t.seventyfivePage.title}
        </motion.h1>

        <motion.p
          className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed"
          {...fade(0.16)}
        >
          {t.seventyfivePage.subtitle}
        </motion.p>
      </section>

      {/* Body */}
      <section className="px-6 md:px-16 pb-24 max-w-4xl mx-auto">
        <motion.div
          className="h-px bg-white/10 w-full mb-12"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        />

        <div className="flex flex-col gap-6 max-w-2xl">
          <motion.p className="text-white/60 text-base md:text-lg leading-relaxed" {...fade(0.1)}>
            {t.seventyfivePage.paragraph1}
          </motion.p>
          <motion.p className="text-white/60 text-base md:text-lg leading-relaxed" {...fade(0.18)}>
            {t.seventyfivePage.paragraph2}
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 bg-white/[0.03] border-t border-white/8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {t.seventyfivePage.ctaTitle}
          </motion.h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#080810] font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/90 transition-colors duration-200 shrink-0"
          >
            {t.seventyfivePage.ctaLink} <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
