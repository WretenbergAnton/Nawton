"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading]     = useState(false);
  const [gone, setGone]         = useState(false);

  useEffect(() => {
    let current = 0;

    // Simulate progress up to 85% while resources load
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
      }}
    >
      <span style={{
        fontFamily: "var(--font-grotesk)",
        fontSize: "clamp(2rem, 6vw, 3.5rem)",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        color: "#fff",
      }}>
        Nawton
      </span>

      {/* Progress bar */}
      <div style={{
        marginTop: 28,
        width: "clamp(140px, 22vw, 220px)",
        height: 2,
        background: "rgba(255,255,255,0.08)",
        borderRadius: 2,
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          background: "rgba(255,255,255,0.6)",
          borderRadius: 2,
          transition: "width 0.15s ease",
        }} />
      </div>
    </div>
  );
}
