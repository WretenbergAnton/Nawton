"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projects = [
  {
    id: 1,
    name: "Restaurang Sundsvall",
    description:
      "A modern website with integrated booking system and digital menu for a local restaurant. Built to handle peak traffic during lunch and dinner rushes without a hiccup.",
    tags: ["Web Design", "Next.js", "Branding"],
    location: "Sundsvall, Sweden",
    year: "2024",
    color: "rgba(120, 53, 15, 0.5)",
    accent: "#b45309",
    url: "#",
  },
  {
    id: 2,
    name: "Mode E-commerce",
    description:
      "A full e-commerce platform with payments, inventory management, and a custom storefront designed to convert. Stripe integration with real-time stock updates.",
    tags: ["Web App", "Stripe", "Next.js"],
    location: "Stockholm, Sweden",
    year: "2024",
    color: "rgba(15, 40, 80, 0.5)",
    accent: "#1d4ed8",
    url: "#",
  },
  {
    id: 3,
    name: "Booking App",
    description:
      "A cross-platform mobile app for booking services with real-time availability and push notifications. Available on iOS and Android with a shared codebase.",
    tags: ["Mobile App", "React Native", "Expo"],
    location: "Sundsvall, Sweden",
    year: "2025",
    color: "rgba(6, 40, 22, 0.5)",
    accent: "#16a34a",
    url: "#",
  },
  {
    id: 4,
    name: "Fastighetsbyrån",
    description:
      "A property listing platform with advanced filtering, map integration, and lead capture forms — turning browsers into buyers.",
    tags: ["Web App", "Maps API", "Next.js"],
    location: "Gothenburg, Sweden",
    year: "2025",
    color: "rgba(30, 12, 60, 0.5)",
    accent: "#7c3aed",
    url: "#",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">

      {/* Nav */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back
        </Link>
        <span
          style={{ fontFamily: "var(--font-grotesk)" }}
          className="text-white font-semibold text-lg tracking-tight"
        >
          Nawton
        </span>
        <Link
          href="/contact"
          className="text-sm text-white/40 hover:text-white transition-colors duration-200"
        >
          Contact
        </Link>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-16 pt-16 pb-20 max-w-6xl mx-auto">
        <motion.p
          className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          · Projects & Case Studies ·
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-3xl mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        >
          Work we're proud of.
        </motion.h1>
        <motion.p
          className="text-white/40 text-base max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
        >
          A selection of projects across web, mobile, and e-commerce. Every one built from scratch — no templates, no shortcuts.
        </motion.p>
      </section>

      {/* Projects grid */}
      <section className="px-6 md:px-16 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className="group relative rounded-3xl border border-white/8 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE }}
            >
              {/* Image placeholder */}
              <div
                className="relative h-52 w-full overflow-hidden"
                style={{ background: p.color }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${p.accent}33, transparent)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/10 text-6xl font-bold" style={{ fontFamily: "var(--font-grotesk)" }}>
                    {p.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7 gap-4 bg-white/[0.03]">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-white leading-snug">{p.name}</h2>
                  <a
                    href={p.url}
                    className="shrink-0 mt-0.5 text-white/30 hover:text-white transition-colors duration-200"
                    aria-label="View project"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="text-white/50 text-sm leading-relaxed flex-1">{p.description}</p>

                <div className="flex items-end justify-between pt-2 border-t border-white/8">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-white/40 bg-white/[0.06] border border-white/8 px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col items-end shrink-0 ml-4">
                    <span className="text-xs text-white/25">{p.location}</span>
                    <span className="text-xs text-white/20">{p.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 bg-white/[0.03] border-t border-white/8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Got a project in mind?
          </motion.h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#080810] font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/90 transition-colors duration-200 shrink-0"
          >
            Start a project <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-6 border-t border-white/8 flex items-center justify-between">
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
