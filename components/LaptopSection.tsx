"use client";

import { useEffect, useRef, useState } from "react";

export default function LaptopSection() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hero  = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;

    video.load();

    const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);

    let rafId = 0;
    let pendingTime = -1;
    let isReady = false;

    function flush() {
      if (video && pendingTime >= 0) {
        video.currentTime = pendingTime;
        pendingTime = -1;
      }
      rafId = 0;
    }

    function onScroll() {
      if (!isReady || !hero || !video?.duration) return;
      const rect = hero.getBoundingClientRect();
      const total = hero.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / total, 0, 1);
      pendingTime = p * video.duration;
      if (!rafId) rafId = requestAnimationFrame(flush);
    }

    function onReady() {
      isReady = true;
      setReady(true);
      onScroll();
    }

    // Already buffered (e.g. cached)
    if (video.readyState >= 4) {
      onReady();
    } else {
      video.addEventListener("canplaythrough", onReady, { once: true });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    video.addEventListener("loadedmetadata", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadedmetadata", onScroll);
      video.removeEventListener("canplaythrough", onReady);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={heroRef} style={{ position: "relative", height: "400vh", background: "#000" }}>
      <div style={{
        position: "sticky", top: 0, height: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "#000",
      }}>

        {!ready && (
          <div style={{
            position: "absolute", zIndex: 20,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
          }}>
            <div className="ls-spinner" />
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
              Loading
            </span>
          </div>
        )}

        <video
          ref={videoRef}
          src="/newlaptop.mp4"
          muted
          playsInline
          preload="auto"
          style={{
            width: "100%",
            maxWidth: "clamp(280px, 72vw, 800px)",
            height: "auto",
            display: "block",
            opacity: ready ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />

      </div>
    </div>
  );
}
