"use client";

import { useEffect, useRef } from "react";

type Key = { l: string; w?: number; tid?: boolean };

const ROWS: Key[][] = [
  [{ l: "esc", w: 1.5 }, { l: "F1" }, { l: "F2" }, { l: "F3" }, { l: "F4" }, { l: "F5" }, { l: "F6" }, { l: "F7" }, { l: "F8" }, { l: "F9" }, { l: "F10" }, { l: "F11" }, { l: "F12" }, { l: "⏏", w: 1, tid: true }],
  [{ l: "`" }, { l: "1" }, { l: "2" }, { l: "3" }, { l: "4" }, { l: "5" }, { l: "6" }, { l: "7" }, { l: "8" }, { l: "9" }, { l: "0" }, { l: "-" }, { l: "=" }, { l: "⌫", w: 2.25 }],
  [{ l: "tab", w: 1.75 }, { l: "Q" }, { l: "W" }, { l: "E" }, { l: "R" }, { l: "T" }, { l: "Y" }, { l: "U" }, { l: "I" }, { l: "O" }, { l: "P" }, { l: "[" }, { l: "]" }, { l: "\\", w: 1.75 }],
  [{ l: "caps", w: 2 }, { l: "A" }, { l: "S" }, { l: "D" }, { l: "F" }, { l: "G" }, { l: "H" }, { l: "J" }, { l: "K" }, { l: "L" }, { l: ";" }, { l: "'" }, { l: "↩", w: 2.5 }],
  [{ l: "⇧", w: 2.5 }, { l: "Z" }, { l: "X" }, { l: "C" }, { l: "V" }, { l: "B" }, { l: "N" }, { l: "M" }, { l: "," }, { l: "." }, { l: "/" }, { l: "⇧", w: 3 }],
  [{ l: "fn", w: 1.5 }, { l: "⌃", w: 1.5 }, { l: "⌥", w: 1.5 }, { l: "⌘", w: 2 }, { l: "", w: 6.2 }, { l: "⌘", w: 2 }, { l: "◀" }, { l: "▼▲" }, { l: "▶" }],
];

export default function LaptopSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const lidRef  = useRef<HTMLDivElement>(null);
  const gsRef   = useRef<HTMLDivElement>(null);
  const c1Ref   = useRef<HTMLDivElement>(null);
  const c2Ref   = useRef<HTMLDivElement>(null);
  const c3Ref   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const wrap = wrapRef.current;
    const lid  = lidRef.current;
    const gs   = gsRef.current;
    const c1   = c1Ref.current;
    const c2   = c2Ref.current;
    const c3   = c3Ref.current;
    if (!hero || !wrap || !lid || !gs || !c1 || !c2 || !c3) return;

    let raf = false;

    const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);
    const lerp  = (a: number, b: number, t: number) => a + (b - a) * t;
    const ease  = (t: number) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const seg   = (p: number, lo: number, hi: number) => ease(clamp((p - lo) / (hi - lo), 0, 1));

    function tick() {
      const maxScroll = hero!.offsetHeight - window.innerHeight;
      const p = clamp(window.scrollY / maxScroll, 0, 1);

      // Entry: fly in from right + lid opens
      const pE = seg(p, 0, 0.58);
      const tx = lerp(360, 0, pE);
      const ry = lerp(-54, -5, pE);
      const rx = lerp(-20, -9, pE);

      // Zoom: scale up + shift down to reveal screen
      const pZ = seg(p, 0.58, 1);
      const sc = lerp(1, 2.5, pZ);
      const ty = lerp(0, 110, pZ);

      wrap!.style.transform =
        `translateX(${tx}px) translateY(${ty}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${sc})`;

      // Lid opens (transform-origin: center top → hinge at back)
      const pL = seg(p, 0, 0.65);
      lid!.style.transform = `rotateX(${lerp(-4, -108, pL)}deg)`;

      // Screen glow
      const g = clamp((pL - .25) / .5, 0, 1);
      gs!.style.boxShadow = `0 0 ${20 + g * 50}px rgba(0,200,50,${.25 + g * .3}), 0 0 ${50 + g * 80}px rgba(0,170,40,${.1 + g * .18})`;

      // Captions
      c1!.style.opacity = String(p < .14 ? 1 : Math.max(0, 1 - (p - .14) / .1));
      c2!.style.opacity = String(p > .28 && p < .68
        ? Math.min(1, (p - .28) / .1) * Math.min(1, (.68 - p) / .12) : 0);
      c3!.style.opacity = String(p > .83 ? Math.min(1, (p - .83) / .1) : 0);

      raf = false;
    }

    const onScroll = () => { if (!raf) { raf = true; requestAnimationFrame(tick); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={heroRef} style={{ height: "320vh", position: "relative" }}>
      <div style={{
        position: "sticky", top: 0, height: "100vh",
        overflow: "hidden", display: "flex",
        alignItems: "center", justifyContent: "center",
      }}>

        {/* Caption 1 */}
        <div ref={c1Ref} className="ls-cap" style={{ left: "7%", top: "50%", transform: "translateY(-50%)" }}>
          <div className="ls-label">· Scroll to explore ·</div>
          <h2>We build<br />for the web.</h2>
          <p>Premium digital products crafted from scratch — no templates, no shortcuts.</p>
        </div>

        {/* Caption 2 */}
        <div ref={c2Ref} className="ls-cap" style={{ left: "7%", top: "50%", transform: "translateY(-50%)", opacity: 0 }}>
          <div className="ls-label">· Our craft ·</div>
          <h2>Fast.<br />Beautiful.<br />Modern.</h2>
          <p>Every pixel intentional. Every interaction smooth.</p>
        </div>

        {/* Caption 3 */}
        <div ref={c3Ref} className="ls-cap" style={{ bottom: "9%", left: "50%", transform: "translateX(-50%)", textAlign: "center", opacity: 0 }}>
          <div className="ls-label">· Open for business ·</div>
          <h2>Ready<br />when you are.</h2>
        </div>

        {/* 3D Laptop */}
        <div className="ls-scene">
          <div ref={wrapRef} className="ls-wrap">

            {/* Lid (screen) */}
            <div ref={lidRef} className="ls-lid">
              <div className="ls-lid-shell">
                <div className="ls-cam" />
                <div className="ls-bezel">
                  {/* ★ GREEN SCREEN — replace content here ★ */}
                  <div ref={gsRef} className="ls-screen">
                    <div className="ls-glare" />
                  </div>
                </div>
              </div>
              <div className="ls-lid-back" />
            </div>

            {/* Base (keyboard) */}
            <div className="ls-base">
              <div className="ls-base-top">
                <div className="ls-kbd">
                  {ROWS.map((row, ri) => (
                    <div key={ri} className="ls-kr">
                      {row.map((k, ki) => (
                        <div
                          key={ki}
                          className={`ls-k${k.tid ? " ls-k-tid" : ""}`}
                          style={{ flex: k.w ?? 1 }}
                        >
                          {k.l}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="ls-tp" />
              </div>
              <div className="ls-base-front" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
