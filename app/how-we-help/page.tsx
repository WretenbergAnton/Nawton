"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "We get to know you",
    description:
      "Before we touch a single pixel or write a line of code, we sit down with you. We dig into your business, your users, your goals, and what's standing in the way. The output is a clear direction — what we're building, why, and for whom.",
    tags: ["Kickoff call", "User research", "Strategy brief"],
    color: "from-violet-500/20 to-indigo-500/10",
    accent: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&fit=crop",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "We make it look like you",
    description:
      "We translate strategy into a visual experience that's unmistakably yours. Wireframes, UI systems, brand touchpoints — every detail is considered. You see it and approve before we build anything.",
    tags: ["Wireframes", "UI design", "Brand identity"],
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "#3b82f6",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&fit=crop",
  },
  {
    number: "03",
    title: "Development",
    subtitle: "We build it right",
    description:
      "Your designs come to life. Fast, scalable, and built on modern technology. We write clean code, build smooth interactions, and make sure everything performs — on every device, at every screen size.",
    tags: ["Next.js", "React Native", "Performance"],
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "#10b981",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&fit=crop",
  },
  {
    number: "04",
    title: "Testing",
    subtitle: "We make sure it works",
    description:
      "Nothing ships until it's been tested thoroughly. We check every flow, every edge case, every device. If something's off, we fix it before you or your users ever see it.",
    tags: ["QA testing", "Cross-device", "Performance audit"],
    color: "from-amber-500/20 to-orange-500/10",
    accent: "#f59e0b",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80&fit=crop",
  },
  {
    number: "05",
    title: "Launch",
    subtitle: "We go live — together",
    description:
      "Launch day is exciting, not stressful. We handle deployment, monitor performance, and stay available. After launch, we stick around for iterations and improvements — the same team that built it keeps it running.",
    tags: ["Deployment", "Monitoring", "Ongoing support"],
    color: "from-rose-500/20 to-pink-500/10",
    accent: "#f43f5e",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&fit=crop",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-10">

      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full border-2 mt-1 shrink-0 z-10"
          style={{
            borderColor: step.accent,
            backgroundColor: step.accent,
            boxShadow: `0 0 16px ${step.accent}60`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        />
        {index < steps.length - 1 && (
          <motion.div
            className="w-px flex-1 mt-3 origin-top"
            style={{
              background: `linear-gradient(to bottom, ${step.accent}60, transparent)`,
              scaleY: lineScale,
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="pb-24"
        style={{ opacity, y }}
      >
        <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: step.accent }}>
          {step.number} — {step.subtitle}
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {step.title}
        </h2>

        <div className={`w-full rounded-2xl bg-gradient-to-br ${step.color} border border-white/8 overflow-hidden mb-6`}>
          <div className="relative w-full h-56 md:h-72 overflow-hidden">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="p-8 md:p-10">
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function HowWeHelpPage() {
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
        <span className="text-white font-semibold text-lg tracking-tight">Nawton</span>
        <Link href="/contact" className="text-sm text-white/40 hover:text-white transition-colors duration-200">
          Contact
        </Link>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-16 pt-16 pb-20 max-w-4xl mx-auto">
        <motion.p
          className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          · Our process ·
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        >
          How we <br />
          <span className="italic font-light">work with you.</span>
        </motion.h1>
        <motion.p
          className="text-white/40 text-base max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
        >
          From the first conversation to launch and beyond — here's exactly what working with Nawton looks like.
        </motion.p>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-16 pb-10 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20 border-t border-white/8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Ready to start?
          </motion.h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#080810] font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/90 transition-colors duration-200 shrink-0"
          >
            Contact us <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-6 border-t border-white/8 flex items-center justify-between">
        <span className="text-xs text-white/25">© 2025 Nawton — Sundsvall, Sweden</span>
      </footer>
    </div>
  );
}
