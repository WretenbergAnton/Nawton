"use client";

import { useReducedMotion, motion } from "framer-motion";
import { Globe, Code2, Smartphone, Search, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Hemsidor",
    description: "Snabba, moderna och SEO-optimerade hemsidor skräddarsydda för ditt företag.",
    icon: Globe,
  },
  {
    num: "02",
    title: "Webbappar",
    description: "Skalbara applikationer byggda med de senaste teknologierna.",
    icon: Code2,
  },
  {
    num: "03",
    title: "Mobilappar",
    description: "Plattformsoberoende appar för iOS och Android.",
    icon: Smartphone,
  },
  {
    num: "04",
    title: "SEO",
    description: "Vi optimerar din synlighet i sökmotorer så att rätt kunder hittar dig.",
    icon: Search,
  },
];

const lineVariant = {
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
};

const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
};

export default function Services() {
  const reduced = useReducedMotion();
  const vp = { once: true };

  return (
    <section id="services" className="px-6 md:px-12 py-32 md:py-40 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-16 md:mb-20"
          variants={reduced ? undefined : { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          Vad vi erbjuder
        </motion.h2>

        <div className="flex flex-col">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.num}
                variants={reduced ? undefined : rowVariant}
                initial="hidden"
                whileInView="show"
                viewport={vp}
                transition={{ delay: i * 0.08 }}
              >
                <motion.div
                  className="h-px bg-white/10"
                  variants={reduced ? undefined : lineVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={vp}
                  transition={{ delay: i * 0.08 }}
                />
                <div className="group flex items-center gap-6 md:gap-10 py-7 md:py-8 cursor-default">
                  <span className="text-xs text-white/20 w-6 shrink-0 font-mono">
                    {service.num}
                  </span>
                  <Icon size={18} className="text-white/30 shrink-0 group-hover:text-white/60 transition-colors duration-300" />
                  <span className="text-2xl md:text-3xl font-bold text-white flex-1 group-hover:text-white/80 transition-colors duration-300">
                    {service.title}
                  </span>
                  <p className="hidden md:block text-sm text-white/30 max-w-xs text-right group-hover:text-white/50 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ArrowRight
                    size={16}
                    className="text-white/20 shrink-0 group-hover:text-white/60 group-hover:translate-x-1.5 transition-all duration-300"
                  />
                </div>
              </motion.div>
            );
          })}
          <div className="h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}
