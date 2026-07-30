"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { dictionary } from "@/lib/i18n/dictionary";

type ProjectKey = keyof (typeof dictionary)["sv"]["work"]["projects"];

const projectMeta: Record<ProjectKey, {
  color: string;
  glow: string;
  url: string;
  images: string[];
}> = {
  seventyfive: {
    color: "rgba(30, 12, 60, 0.55)",
    glow: "rgba(139, 92, 246, 0.14)",
    url: "#",
    images: [],
  },
  latrattoria: {
    color: "rgba(120, 53, 15, 0.55)",
    glow: "rgba(180, 83, 9, 0.12)",
    url: "https://trattoriaa.netlify.app/",
    images: ["/website1.png", "/website1-2.png", "/website1-3.png"],
  },
  ecommerce: {
    color: "rgba(15, 40, 80, 0.55)",
    glow: "rgba(29, 78, 160, 0.12)",
    url: "#",
    images: [],
  },
  booking: {
    color: "rgba(6, 40, 22, 0.55)",
    glow: "rgba(16, 120, 60, 0.12)",
    url: "#",
    images: [],
  },
};

const order: ProjectKey[] = ["latrattoria", "ecommerce", "booking"];

const ENTER = { duration: 0.55, ease: [0.16, 1, 0.3, 1] } as const;
const EXIT  = { duration: 0.38, ease: [0.4, 0, 0.6, 0] } as const;

function ProjectRow({
  index,
  copy,
  meta,
  visitLabel,
  screenshotAlt,
}: {
  index: number;
  copy: (typeof dictionary)["sv"]["work"]["projects"][ProjectKey];
  meta: (typeof projectMeta)[ProjectKey];
  visitLabel: string;
  screenshotAlt: string;
}) {
  const [hovered, setHovered] = useState(false);
  const tags = "tags" in copy ? copy.tags : [];
  const badge = "badge" in copy ? copy.badge : undefined;

  return (
    <motion.div
      className="border-t border-white/[0.07] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
    >
      {/* Background color layer — separate transition timing */}
      <motion.div
        className="relative px-6 md:px-16"
        animate={{ backgroundColor: hovered ? meta.color : "rgba(0,0,0,0)" }}
        transition={hovered ? { duration: 0.55, ease: [0.16, 1, 0.3, 1] } : { duration: 0.4, ease: [0.4, 0, 0.6, 0] }}
      >
        {/* Radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={hovered ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] } : { duration: 0.35, ease: "easeIn" }}
          style={{
            background: `radial-gradient(ellipse 70% 100% at 40% 50%, ${meta.glow}, transparent)`,
          }}
        />

        {/* Collapsed row */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1fr] gap-4 md:gap-10 items-center py-7 md:py-9">
          <div className="flex items-center gap-2 flex-wrap">
            <motion.h3
              className="text-lg md:text-xl font-semibold text-white"
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.8 }}
            >
              {copy.name}
            </motion.h3>
            {badge && (
              <span className="text-[10px] uppercase tracking-wider text-white/50 border border-white/15 rounded-full px-2 py-0.5">
                {badge}
              </span>
            )}
          </div>

          <motion.p
            className="text-sm leading-relaxed hidden md:block"
            animate={{ color: hovered ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.35)" }}
            transition={hovered ? ENTER : EXIT}
          >
            {copy.description}
          </motion.p>

          <div className="flex flex-col gap-1 items-start md:items-end">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-white/30 uppercase tracking-wider">{tag}</span>
            ))}
            <span className="text-xs text-white/20 mt-1">{copy.location}</span>
          </div>
        </div>

        {/* Expanded panel */}
        <AnimatePresence initial={false}>
          {hovered && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: { height: ENTER, opacity: { duration: 0.3, ease: "easeOut" } },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { height: EXIT, opacity: { duration: 0.2, ease: "easeIn" } },
              }}
              className="overflow-hidden"
            >
              {/* Link row */}
              <motion.div
                className="flex items-center justify-end pb-5"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.12, ...ENTER } }}
                exit={{ opacity: 0, y: 4, transition: { duration: 0.15 } }}
              >
                {meta.url !== "#" && (
                  <a
                    href={meta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white border-b border-white/25 hover:border-white pb-0.5 transition-colors duration-200"
                  >
                    {visitLabel} <ArrowUpRight size={13} />
                  </a>
                )}
              </motion.div>

              {/* Screenshots */}
              <div className="grid grid-cols-3 gap-3 pb-9">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="relative aspect-video rounded-2xl border border-white/[0.08] overflow-hidden"
                    initial={{ opacity: 0, y: 18, scale: 0.97 }}
                    animate={{
                      opacity: 1, y: 0, scale: 1,
                      transition: { delay: 0.1 + i * 0.06, ...ENTER },
                    }}
                    exit={{
                      opacity: 0, y: 8, scale: 0.98,
                      transition: { duration: 0.18 },
                    }}
                  >
                    {meta.images[i] ? (
                      <Image
                        src={meta.images[i]}
                        alt={`${copy.name} ${screenshotAlt} ${i + 1}`}
                        fill
                        sizes="(min-width: 768px) 240px, 33vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative">
      <div className="px-6 md:px-16 pt-24 pb-16 max-w-5xl mx-auto">
        <motion.p
          className="text-xs text-white/30 tracking-[0.25em] uppercase mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.work.tagline}
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        >
          {t.work.title}
        </motion.h2>
      </div>

      <div className="pb-24">
        {order.map((key, i) => (
          <ProjectRow
            key={key}
            index={i}
            copy={t.work.projects[key]}
            meta={projectMeta[key]}
            visitLabel={t.work.visitSite}
            screenshotAlt={t.work.screenshotAlt}
          />
        ))}
        <div className="border-t border-white/[0.07]" />
      </div>
    </section>
  );
}
