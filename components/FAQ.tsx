"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

function FAQItem({
  question,
  answer,
  index,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className={`border border-transparent rounded-lg transition-colors duration-200 ${
        open ? "border-white/20 bg-white/[0.03]" : "hover:bg-white/[0.02]"
      }`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: EASE }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 px-4 py-5 text-left"
      >
        <span
          className={`text-base md:text-lg transition-colors duration-200 ${
            open ? "text-white font-medium" : "text-white/70 font-normal"
          }`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="shrink-0"
        >
          <ChevronDown size={18} className={open ? "text-white" : "text-white/40"} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="text-white/50 text-base leading-relaxed px-4 pb-5 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 md:px-16 py-28 md:py-36 border-t border-white/8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {t.faq.title}
        </motion.h2>

        <div className="flex flex-col gap-1">
          {t.faq.items.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
