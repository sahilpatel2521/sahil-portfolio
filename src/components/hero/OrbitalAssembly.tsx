"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface OrbitalAssemblyProps {
  className?: string;
}

export const OrbitalAssembly: React.FC<OrbitalAssemblyProps> = ({ className }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    // Only attach mouse tracking on non-touch devices with fine pointers
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      // Subtle clamping to prevent exaggerated motion
      setMousePos({
        x: Math.max(-1, Math.min(1, x)) * 12,
        y: Math.max(-1, Math.min(1, y)) * 12,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center select-none pointer-events-none",
        "w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px]",
        className
      )}
      style={{ perspective: "1000px" }}
      aria-hidden="true"
    >
      {/* Background Soft Ambient Sheen (Deep Charcoal / Silver diffuse) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-charcoal/40 via-transparent to-silver/5 blur-3xl opacity-60" />

      {/* 3D Parallax Wrapper */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform:
            mounted && !shouldReduceMotion
              ? `rotateX(${-mousePos.y * 0.8}deg) rotateY(${mousePos.x * 0.8}deg)`
              : "none",
        }}
      >
        {/* ============================================================== */}
        {/* RING 1: OUTER CALIBRATED GIMBAL (Slow Clockwise Rotation)       */}
        {/* ============================================================== */}
        <div
          className={cn(
            "absolute inset-0 rounded-full border border-silver/30",
            mounted && !shouldReduceMotion && "animate-spin-slow"
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(68deg) rotateY(-18deg)",
            boxShadow: "0 0 25px -5px rgba(192, 192, 192, 0.08)",
          }}
        >
          {/* Outer Ring Brushed Specular Highlights */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-silver/10 to-transparent" />

          {/* Coordinate Hashes (North, South, East, West) */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[8px] sm:text-[9px] text-silver-dark tracking-widest uppercase">
            000°
          </span>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-mono text-[8px] sm:text-[9px] text-silver-dark tracking-widest uppercase">
            180°
          </span>
          <span className="absolute top-1/2 -left-4 -translate-y-1/2 font-mono text-[8px] sm:text-[9px] text-silver-dark tracking-widest uppercase">
            270°
          </span>
          <span className="absolute top-1/2 -right-4 -translate-y-1/2 font-mono text-[8px] sm:text-[9px] text-silver-dark tracking-widest uppercase">
            090°
          </span>

          {/* Precision tick markers around perimeter */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-silver/60" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-silver/60" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-silver/60" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-silver/60" />
        </div>

        {/* ============================================================== */}
        {/* RING 2: MIDDLE INCLINED GIMBAL (Counter-Clockwise Rotation)     */}
        {/* ============================================================== */}
        <div
          className={cn(
            "absolute w-[78%] h-[78%] rounded-full border border-silver/40",
            mounted && !shouldReduceMotion && "animate-spin-reverse-medium"
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(42deg) rotateY(38deg)",
          }}
        >
          {/* Hairline double track */}
          <div className="absolute inset-[3px] rounded-full border border-border-medium" />

          {/* Signature Accent: Signal Red Alignment Laser Notch (Strictly 3-5%) */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="h-2 w-0.5 bg-signal-red shadow-[0_0_8px_rgba(225,6,0,0.8)]" />
            <span className="h-1 w-1 rounded-full bg-signal-red mt-0.5" />
          </div>

          {/* Opposite Silver Counter-Weight */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-silver/60" />
        </div>

        {/* ============================================================== */}
        {/* RING 3: INNER TELEMETRY RING (Vertical Tilt)                   */}
        {/* ============================================================== */}
        <div
          className={cn(
            "absolute w-[56%] h-[56%] rounded-full border border-silver/20",
            mounted && !shouldReduceMotion && "animate-spin-slow"
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(-35deg) rotateY(55deg)",
          }}
        >
          {/* Subtle dotted orbital track */}
          <div className="absolute inset-0 rounded-full border border-dashed border-silver-dark/30" />
        </div>

        {/* ============================================================== */}
        {/* CENTRAL SIGNATURE: METALLIC SILVER SPHERICAL CORE              */}
        {/* ============================================================== */}
        <div
          className="relative w-[28%] h-[28%] rounded-full flex items-center justify-center transition-transform duration-500"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #ffffff 0%, #dedede 15%, #b4b4b4 38%, #5a5a5a 68%, #222222 92%, #141414 100%)",
            boxShadow:
              "inset -4px -6px 12px rgba(0, 0, 0, 0.9), inset 3px 4px 8px rgba(255, 255, 255, 0.7), 0 16px 36px -4px rgba(0, 0, 0, 0.9), 0 0 20px rgba(192, 192, 192, 0.15)",
          }}
        >
          {/* Precision Equatorial Seam */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-charcoal/80" />

          {/* Micro Telemetry Crosshair */}
          <div className="relative w-4 h-4 flex items-center justify-center opacity-70">
            <div className="absolute inset-x-0 h-[1px] bg-charcoal/90" />
            <div className="absolute inset-y-0 w-[1px] bg-charcoal/90" />
            {/* Center Signal Pulse Core */}
            <div className="h-1.5 w-1.5 rounded-full bg-signal-red" />
          </div>

          {/* Specular Highlight Catch */}
          <div className="absolute top-[18%] left-[24%] w-2 h-1 rounded-full bg-white/70 blur-[0.5px] rotate-[-25deg]" />
        </div>

        {/* Satellite Horizon Reference Arc (Subtle Wireframe Depth) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="var(--silver-dark)"
            strokeWidth="0.3"
            strokeDasharray="1 3"
          />
          <line
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            stroke="var(--silver-dark)"
            strokeWidth="0.2"
          />
        </svg>
      </div>

      {/* Embedded Ambient Lighting Ground Shadow */}
      <div
        className="absolute -bottom-8 w-[60%] h-6 rounded-full bg-black/60 blur-xl pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};
