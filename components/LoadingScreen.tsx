"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading]     = useState(false);
  const [gone, setGone]         = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      const step = Math.random() * 12 + 4;
      current = Math.min(current + step, 85);
      setProgress(current);
      if (current >= 85) clearInterval(interval);
    }, 120);

    function finish() {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setFading(true), 300);
    }

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", finish);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      onTransitionEnd={() => { if (fading) setGone(true); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#080810",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.55s ease",
        pointerEvents: fading ? "none" : "all",
        overflow: "hidden",
      }}
    >
      {/* Ambient violet orbs */}
      <div style={{
        position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,40,217,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", left: "30%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Logo */}
      <span style={{
        fontFamily: "var(--font-grotesk)",
        fontSize: "clamp(2rem, 6vw, 3.5rem)",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        background: "linear-gradient(135deg, #fff 30%, #a78bfa 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        Nawton
      </span>

      {/* Progress bar */}
      <div style={{
        marginTop: 28,
        width: "clamp(140px, 22vw, 220px)",
        height: 2,
        background: "rgba(139,92,246,0.15)",
        borderRadius: 2,
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #7c3aed, #a78bfa)",
          borderRadius: 2,
          transition: "width 0.15s ease",
          boxShadow: "0 0 8px rgba(167,139,250,0.6)",
        }} />
      </div>
    </div>
  );
}
