"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. A website typically takes 3–6 weeks from kickoff to launch. A web app or mobile app takes longer — usually 2–4 months. We'll give you a clear timeline before we start.",
  },
  {
    question: "What does it cost?",
    answer:
      "A simple website starts around 15 000 SEK. Web apps and more complex projects are priced based on scope. We're always transparent about pricing — no hidden fees, no surprises.",
  },
  {
    question: "Do you work with clients outside Sundsvall?",
    answer:
      "Absolutely. Most of our work is done remotely. We communicate clearly via video calls, shared docs, and regular updates — wherever you are.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "Just a conversation. Tell us about your project, your goals, and your timeline. We'll take it from there and walk you through exactly what we need.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We stay available after launch for bug fixes, updates, and improvements. Many of our clients work with us on an ongoing basis — we become a long-term partner, not just a one-off vendor.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We work with redesigns regularly. We'll audit what you have, identify what's working and what isn't, and rebuild it properly.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-white/8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-white group-hover:text-white/80 transition-colors duration-200">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/30 transition-colors duration-200"
        >
          <Plus size={14} className="text-white/60" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="text-white/50 text-base leading-relaxed pb-6 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="px-6 md:px-16 py-28 md:py-36 border-t border-white/8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Common <br />
              <span className="italic font-light">questions</span>
            </h2>
          </motion.div>

          <div className="flex flex-col border-t border-white/8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
