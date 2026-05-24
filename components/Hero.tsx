"use client";

import { useReducedMotion, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const words1 = ["Vi", "bygger"];
const words2 = ["digitala", "produkter."];

export default function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const wordVariant = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-12 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-10 max-w-screen-xl w-full">
        <motion.p
          className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Webbutvecklingsbyrå — Sundsvall
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.div
            className="flex gap-4 md:gap-6"
            variants={reduced ? undefined : container}
            initial="hidden"
            animate="show"
          >
            {words1.map((word) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  className="block text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none"
                  variants={reduced ? undefined : wordVariant}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            variants={reduced ? undefined : container}
            initial="hidden"
            animate="show"
          >
            {words2.map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  className={`block text-6xl md:text-8xl lg:text-9xl font-bold leading-none ${
                    i === 1 ? "italic text-white/60" : "text-white"
                  }`}
                  variants={reduced ? undefined : wordVariant}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 mt-10 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Kontakta oss
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-8 right-6 md:right-12 z-10 flex flex-col items-center gap-2"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest text-white/30">
          Scrolla
        </span>
        <motion.div
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
