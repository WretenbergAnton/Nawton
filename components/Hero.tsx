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
      <section ref={containerRef} className="relative min-h-screen px-6 md:px-16 flex items-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left – text */}
            <div className="flex flex-col gap-8 z-10">
              <motion.p
                className="text-xs text-white/30 tracking-[0.25em] uppercase"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
              >
                · Design · Web · Development ·
              </motion.p>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06]"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
              >
                Web agency <br />
                <span className="italic font-light">in Sundsvall</span>
              </motion.h1>

              <motion.p
                className="text-white/50 text-base md:text-lg leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
              >
                We help brands grow digitally. We combine strategy, creativity and technology to build solutions that drive real results.
              </motion.p>

              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
              >
                <a
                  href="/contact"
                  className="bg-white text-black font-medium text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-200"
                >
                  Contact us
                </a>
                <a
                  href="#services"
                  className="border border-white/20 text-white font-medium text-sm px-7 py-3.5 rounded-full hover:border-white/50 transition-colors duration-200"
                >
                  How we can help
                </a>
              </motion.div>
            </div>

            {/* Right – Nawton logo */}
            <motion.div
              className="flex items-center justify-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.33, 1, 0.68, 1] as [number,number,number,number] }}
            >
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />

              {/* Desktop */}
              <motion.img
                src="/logo.png"
                alt="Nawton"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block w-full max-w-sm lg:max-w-md select-none relative"
                style={{ mixBlendMode: "screen" }}
              />

              {/* Mobile */}
              <img
                src="/logo.png"
                alt=""
                className="md:hidden w-56 select-none mx-auto mt-4 opacity-20"
                style={{ mixBlendMode: "screen" }}
              />
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
