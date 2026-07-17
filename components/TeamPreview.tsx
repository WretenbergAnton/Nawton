"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

export default function TeamPreview() {
  const { t } = useLanguage();

  const founders = [
    { name: "Anton Wretenberg", role: t.teamPreview.roles.anton },
    { name: "Nawid", role: t.teamPreview.roles.nawid },
  ];

  return (
    <section className="px-6 md:px-16 py-20 border-t border-white/8">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="flex items-center gap-4 shrink-0">
          {founders.map((f) => (
            <div key={f.name} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-white/8 border border-white/10" />
              <span className="text-xs text-white/40 text-center leading-tight">
                {f.name}
                <br />
                {f.role}
              </span>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
            {t.teamPreview.intro}
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors duration-200"
          >
            {t.teamPreview.link} <ArrowRight size={13} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
