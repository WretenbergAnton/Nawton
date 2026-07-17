"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export default function AboutPage() {
  const { t } = useLanguage();
  const [anton, nawid] = t.about.founders;

  return (
    <div className="min-h-screen bg-[#080810] text-white">

      <PageHeader />

      {/* Hero */}
      <section className="px-6 md:px-16 pt-16 pb-24 max-w-6xl mx-auto">
        <motion.p
          className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6"
          {...fade(0)}
        >
          {t.about.tagline}
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-3xl mb-12"
          {...fade(0.08)}
        >
          {t.about.title}
        </motion.h1>

        <motion.div
          className="h-px bg-white/10 w-full mb-16"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        />

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">

          {/* Anton */}
          <motion.div
            className="bg-white/[0.04] rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-white/8"
            {...fade(0.1)}
          >
            {/* TODO: ersätt med riktigt foto av Anton */}
            <div className="w-16 h-16 rounded-2xl bg-white/8 border border-white/10" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{anton.name}</h2>
              <p className="text-sm text-white/35 uppercase tracking-widest">{anton.role}</p>
            </div>
            {anton.bio.map((p) => (
              <p key={p} className="text-white/55 leading-relaxed">{p}</p>
            ))}
          </motion.div>

          {/* Nawid */}
          <motion.div
            className="bg-white/[0.04] rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-white/8"
            {...fade(0.16)}
          >
            {/* TODO: ersätt med riktigt foto av Nawid */}
            <div className="w-16 h-16 rounded-2xl bg-white/8 border border-white/10" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{nawid.name}</h2>
              <p className="text-sm text-white/35 uppercase tracking-widest">{nawid.role}</p>
            </div>
            {nawid.bio.map((p) => (
              <p key={p} className="text-white/55 leading-relaxed">{p}</p>
            ))}
          </motion.div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mb-24">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white leading-tight"
            {...fade(0)}
          >
            {t.about.storyTitle}
          </motion.h2>
          <motion.div className="flex flex-col gap-5" {...fade(0.08)}>
            {t.about.story.map((p) => (
              <p key={p} className="text-white/50 leading-relaxed text-base">{p}</p>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <motion.h2
          className="text-3xl font-bold text-white mb-8"
          {...fade(0)}
        >
          {t.about.valuesTitle}
        </motion.h2>
        <div className="flex flex-col border-t border-white/10">
          {t.about.values.map((v, i) => (
            <motion.div
              key={v.title}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 py-8 border-b border-white/10"
              {...fade(i * 0.07)}
            >
              <h3 className="text-base font-semibold text-white">{v.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 bg-white/[0.03] border-t border-white/8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg"
            {...fade(0)}
          >
            {t.about.ctaTitle}
          </motion.h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#080810] font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/90 transition-colors duration-200 shrink-0"
          >
            {t.about.ctaLink} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
