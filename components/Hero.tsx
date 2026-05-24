"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const services = [
  {
    title: "Strategy & Discovery",
    description:
      "We start by understanding your business, your users, and your goals. Then we map it into a clear direction your whole team can align behind — what you stand for, who you serve, and how you show up.",
  },
  {
    title: "Design & Brand",
    description:
      "We translate strategy into a visual experience that's unmistakably yours. From UI systems to brand identity — how it looks, how it feels, and how it speaks.",
  },
  {
    title: "Web Development",
    description:
      "Your designs come to life. We build fast, scalable, SEO-optimized websites and web apps using modern technology. Clean code, smooth interactions, real performance.",
  },
  {
    title: "Launch & Grow",
    description:
      "We stay with the work after launch. Monitoring, improvements, and iterations — the same team that understood your vision builds and refines it until it works the way you need it to.",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });
  const opacity = useSpring(rawOpacity, { stiffness: 60, damping: 20 });

  return (
    <>
      {/* ── INTRO ── */}
      <section ref={containerRef} className="relative min-h-screen pt-36 pb-28 px-6 md:px-16 flex flex-col justify-center">
        <motion.div style={{ y, opacity }} className="max-w-5xl mx-auto w-full">

          <motion.p
            className="text-xs text-white/30 tracking-[0.25em] uppercase mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          >
            · Design · Web · Development ·
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-20 max-w-3xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            We build digital products that make your vision impossible to ignore.
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image card */}
            <motion.div
              className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/8 bg-white/3 backdrop-blur-sm relative"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-xs text-white/30 tracking-widest uppercase">Anton & Nawid — Sundsvall</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            >
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                Looking great is a must — and we've made it our craft. But the companies that actually build momentum are the ones that make people feel what they stand for.
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                The founders we work with share the same challenge: there's a gap between where the company is going and what people actually see and experience.{" "}
                <span className="text-white/35 italic">Let's close that gap.</span>
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 mt-2 text-sm text-white/50 hover:text-white transition-colors duration-300 group w-fit"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Start a project
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="relative py-28 px-6 md:px-16">
        {/* Glass card background */}
        <div className="absolute inset-x-4 md:inset-x-8 inset-y-0 rounded-3xl bg-white/[0.03] border border-white/8 backdrop-blur-sm" />

        <div className="relative max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-20 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          >
            We don't just build websites — we build businesses.
          </motion.h2>

          <div className="flex flex-col">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr_120px] gap-6 md:gap-10 items-start py-10 border-t border-white/8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              >
                <h3 className="text-base font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{s.description}</p>
                <div className="hidden md:block w-full aspect-square rounded-2xl bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-purple-900/30 border border-white/8" />
              </motion.div>
            ))}
            <div className="border-t border-white/8" />
          </div>
        </div>
      </section>
    </>
  );
}
