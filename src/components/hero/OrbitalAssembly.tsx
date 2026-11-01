"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Bluetooth, Cpu, Layers, Sparkles, CheckCircle2 } from "lucide-react";

export interface OrbitalAssemblyProps {
  className?: string;
}

/**
 * DeveloperSpatialCanvas (formerly OrbitalAssembly):
 * Spatial minimalism developer showcase presenting live Kotlin BLE architecture,
 * real-time hardware telemetry, and Jetpack Compose state in a floating spatial glass surface.
 */
export const OrbitalAssembly: React.FC<OrbitalAssemblyProps> = ({ className }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      setMousePos({
        x: Math.max(-1, Math.min(1, x)) * 8,
        y: Math.max(-1, Math.min(1, y)) * 8,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center select-none w-full max-w-[460px] mx-auto",
        className
      )}
      style={{ perspective: "1200px" }}
      aria-hidden="true"
    >
      {/* Ambient Spatial Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-charcoal/30 via-silver/5 to-transparent blur-2xl opacity-60 pointer-events-none" />

      {/* Floating Spatial Card Container */}
      <div
        className="relative w-full rounded-2xl bg-[#141417]/95 border border-white/[0.09] shadow-spatial p-5 sm:p-6 transition-transform duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform:
            mounted && !shouldReduceMotion
              ? `rotateX(${-mousePos.y * 0.6}deg) rotateY(${mousePos.x * 0.6}deg)`
              : "none",
        }}
      >
        {/* Card Window Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="ml-2 font-mono text-[11px] text-silver-dark font-medium">
              BlePlatformEngine.kt
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-silver">
            <Bluetooth className="h-3 w-3 text-signal-red" />
            <span>GATT · 24-bit/48kHz</span>
          </div>
        </div>

        {/* Realistic Kotlin Coroutines Architecture Code Block */}
        <div className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-1 text-silver-dark">
          <p className="text-silver-muted">{"//"} Deterministic BLE Peripheral Pipeline</p>
          <p>
            <span className="text-purple-400 font-semibold">class</span>{" "}
            <span className="text-primary font-semibold">AudioBridgeService</span>(
          </p>
          <p className="pl-4">
            <span className="text-purple-400">private val</span> bleClient:{" "}
            <span className="text-emerald-400">BleGattDispatcher</span>,
          </p>
          <p className="pl-4">
            <span className="text-purple-400">private val</span> dspEngine:{" "}
            <span className="text-emerald-400">AudioDspPipeline</span>
          </p>
          <p>) {"{"}</p>

          <p className="pl-4 pt-1">
            <span className="text-purple-400">fun</span>{" "}
            <span className="text-blue-400">streamAudio</span>():{" "}
            <span className="text-emerald-400">Flow</span>&lt;AudioFrame&gt; =
          </p>
          <p className="pl-8 text-silver">
            bleClient.connectionState
          </p>
          <p className="pl-12">
            .filterIsInstance&lt;<span className="text-emerald-400">Connected</span>&gt;()
          </p>
          <p className="pl-12">
            .flatMapLatest {"{ session ->"}
          </p>
          <p className="pl-16 text-primary">
            dspEngine.processSlidingWindow(session)
          </p>
          <p className="pl-12">{"}"}</p>
          <p className="pl-12 text-silver-muted">
            .flowOn(Dispatchers.Default)
          </p>
          <p>{"}"}</p>
        </div>

        {/* Floating Spatial Telemetry Pill (Overlaid with 3D Depth) */}
        <div
          className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono"
          style={{ transform: "translateZ(16px)" }}
        >
          <div className="flex items-center gap-2 text-silver">
            <Cpu className="h-3.5 w-3.5 text-silver-dark" />
            <span>Buffer: 18ms</span>
          </div>

          <div className="flex items-center gap-1.5 text-silver">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-red" />
            <span>Dropped Packets: 0%</span>
          </div>

          <div className="flex items-center gap-1 text-silver-dark">
            <CheckCircle2 className="h-3 w-3 text-emerald-400" />
            <span className="text-primary font-medium">Compose 1.7</span>
          </div>
        </div>
      </div>
    </div>
  );
};
