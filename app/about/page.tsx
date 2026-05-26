"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: EASE },
});

const values = [
  {
    title: "Craft over speed",
    description:
      "We'd rather take the time to do something right than ship something that just barely works. Every detail matters — the ones people notice and the ones they don't.",
  },
  {
    title: "Honest communication",
    description:
      "No jargon, no runaround. We tell you what we think, explain our decisions, and keep you in the loop at every step.",
  },
  {
    title: "Long-term thinking",
    description:
      "We build things that last. Clean code, solid foundations, and design that doesn't date itself in six months.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#111]">

      {/* Nav */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors duration-200 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back
        </Link>
        <span style={{ fontFamily: "var(--font-grotesk)" }} className="text-[#111] font-semibold text-lg tracking-tight">
          Nawton
        </span>
        <Link
          href="/contact"
          className="text-sm text-black/40 hover:text-black transition-colors duration-200"
        >
          Contact
        </Link>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-16 pt-16 pb-24 max-w-6xl mx-auto">
        <motion.p
          className="text-xs text-black/30 tracking-[0.2em] uppercase mb-6"
          {...fade(0)}
        >
          · About us ·
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#111] leading-[1.05] max-w-3xl mb-12"
          {...fade(0.08)}
        >
          Two developers. One shared obsession with quality.
        </motion.h1>

        <motion.div
          className="h-px bg-black/10 w-full mb-16"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        />

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">

          {/* Anton */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-black/5"
            {...fade(0.1)}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#f0ede6] border border-black/5" />
            <div>
              <h2 className="text-2xl font-bold text-[#111] mb-1">Anton Wretenberg</h2>
              <p className="text-sm text-black/40 uppercase tracking-widest">Co-founder · Developer</p>
            </div>
            <p className="text-black/60 leading-relaxed">
              Anton focuses on the technical side — building fast, scalable web applications and making sure everything works exactly as it should. He has a sharp eye for performance and a low tolerance for things that feel slow or broken.
            </p>
            <p className="text-black/60 leading-relaxed">
              Based in Sundsvall, he's been building for the web since his teens and brings both depth and curiosity to every project.
            </p>
          </motion.div>

          {/* Nawid */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-black/5"
            {...fade(0.16)}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#f0ede6] border border-black/5" />
            <div>
              <h2 className="text-2xl font-bold text-[#111] mb-1">Nawid</h2>
              <p className="text-sm text-black/40 uppercase tracking-widest">Co-founder · Designer & Developer</p>
            </div>
            <p className="text-black/60 leading-relaxed">
              Nawid sits at the intersection of design and engineering. He cares deeply about how things look and feel — the transitions, the hierarchy, the way a page guides your eye without you noticing.
            </p>
            <p className="text-black/60 leading-relaxed">
              His background spans both creative direction and frontend development, which means designs don't just look good in Figma — they work in the browser too.
            </p>
          </motion.div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mb-24">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#111] leading-tight"
            {...fade(0)}
          >
            Why we started Nawton
          </motion.h2>
          <motion.div className="flex flex-col gap-5" {...fade(0.08)}>
            <p className="text-black/60 leading-relaxed text-base">
              We kept seeing the same problem: businesses with genuine ambition stuck with websites that didn't reflect them. Generic templates, agencies that over-promised and under-delivered, or developers who could build but not design — and designers who couldn't build.
            </p>
            <p className="text-black/60 leading-relaxed text-base">
              Nawton is our answer to that. A small, focused studio where design and development aren't two separate handoffs — they happen together, by people who care about both.
            </p>
            <p className="text-black/60 leading-relaxed text-base">
              We work with a small number of clients at a time so we can do the work properly. No account managers, no handoffs. You work directly with us.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.h2
          className="text-3xl font-bold text-[#111] mb-8"
          {...fade(0)}
        >
          How we work
        </motion.h2>
        <div className="flex flex-col border-t border-black/10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 py-8 border-b border-black/10"
              {...fade(i * 0.07)}
            >
              <h3 className="text-base font-semibold text-[#111]">{v.title}</h3>
              <p className="text-black/55 leading-relaxed text-sm">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg"
            {...fade(0)}
          >
            Ready to build something worth showing?
          </motion.h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#111] font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/90 transition-colors duration-200 shrink-0"
          >
            Start a project <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-6 bg-[#111] border-t border-white/8 flex items-center justify-between">
        <span className="text-xs text-white/25">© 2025 Nawton — Sundsvall, Sweden</span>
        <div className="flex gap-6">
          {["LinkedIn", "GitHub", "Instagram"].map((s) => (
            <a key={s} href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200">{s}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
