"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionary } from "@/lib/i18n/dictionary";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

type StepCopy = (typeof dictionary)["sv"]["howWeHelp"]["steps"][number];

const stepMeta = [
  { number: "01", color: "from-violet-500/20 to-indigo-500/10", accent: "#8b5cf6", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&fit=crop" },
  { number: "02", color: "from-blue-500/20 to-cyan-500/10", accent: "#3b82f6", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&fit=crop" },
  { number: "03", color: "from-emerald-500/20 to-teal-500/10", accent: "#10b981", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&fit=crop" },
  { number: "04", color: "from-amber-500/20 to-orange-500/10", accent: "#f59e0b", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80&fit=crop" },
  { number: "05", color: "from-rose-500/20 to-pink-500/10", accent: "#f43f5e", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&fit=crop" },
];

function StepCard({ step, meta, index, total }: { step: StepCopy; meta: (typeof stepMeta)[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-10">

      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full border-2 mt-1 shrink-0 z-10"
          style={{
            borderColor: meta.accent,
            backgroundColor: meta.accent,
            boxShadow: `0 0 16px ${meta.accent}60`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        />
        {index < total - 1 && (
          <motion.div
            className="w-px flex-1 mt-3 origin-top"
            style={{
              background: `linear-gradient(to bottom, ${meta.accent}60, transparent)`,
              scaleY: lineScale,
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="pb-24"
        style={{ opacity, y }}
      >
        <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: meta.accent }}>
          {meta.number} · {step.subtitle}
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {step.title}
        </h2>

        <div className={`w-full rounded-2xl bg-gradient-to-br ${meta.color} border border-white/8 overflow-hidden mb-6`}>
          <div className="relative w-full h-56 md:h-72 overflow-hidden">
            <Image
              src={meta.image}
              alt={step.title}
              fill
              sizes="(min-width: 768px) 700px, 100vw"
              className="object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="p-8 md:p-10">
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function HowWeHelpPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#080810] text-white">

      <PageHeader />

      {/* Hero */}
      <section className="px-6 md:px-16 pt-16 pb-20 max-w-4xl mx-auto">
        <motion.p
          className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {t.howWeHelp.tagline}
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        >
          {t.howWeHelp.titleLine1} <br />
          <span className="italic font-light">{t.howWeHelp.titleLine2}</span>
        </motion.h1>
        <motion.p
          className="text-white/40 text-base max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
        >
          {t.howWeHelp.subtitle}
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-16 pb-10 max-w-4xl mx-auto">
        {t.howWeHelp.steps.map((step, i) => (
          <StepCard key={step.title} step={step} meta={stepMeta[i]} index={i} total={t.howWeHelp.steps.length} />
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 border-t border-white/8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {t.howWeHelp.ctaTitle}
          </motion.h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#080810] font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/90 transition-colors duration-200 shrink-0"
          >
            {t.howWeHelp.ctaLink} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
