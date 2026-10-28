"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { HeroHeadline } from "./HeroHeadline";
import { OrbitalAssembly } from "./OrbitalAssembly";
import { ScrollIndicator } from "./ScrollIndicator";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Activity } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-6 pb-12 overflow-hidden">
      {/* Background Architectural Ambient Lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-charcoal/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border-subtle text-xs font-mono text-silver-dark mb-8 lg:mb-12">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal-red animate-pulse" aria-hidden="true" />
            <span className="text-silver tracking-widest uppercase">
              STATUS: TELEMETRY_ONLINE // DISPATCHER_ACTIVE
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] tracking-wider text-silver-dark">
            <span>KOTLIN 2.1</span>
            <span>•</span>
            <span>JETPACK COMPOSE</span>
            <span>•</span>
            <span>BLE GATT ENGINE</span>
            <span>•</span>
            <span>AHMEDABAD, IN</span>
          </div>
        </div>

        {/* Main Hero Row: Headline + Dimensional Metallic Object */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
          {/* Headline Column */}
          <div className="lg:col-span-7 xl:col-span-7">
            <HeroHeadline />
          </div>

          {/* Signature 3D Visual Column */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center relative">
            {/* Visual Frame HUD Accents */}
            <div className="relative p-2 sm:p-4">
              {/* Corner HUD Markers */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-silver/40" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-silver/40" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-silver/40" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-silver/40" />

              {/* The Metallic Silver Orbital Ring Assembly */}
              <OrbitalAssembly />

              {/* Orbital Telemetry Caption */}
              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-silver-dark tracking-widest px-2 uppercase">
                <span>GYRO_GIMBAL // V-04</span>
                <span className="flex items-center gap-1 text-silver">
                  <span className="h-1 w-1 bg-signal-red rounded-full" />
                  3D_LOCK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benchmarks Strip + Scroll Indicator */}
        <div className="mt-12 lg:mt-16 pt-6 border-t border-border-subtle grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Verified Engineering Benchmarks */}
          <div className="md:col-span-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="border-l border-border-medium pl-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-primary">-70%</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-silver-dark">
                BLE Discovery Latency
              </div>
            </div>

            <div className="border-l border-border-medium pl-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-primary">~99%</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-silver-dark">
                UDP Smooth Delivery
              </div>
            </div>

            <div className="border-l border-border-medium pl-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-primary">3,000+</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-silver-dark">
                Live Audio Attendees
              </div>
            </div>

            <div className="border-l border-signal-red-border pl-3">
              <div className="font-display text-xl sm:text-2xl font-bold text-primary">~35%</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-silver-dark">
                Cold Start Reduction
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <ScrollIndicator targetId="systems" />
          </div>
        </div>
      </Container>
    </section>
  );
};
