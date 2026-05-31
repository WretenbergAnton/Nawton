"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "La Trattoria",
    description: "A modern website for an authentic Italian restaurant in Åre — with digital menu, takeaway info and a warm, inviting design that reflects the food.",
    tags: ["Web Design", "Next.js", "Branding"],
    location: "Åre, Sweden",
    color: "rgba(120, 53, 15, 0.55)",
    glow: "rgba(180, 83, 9, 0.12)",
    url: "https://trattoriaa.netlify.app/",
    images: ["/website1.png", "/website1-2.png", "/website1-3.png"],
  },
  {
    id: 2,
    name: "Mode E-commerce",
    description: "A full e-commerce platform with payments, inventory management, and a custom storefront.",
    tags: ["Web App", "Stripe", "Next.js"],
    location: "Stockholm, Sweden",
    color: "rgba(15, 40, 80, 0.55)",
    glow: "rgba(29, 78, 160, 0.12)",
    url: "#",
    images: [] as string[],
  },
  {
    id: 3,
    name: "Booking App",
    description: "A cross-platform mobile app for booking services with real-time availability and push notifications.",
    tags: ["Mobile App", "React Native", "Expo"],
    location: "Sundsvall, Sweden",
    color: "rgba(6, 40, 22, 0.55)",
    glow: "rgba(16, 120, 60, 0.12)",
    url: "#",
    images: [] as string[],
  },
  {
    id: 4,
    name: "Fastighetsbyrån",
    description: "A property listing platform with advanced filtering, map integration, and lead capture forms.",
    tags: ["Web App", "Maps API", "Next.js"],
    location: "Gothenburg, Sweden",
    color: "rgba(30, 12, 60, 0.55)",
    glow: "rgba(109, 40, 217, 0.12)",
    url: "#",
    images: [] as string[],
  },
];

const ENTER = { duration: 0.55, ease: [0.16, 1, 0.3, 1] } as const;
const EXIT  = { duration: 0.38, ease: [0.4, 0, 0.6, 0] } as const;

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

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
        animate={{ backgroundColor: hovered ? project.color : "rgba(0,0,0,0)" }}
        transition={hovered ? { duration: 0.55, ease: [0.16, 1, 0.3, 1] } : { duration: 0.4, ease: [0.4, 0, 0.6, 0] }}
      >
        {/* Radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={hovered ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] } : { duration: 0.35, ease: "easeIn" }}
          style={{
            background: `radial-gradient(ellipse 70% 100% at 40% 50%, ${project.glow}, transparent)`,
          }}
        />

        {/* Collapsed row */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1fr] gap-4 md:gap-10 items-center py-7 md:py-9">
          <motion.h3
            className="text-lg md:text-xl font-semibold text-white"
            animate={{ x: hovered ? 6 : 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.8 }}
          >
            {project.name}
          </motion.h3>

          <motion.p
            className="text-sm leading-relaxed hidden md:block"
            animate={{ color: hovered ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.35)" }}
            transition={hovered ? ENTER : EXIT}
          >
            {project.description}
          </motion.p>

          <div className="flex flex-col gap-1 items-start md:items-end">
            {project.tags.map((t) => (
              <span key={t} className="text-xs text-white/30 uppercase tracking-wider">{t}</span>
            ))}
            <span className="text-xs text-white/20 mt-1">{project.location}</span>
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
                {project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white border-b border-white/25 hover:border-white pb-0.5 transition-colors duration-200"
                  >
                    Visit site <ArrowUpRight size={13} />
                  </a>
                )}
              </motion.div>

              {/* Screenshots */}
              <div className="grid grid-cols-3 gap-3 pb-9">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="aspect-video rounded-2xl border border-white/[0.08] overflow-hidden"
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
                    {project.images[i] ? (
                      <img
                        src={project.images[i]}
                        alt={`${project.name} screenshot ${i + 1}`}
                        className="w-full h-full object-cover"
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
          · Selected Work ·
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        >
          Our clients have ambitious visions — we make people feel them.
        </motion.h2>
      </div>

      <div className="pb-24">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
        <div className="border-t border-white/[0.07]" />
      </div>
    </section>
  );
}
