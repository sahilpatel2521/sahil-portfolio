"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { HeroHeadline } from "./HeroHeadline";
import { OrbitalAssembly } from "./OrbitalAssembly";
import { ScrollIndicator } from "./ScrollIndicator";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-6 pb-12 overflow-hidden">
      {/* Background Spatial Ambient Sheen */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/[0.03] via-transparent to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Developer Info Bar */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/[0.07] text-xs font-mono text-silver-dark mb-8 lg:mb-12">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="h-2 w-2 rounded-full bg-emerald-400/90" aria-hidden="true" />
            <span className="text-silver text-xs font-medium tracking-wide">
              Senior Android Engineer · Mobile &amp; Connected Hardware
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs tracking-wide text-silver-muted shrink-0">
            <span>Kotlin 2.1</span>
            <span>·</span>
            <span>Jetpack Compose</span>
            <span>·</span>
            <span>BLE GATT</span>
            <span>·</span>
            <span>Ahmedabad, India</span>
          </div>

          <div className="flex md:hidden items-center text-[11px] font-mono text-silver-dark tracking-wide shrink-0">
            <span>Ahmedabad, IN</span>
          </div>
        </div>

        {/* Main Hero Row: Headline + Spatial Code Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          {/* Headline Column */}
          <div className="lg:col-span-7 xl:col-span-7">
            <HeroHeadline />
          </div>

          {/* Spatial Architecture Visual Column */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            <OrbitalAssembly />
          </div>
        </div>

        {/* Bottom Benchmarks Strip + Scroll Indicator */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/[0.07] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Verified Engineering Benchmarks */}
          <div className="md:col-span-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-tight">-70%</div>
              <div className="font-body text-xs text-silver mt-1">
                BLE Discovery Latency
              </div>
              <div className="font-mono text-[11px] text-silver-muted mt-0.5">
                NUConnect Platform
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-tight">~99%</div>
              <div className="font-body text-xs text-silver mt-1">
                UDP Smooth Delivery
              </div>
              <div className="font-mono text-[11px] text-silver-muted mt-0.5">
                NUScope Platform
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-tight">3,000+</div>
              <div className="font-body text-xs text-silver mt-1">
                Live Audio Attendees
              </div>
              <div className="font-mono text-[11px] text-silver-muted mt-0.5">
                WeConverse Core
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-tight">~35%</div>
              <div className="font-body text-xs text-silver mt-1">
                Cold Start Reduction
              </div>
              <div className="font-mono text-[11px] text-silver-muted mt-0.5">
                Baseline Profiles
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
