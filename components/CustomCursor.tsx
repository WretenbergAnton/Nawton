"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isHovering = useRef(false);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  const dotX = useSpring(cursorX, { stiffness: 800, damping: 50 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const addHover = (e: Event) => {
      isHovering.current = true;
      const el = document.querySelector(".cursor-ring") as HTMLElement;
      if (el) {
        el.style.width = "48px";
        el.style.height = "48px";
        el.style.opacity = "0.5";
      }
    };

    const removeHover = () => {
      isHovering.current = false;
      const el = document.querySelector(".cursor-ring") as HTMLElement;
      if (el) {
        el.style.width = "24px";
        el.style.height = "24px";
        el.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", move);

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor]"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-ring fixed top-0 left-0 w-6 h-6 rounded-full border border-white/60 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-200"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}
