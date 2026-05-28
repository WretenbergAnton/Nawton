"use client";

import { useEffect, useRef } from "react";

export default function LaptopSection() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hero  = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;

    video.load();

    const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);

    let rafId = 0;
    let pendingTime = -1;

    function flush() {
      if (video && pendingTime >= 0) {
        video.currentTime = pendingTime;
        pendingTime = -1;
      }
      rafId = 0;
    }

    function onScroll() {
      if (!hero || !video?.duration) return;
      const rect = hero.getBoundingClientRect();
      const total = hero.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / total, 0, 1);
      pendingTime = p * video.duration;
      if (!rafId) rafId = requestAnimationFrame(flush);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    video.addEventListener("loadedmetadata", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      video.removeEventListener("loadedmetadata", onScroll);
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
          }}
        />

      </div>
    </div>
  );
}
