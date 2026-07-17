"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONTACT_EMAIL, LOCATION, ORG_NR, SOCIAL_LINKS } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    { label: t.contact.social.linkedin, href: SOCIAL_LINKS.linkedin },
    { label: t.contact.social.github, href: SOCIAL_LINKS.github },
    { label: t.contact.social.instagram, href: SOCIAL_LINKS.instagram },
  ].filter((s) => s.href);

  return (
    <section id="contact" className="px-4 md:px-6 pb-6 pt-4">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-3">

        {/* Left panel — Portfolio */}
        <Link href="/work" className="block">
        <motion.div
          className="relative rounded-3xl bg-[#2d1f6e] p-8 md:p-10 flex flex-col min-h-[460px] cursor-pointer group overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="flex items-center justify-between mb-8">
            <span className="text-xs text-white/50 tracking-[0.2em] uppercase">{t.contact.portfolioLabel}</span>
            <ArrowRight size={16} className="text-white/40 group-hover:text-white transition-colors duration-300" />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
            {t.contact.portfolioTitle[0]}<br />{t.contact.portfolioTitle[1]}
          </h2>

          <div className="mt-auto">
            <p className="text-sm text-white/40 leading-relaxed">
              {t.contact.portfolioDescription[0]}<br />{t.contact.portfolioDescription[1]}
            </p>
          </div>
        </motion.div>
        </Link>

        {/* Right panel — CTA → /contact */}
        <Link href="/contact" className="block">
          <motion.div
            className="relative rounded-3xl bg-[#5b3fd4] p-8 md:p-10 flex flex-col min-h-[460px] overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-violet-900/30 pointer-events-none" />

            <div className="relative flex items-center justify-between mb-8">
              <span className="text-xs text-white/60 tracking-[0.2em] uppercase">{t.contact.ctaLabel}</span>
              <ArrowRight size={16} className="text-white/40 group-hover:text-white transition-colors duration-300" />
            </div>

            <p className="relative text-2xl md:text-3xl font-medium text-white/90 leading-snug">
              {t.contact.ctaCopy[0]}<br />{t.contact.ctaCopy[1]}
            </p>

            <div className="mt-auto relative">
              <motion.h2
                className="text-6xl md:text-8xl font-bold text-white leading-none mb-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              >
                {t.contact.ctaTitle}
              </motion.h2>

              <div className="flex items-end justify-between">
                <span className="flex items-center gap-2 text-sm text-white border-b border-white/40 group-hover:border-white pb-0.5 transition-colors duration-200 ml-auto">
                  {t.contact.ctaLink} <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Footer */}
      <motion.div
        className="flex items-center justify-between mt-4 px-2 py-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center gap-6 flex-wrap">
          <span className="text-xs text-white/25">© {new Date().getFullYear()} Nawton</span>
          <span className="text-xs text-white/25">{LOCATION}</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200">
            {CONTACT_EMAIL}
          </a>
          <span className="text-xs text-white/15">{t.contact.orgNrLabel} {ORG_NR}</span>
        </div>
        <div className="flex items-center gap-6">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200">
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
