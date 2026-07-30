"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

export default function OwnProduct() {
  const { t } = useLanguage();

  return (
    <section className="px-6 md:px-16 py-20">
      <motion.div
        className="relative max-w-5xl mx-auto rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-indigo-500/10 to-purple-900/20 overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_20%_0%,rgba(139,92,246,0.18),transparent)]" />

        <div className="relative px-8 py-14 md:px-16 md:py-20">
          <motion.p
            className="text-xs text-violet-200/60 tracking-[0.25em] uppercase mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.ownProduct.tagline}
          </motion.p>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {t.ownProduct.title}
          </motion.h2>

          <div className="max-w-2xl flex flex-col gap-5 mb-10">
            <motion.p
              className="text-white/60 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
            >
              {t.ownProduct.paragraph1}
            </motion.p>
            <motion.p
              className="text-white/60 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.26, ease: EASE }}
            >
              {t.ownProduct.paragraph2}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.34, ease: EASE }}
          >
            <Link
              href="/work/seventyfive"
              className="inline-flex items-center gap-2 bg-white text-[#080810] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-200"
            >
              {t.ownProduct.cta} <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
