"use client";

import { useId } from "react";

const FONT_STACK = "var(--font-playfair), Didot, Georgia, serif";

export default function NawtonLogo({ className }: { className?: string }) {
  const maskId = useId();

  return (
    <svg
      viewBox="0 0 440 440"
      role="img"
      aria-label="Nawton"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="440" height="440" fill="#fff" />
          <rect x="0" y="189" width="440" height="62" fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <rect x="218.5" y="50" width="3" height="340" fill="#fff" />
        <text
          x="205"
          y="330"
          textAnchor="end"
          fontFamily={FONT_STACK}
          fontSize="250"
          fill="#fff"
        >
          N
        </text>
        <text
          x="235"
          y="330"
          textAnchor="start"
          fontFamily={FONT_STACK}
          fontSize="250"
          fill="#fff"
        >
          T
        </text>
      </g>
      <text
        x="220"
        y="230"
        textAnchor="middle"
        fontFamily={FONT_STACK}
        fontSize="34"
        letterSpacing="14"
        fill="#fff"
      >
        NAWTON
      </text>
    </svg>
  );
}
