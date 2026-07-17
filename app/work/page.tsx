"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionary } from "@/lib/i18n/dictionary";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type ProjectKey = keyof (typeof dictionary)["sv"]["work"]["projects"];

const projectMeta: Record<ProjectKey, { year: string; color: string; accent: string; url: string }> = {
  seventyfive: { year: "2026", color: "rgba(30, 12, 60, 0.5)", accent: "#8b5cf6", url: "#" },
  latrattoria: { year: "2025", color: "rgba(120, 53, 15, 0.5)", accent: "#b45309", url: "https://trattoriaa.netlify.app/" },
  ecommerce: { year: "2024", color: "rgba(15, 40, 80, 0.5)", accent: "#1d4ed8", url: "#" },
  booking: { year: "2024", color: "rgba(6, 40, 22, 0.5)", accent: "#16a34a", url: "#" },
};

const order: ProjectKey[] = ["seventyfive", "latrattoria", "ecommerce", "booking"];

export default function WorkPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#080810] text-white">

      <PageHeader />

      {/* Hero */}
      <section className="px-6 md:px-16 pt-16 pb-20 max-w-6xl mx-auto">
        <motion.p
          className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {t.workPage.tagline}
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-3xl mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        >
          {t.workPage.title}
        </motion.h1>
        <motion.p
          className="text-white/40 text-base max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
        >
          {t.workPage.subtitle}
        </motion.p>
      </section>

      {/* Projects grid */}
      <section className="px-6 md:px-16 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {order.map((key, i) => {
            const copy = t.work.projects[key];
            const meta = projectMeta[key];
            const tags = "tags" in copy ? copy.tags : [];
            const badge = "badge" in copy ? copy.badge : undefined;

            return (
              <motion.div
                key={key}
                className="group relative rounded-3xl border border-white/8 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE }}
              >
                {/* Image placeholder */}
                <div
                  className="relative h-52 w-full overflow-hidden"
                  style={{ background: meta.color }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${meta.accent}33, transparent)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/10 text-6xl font-bold" style={{ fontFamily: "var(--font-grotesk)" }}>
                      {copy.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7 gap-4 bg-white/[0.03]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-xl font-semibold text-white leading-snug">{copy.name}</h2>
                      {badge && (
                        <span className="text-[10px] uppercase tracking-wider text-white/50 border border-white/15 rounded-full px-2 py-0.5">
                          {badge}
                        </span>
                      )}
                    </div>
                    {meta.url !== "#" && (
                      <a
                        href={meta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 mt-0.5 text-white/30 hover:text-white transition-colors duration-200"
                        aria-label={`${t.workPage.visit} ${copy.name}`}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed flex-1">{copy.description}</p>

                  <div className="flex items-end justify-between pt-2 border-t border-white/8">
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-white/40 bg-white/[0.06] border border-white/8 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col items-end shrink-0 ml-4">
                      <span className="text-xs text-white/25">{copy.location}</span>
                      <span className="text-xs text-white/20">{meta.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            {t.workPage.ctaTitle}
          </motion.h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#080810] font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/90 transition-colors duration-200 shrink-0"
          >
            {t.workPage.ctaLink} <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
