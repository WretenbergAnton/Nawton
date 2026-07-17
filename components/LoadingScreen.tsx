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
      aria-hidden="true"
      onTransitionEnd={() => { if (fading) setGone(true); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#080810",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.55s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Logo */}
      <span style={{
        fontFamily: "var(--font-grotesk)",
        fontSize: "clamp(1.8rem, 5vw, 3rem)",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        color: "#fff",
      }}>
        Nawton
      </span>

      {/* Percentage */}
      <span style={{
        marginTop: 12,
        fontFamily: "var(--font-grotesk)",
        fontSize: "0.72rem",
        letterSpacing: "0.15em",
        color: "rgba(255,255,255,0.25)",
      }}>
        {Math.round(progress)}%
      </span>

      {/* Full-width progress line pinned to bottom */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 1,
        background: "rgba(255,255,255,0.06)",
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "rgba(255,255,255,0.5)",
          transition: "width 0.15s ease",
        }} />
      </div>
    </div>
  );
}
