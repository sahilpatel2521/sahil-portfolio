import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { PhoneMockup } from "./PhoneMockup";
import { releasedApps } from "@/data/apps";
import { ArrowRight, ExternalLink, Github, Smartphone, Eye, Sparkles, QrCode } from "lucide-react";

export const AppGallery: React.FC = () => {
  return (
    <section id="apps" className="scroll-mt-24 space-y-16">
      <Container size="wide">
        <SectionHeading
          systemCode="// 02. PUBLIC SOFTWARE RELEASES"
          title="Released Applications Gallery"
          subtitle="Direct-to-consumer and open-source Android applications engineered with clean architecture, on-device AI, and accessibility services."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              Active Products
            </TechnicalLabel>
          }
        />

        {/* Varied Editorial Layout */}
        <div className="space-y-12">
          {/* ============================================================== */}
          {/* APP 1: STYLEDROBE (Featured Large Split Showcase)              */}
          {/* ============================================================== */}
          {(() => {
            const app = releasedApps.find((a) => a.id === "styledrobe")!;
            return (
              <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-10 shadow-elevation relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left: Phone Mockup with Real Screenshot */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="transition-transform duration-500 hover:-translate-y-2">
                      <PhoneMockup
                        screenshotUrl={app.screenshots[0]?.url}
                        alt={app.screenshots[0]?.alt}
                        appName={app.name}
                      />
                    </div>
                  </div>

                  {/* Right: Editorial Information & Verified CTAs */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-border-medium bg-charcoal">
                          <Image
                            src={app.iconUrl}
                            alt={`${app.name} official app icon`}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary">
                            {app.name}
                          </h3>
                          <span className="font-mono text-xs text-silver-dark">{app.category}</span>
                        </div>
                      </div>

                      <TechnicalLabel variant="success" size="xs" indicator>
                        {app.statusLabel}
                      </TechnicalLabel>
                    </div>

                    <p className="font-display text-base sm:text-lg text-silver font-light leading-relaxed">
                      {app.tagline}
                    </p>

                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                      {app.overview}
                    </p>

                    {/* Feature Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {app.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="p-3 bg-charcoal/40 border border-border-subtle">
                          <div className="font-mono text-[10px] text-signal-red font-bold uppercase mb-1">
                            FEATURE // 0{i + 1}
                          </div>
                          <div className="font-display text-xs font-semibold text-silver">
                            {feat.title}
                          </div>
                          <div className="font-body text-[11px] text-muted mt-1 leading-normal line-clamp-2">
                            {feat.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {app.technologies.map((t) => (
                        <TechnicalLabel key={t} variant="outline" size="xs">
                          {t}
                        </TechnicalLabel>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-4">
                      <PrimaryButton
                        href={`/apps/${app.slug}`}
                        variant="signal"
                        size="md"
                        signalDot
                        icon={<ArrowRight className="h-4 w-4" />}
                      >
                        Explore Product Details
                      </PrimaryButton>

                      {app.externalLinks[0]?.url && (
                        <PrimaryButton
                          href={app.externalLinks[0].url}
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
            );
          })()}

          {/* ============================================================== */}
          {/* APPS 2 & 3: ZBUKK & REACHME (Balanced Dual Column)             */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ZBUKK */}
            {(() => {
              const app = releasedApps.find((a) => a.id === "zbukk")!;
              return (
                <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 flex flex-col justify-between shadow-elevation">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-border-medium bg-charcoal">
                          <Image
                            src={app.iconUrl}
                            alt={`${app.name} app icon`}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-primary">{app.name}</h3>
                          <span className="font-mono text-[10px] text-silver-dark">{app.category}</span>
                        </div>
                      </div>

                      <TechnicalLabel variant="success" size="xs" indicator>
                        {app.statusLabel}
                      </TechnicalLabel>
                    </div>

                    <p className="font-display text-sm text-silver font-light">
                      {app.tagline}
                    </p>

                    <div className="flex justify-center py-4">
                      <PhoneMockup
                        screenshotUrl={app.screenshots[0]?.url}
                        alt={app.screenshots[0]?.alt}
                        appName={app.name}
                        className="w-[200px] sm:w-[220px]"
                      />
                    </div>

                    <p className="font-body text-xs text-muted leading-relaxed">
                      {app.overview}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {app.technologies.slice(0, 4).map((t) => (
                        <TechnicalLabel key={t} variant="outline" size="xs">
                          {t}
                        </TechnicalLabel>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/apps/${app.slug}`}
                      className="font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
                    >
                      <span>Product Specs</span>
                      <ArrowRight className="h-3 w-3 text-signal-red" />
                    </Link>

                    <div className="flex items-center gap-3">
                      <a
                        href={app.externalLinks[1]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-charcoal border border-border-subtle hover:border-silver text-silver hover:text-primary text-xs font-mono flex items-center gap-1 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Source</span>
                      </a>

                      <a
                        href={app.externalLinks[0]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-charcoal border border-border-subtle hover:border-silver text-silver hover:text-primary text-xs font-mono flex items-center gap-1 transition-colors"
                        title="View on Google Play Store"
                      >
                        <span>Play Store</span>
                        <ExternalLink className="h-3 w-3 text-signal-red" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* REACHME */}
            {(() => {
              const app = releasedApps.find((a) => a.id === "reachme")!;
              return (
                <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 flex flex-col justify-between shadow-elevation">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-charcoal border border-border-medium flex items-center justify-center text-signal-red">
                          <QrCode className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-primary">{app.name}</h3>
                          <span className="font-mono text-[10px] text-silver-dark">{app.category}</span>
                        </div>
                      </div>

                      <TechnicalLabel variant="neutral" size="xs">
                        {app.statusLabel}
                      </TechnicalLabel>
                    </div>

                    <p className="font-display text-sm text-silver font-light">
                      {app.tagline}
                    </p>

                    <div className="flex justify-center py-4">
                      <PhoneMockup
                        appName={app.name}
                        isPrototype
                        className="w-[200px] sm:w-[220px]"
                      />
                    </div>

                    <p className="font-body text-xs text-muted leading-relaxed">
                      {app.overview}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {app.technologies.slice(0, 4).map((t) => (
                        <TechnicalLabel key={t} variant="outline" size="xs">
                          {t}
                        </TechnicalLabel>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/apps/${app.slug}`}
                      className="font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
                    >
                      <span>Architecture Breakdown</span>
                      <ArrowRight className="h-3 w-3 text-signal-red" />
                    </Link>

                    <span className="font-mono text-[11px] text-silver-dark uppercase">
                      PROTOTYPE // PLAY STORE UNPUBLISHED
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </Container>
    </section>
  );
};
