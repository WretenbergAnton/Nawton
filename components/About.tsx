"use client";

import { useReducedMotion, motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
};

const lineVariant = {
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
};

const stats = [
  { value: "2", label: "Grundare" },
  { value: "15+", label: "Projekt" },
  { value: "100%", label: "Nöjda kunder" },
];

export default function About() {
  const reduced = useReducedMotion();
  const vp = { once: true };

  return (
    <section id="about" className="px-6 md:px-12 py-32 md:py-40">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-white leading-none mb-3">
              Om oss
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              — Sundsvall, Sverige
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            variants={reduced ? undefined : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            transition={{ delay: 0.15 }}
          >
            <div className="flex flex-col gap-4 pb-8 border-b border-white/10">
              <div>
                <p className="text-white font-medium">Anton Wretenberg</p>
                <p className="text-sm text-white/40">Webbutvecklare</p>
              </div>
              <div>
                <p className="text-white font-medium">Nawid</p>
                <p className="text-sm text-white/40">Webbutvecklare</p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed text-base">
              Vi kombinerar teknisk precision med ett öga för design för att
              leverera produkter som både ser bra ut och fungerar felfritt.
              Baserade i Sundsvall, tillgängliga överallt.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="h-px bg-white/10 my-16 md:my-20"
          variants={reduced ? undefined : lineVariant}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        />

        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-1"
              variants={reduced ? undefined : fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={{ delay: i * 0.08 }}
            >
              <span className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/30">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
