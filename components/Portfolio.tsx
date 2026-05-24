"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

function ProjectRow({
  project,
  index,
  reduced,
}: {
  project: Project;
  index: number;
  reduced: boolean | null;
}) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleClick = () => {
    if (project.url) window.open(project.url, "_blank");
  };

  return (
    <motion.div
      ref={rowRef}
      className="relative border-b border-white/10"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
    >
      <div
        className={`group flex items-center gap-6 md:gap-10 py-7 md:py-8 ${project.url ? "cursor-pointer" : "cursor-default"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        <span className="text-xs text-white/20 w-6 shrink-0 font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`text-2xl md:text-4xl font-bold flex-1 transition-colors duration-300 ${
            hovered ? "text-white/50" : "text-white"
          }`}
        >
          {project.title}
        </span>

        <div className="hidden md:flex gap-2 flex-wrap justify-end max-w-xs">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-white/30 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="text-sm text-white/20 shrink-0">{project.year}</span>
      </div>

      {!reduced && (
        <AnimatePresence>
          {hovered && project.image && (
            <motion.div
              className="absolute pointer-events-none z-20 w-52 md:w-64 aspect-video rounded-lg overflow-hidden shadow-2xl"
              style={{
                left: mousePos.x + 20,
                top: mousePos.y - 80,
              }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

export default function Portfolio() {
  const reduced = useReducedMotion();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <section id="portfolio" className="px-6 md:px-12 py-32 md:py-40 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white mb-12"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Utvalda projekt
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider border transition-all duration-200 ${
              activeTag === null
                ? "bg-white text-black border-white"
                : "border-white/20 text-white/50 hover:border-white/40 hover:text-white/80"
            }`}
          >
            Alla
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider border transition-all duration-200 ${
                activeTag === tag
                  ? "bg-white text-black border-white"
                  : "border-white/20 text-white/50 hover:border-white/40 hover:text-white/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <div className="border-t border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag ?? "all"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((project, i) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={i}
                  reduced={reduced}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
