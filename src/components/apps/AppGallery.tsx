"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { MotionSection } from "@/components/motion/MotionSection";
import { PhoneMockup } from "./PhoneMockup";
import { releasedApps } from "@/data/apps";
import {
  ArrowRight,
  ExternalLink,
  Github,
  QrCode,
  Sparkles,
  Eye,
} from "lucide-react";

export interface AppGalleryProps {
  hideHeading?: boolean;
}

export const AppGallery: React.FC<AppGalleryProps> = ({ hideHeading = false }) => {
  const styledrobe = releasedApps.find((a) => a.id === "styledrobe")!;
  const zbukk = releasedApps.find((a) => a.id === "zbukk")!;
  const wehear = releasedApps.find((a) => a.id === "wehear")!;
  const reachme = releasedApps.find((a) => a.id === "reachme")!;

  return (
    <section id="apps" className="scroll-mt-24 sm:scroll-mt-28 space-y-16">
      <Container size="wide">
        {!hideHeading && (
          <SectionHeading
            systemCode="03 · Released Applications"
            title="Released Applications & Products"
            subtitle="Direct-to-consumer, accessibility, and hardware companion Android applications engineered with clean architecture, on-device AI, and low-latency communication."
            badge={
              <TechnicalLabel variant="neutral" size="sm" indicator>
                4 Products
              </TechnicalLabel>
            }
          />
        )}

        {/* Varied Editorial Layout: Alternating Flagship Showcases + Dual Secondary Matrix */}
        <div className="space-y-10 sm:space-y-12">
          {/* ============================================================== */}
          {/* FLAGSHIP 1: STYLEDROBE (On-Device Computer Vision & AI)        */}
          {/* ============================================================== */}
          <MotionSection>
            <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-10 shadow-spatial relative overflow-hidden group transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Phone Mockup with Real Screenshot */}
                <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                  <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                    <PhoneMockup
                      screenshotUrl={styledrobe.screenshots[0]?.url}
                      alt={styledrobe.screenshots[0]?.alt}
                      appName={styledrobe.name}
                    />
                  </div>
                </div>

                {/* Right Column: Editorial Information & Verified CTAs */}
                <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-white/[0.1] bg-[#1a1a1f] shrink-0">
                        <Image
                          src={styledrobe.iconUrl}
                          alt={`${styledrobe.name} official app icon`}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">
                          {styledrobe.name}
                        </h3>
                        <span className="font-mono text-xs text-silver-dark">
                          {styledrobe.category}
                        </span>
                      </div>
                    </div>

                    <TechnicalLabel variant="success" size="xs" indicator>
                      {styledrobe.statusLabel}
                    </TechnicalLabel>
                  </div>

                  <p className="font-body text-base sm:text-lg text-silver font-normal leading-relaxed">
                    {styledrobe.tagline}
                  </p>

                  <p className="font-body text-xs sm:text-sm text-silver-dark leading-relaxed">
                    {styledrobe.overview}
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {styledrobe.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <div className="font-mono text-[11px] text-signal-red font-medium mb-1 flex items-center gap-1.5">
                          <Sparkles className="h-3 w-3 text-signal-red" />
                          Feature 0{i + 1}
                        </div>
                        <div className="font-sans text-xs font-semibold text-silver">
                          {feat.title}
                        </div>
                        <div className="font-body text-[11px] text-silver-dark mt-1 leading-normal line-clamp-2">
                          {feat.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {styledrobe.technologies.map((t) => (
                      <TechnicalLabel key={t} variant="outline" size="xs">
                        {t}
                      </TechnicalLabel>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                    <PrimaryButton
                      href={`/apps/${styledrobe.slug}`}
                      variant="signal"
                      size="md"
                      signalDot
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      Explore Product Details
                    </PrimaryButton>

                    {styledrobe.externalLinks[0]?.url && (
                      <PrimaryButton
                        href={styledrobe.externalLinks[0].url}
                        external
                        variant="primary"
                        size="md"
                        icon={<ExternalLink className="h-3.5 w-3.5 text-signal-red" />}
                      >
                        Google Play Store
                      </PrimaryButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </MotionSection>

          {/* ============================================================== */}
          {/* FLAGSHIP 2: ZBUKK (Hands-Free Eye-Blink Accessibility Platform) */}
          {/* ============================================================== */}
          <MotionSection delay={0.08}>
            <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-10 shadow-spatial relative overflow-hidden group transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Editorial Information & Dual Store / GitHub CTAs */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-white/[0.1] bg-[#1a1a1f] shrink-0">
                        <Image
                          src={zbukk.iconUrl}
                          alt={`${zbukk.name} official app icon`}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">
                          {zbukk.name}
                        </h3>
                        <span className="font-mono text-xs text-silver-dark">
                          {zbukk.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <TechnicalLabel variant="success" size="xs" indicator>
                        Google Play Verified
                      </TechnicalLabel>
                      <TechnicalLabel variant="neutral" size="xs">
                        Open Source
                      </TechnicalLabel>
                    </div>
                  </div>

                  <p className="font-body text-base sm:text-lg text-silver font-normal leading-relaxed">
                    {zbukk.tagline}
                  </p>

                  <p className="font-body text-xs sm:text-sm text-silver-dark leading-relaxed">
                    {zbukk.overview}
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {zbukk.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <div className="font-mono text-[11px] text-signal-red font-medium mb-1 flex items-center gap-1.5">
                          <Eye className="h-3 w-3 text-signal-red" />
                          Feature 0{i + 1}
                        </div>
                        <div className="font-sans text-xs font-semibold text-silver">
                          {feat.title}
                        </div>
                        <div className="font-body text-[11px] text-silver-dark mt-1 leading-normal line-clamp-2">
                          {feat.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {zbukk.technologies.map((t) => (
                      <TechnicalLabel key={t} variant="outline" size="xs">
                        {t}
                      </TechnicalLabel>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
                    <PrimaryButton
                      href={`/apps/${zbukk.slug}`}
                      variant="signal"
                      size="md"
                      signalDot
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      Explore Product Details
                    </PrimaryButton>

                    {zbukk.externalLinks[0]?.url && (
                      <PrimaryButton
                        href={zbukk.externalLinks[0].url}
                        external
                        variant="primary"
                        size="md"
                        icon={<ExternalLink className="h-3.5 w-3.5 text-signal-red" />}
                      >
                        Google Play Store
                      </PrimaryButton>
                    )}

                    {zbukk.externalLinks[1]?.url && (
                      <PrimaryButton
                        href={zbukk.externalLinks[1].url}
                        external
                        variant="outline"
                        size="md"
                        icon={<Github className="h-3.5 w-3.5 text-silver" />}
                      >
                        GitHub Source
                      </PrimaryButton>
                    )}
                  </div>
                </div>

                {/* Right Column: Phone Mockup with Real Screenshot */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                    <PhoneMockup
                      screenshotUrl={zbukk.screenshots[0]?.url}
                      alt={zbukk.screenshots[0]?.alt}
                      appName={zbukk.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </MotionSection>

          {/* ============================================================== */}
          {/* SECONDARY PRODUCTS: WEHEAR & REACHME                            */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CARD 1: WEHEAR WEARABLES COMPANION APP */}
            <MotionSection delay={0.12}>
              <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-spatial h-full group hover:border-white/[0.18] transition-all duration-300">
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-white/[0.1] bg-[#1a1a1f] shrink-0">
                        <Image
                          src={wehear.iconUrl}
                          alt={`${wehear.name} app icon`}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-primary group-hover:text-silver transition-colors">
                          {wehear.name}
                        </h3>
                        <span className="font-mono text-[11px] text-silver-dark">
                          {wehear.category}
                        </span>
                      </div>
                    </div>

                    <TechnicalLabel variant="success" size="xs" indicator>
                      {wehear.statusLabel}
                    </TechnicalLabel>
                  </div>

                  <p className="font-body text-sm text-silver font-normal">
                    {wehear.tagline}
                  </p>

                  <div className="flex justify-center py-4">
                    <PhoneMockup
                      screenshotUrl={wehear.screenshots[0]?.url}
                      alt={wehear.screenshots[0]?.alt}
                      appName={wehear.name}
                      className="w-[200px] sm:w-[220px]"
                    />
                  </div>

                  <p className="font-body text-xs text-silver-dark leading-relaxed">
                    {wehear.overview}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {wehear.technologies.slice(0, 5).map((t) => (
                      <TechnicalLabel key={t} variant="outline" size="xs">
                        {t}
                      </TechnicalLabel>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/apps/${wehear.slug}`}
                    className="font-sans text-xs font-medium text-silver hover:text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
                  >
                    <span>Product Specifications</span>
                    <ArrowRight className="h-3 w-3 text-signal-red" />
                  </Link>

                  {wehear.externalLinks[0]?.url && (
                    <a
                      href={wehear.externalLinks[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] text-silver hover:text-primary text-xs font-sans flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
                      title="View on Google Play Store"
                    >
                      <span>Google Play</span>
                      <ExternalLink className="h-3 w-3 text-signal-red" />
                    </a>
                  )}
                </div>
              </div>
            </MotionSection>

            {/* CARD 2: REACHME VEHICLE CONTACT SYSTEM */}
            <MotionSection delay={0.16}>
              <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-spatial h-full group hover:border-white/[0.18] transition-all duration-300">
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-signal-red shrink-0">
                        <QrCode className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-primary group-hover:text-silver transition-colors">
                          {reachme.name}
                        </h3>
                        <span className="font-mono text-[11px] text-silver-dark">
                          {reachme.category}
                        </span>
                      </div>
                    </div>

                    <TechnicalLabel variant="neutral" size="xs">
                      {reachme.statusLabel}
                    </TechnicalLabel>
                  </div>

                  <p className="font-body text-sm text-silver font-normal">
                    {reachme.tagline}
                  </p>

                  <div className="flex justify-center py-4">
                    <PhoneMockup
                      appName={reachme.name}
                      isPrototype
                      className="w-[200px] sm:w-[220px]"
                    />
                  </div>

                  <p className="font-body text-xs text-silver-dark leading-relaxed">
                    {reachme.overview}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {reachme.technologies.slice(0, 5).map((t) => (
                      <TechnicalLabel key={t} variant="outline" size="xs">
                        {t}
                      </TechnicalLabel>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/apps/${reachme.slug}`}
                    className="font-sans text-xs font-medium text-silver hover:text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
                  >
                    <span>Architecture Breakdown</span>
                    <ArrowRight className="h-3 w-3 text-signal-red" />
                  </Link>

                  <span className="font-mono text-[11px] text-silver-muted">
                    R&amp;D Prototype · In Development
                  </span>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </Container>
    </section>
  );
};
