import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { PhoneMockup } from "@/components/apps/PhoneMockup";
import { releasedApps } from "@/data/apps";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  ShieldCheck,
  Cpu,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  QrCode,
} from "lucide-react";

interface AppPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return releasedApps.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = releasedApps.find((a) => a.slug === slug);
  if (!app) return { title: "App Not Found" };

  return {
    title: `${app.name} — Released Android Application | SIGNAL / SYSTEM`,
    description: app.overview,
  };
}

export default async function AppDetailPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = releasedApps.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  const currentIndex = releasedApps.findIndex((a) => a.slug === slug);
  const prevApp = currentIndex > 0 ? releasedApps[currentIndex - 1] : null;
  const nextApp = currentIndex < releasedApps.length - 1 ? releasedApps[currentIndex + 1] : null;

  return (
    <article className="py-12 sm:py-16 space-y-16 sm:space-y-20">
      {/* HUD Header */}
      <section>
        <Container size="wide">
          {/* Breadcrumb Navigation */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-signal-red" />
              <span>Back to Released Apps Gallery</span>
            </Link>

            <span className="font-mono text-xs text-silver-dark hidden sm:inline-block">
              APP_ID: {app.id.toUpperCase()}
            </span>
          </div>

          {/* App Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border-subtle">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border border-border-medium bg-charcoal shrink-0 shadow-elevation flex items-center justify-center">
                {app.id === "reachme" ? (
                  <QrCode className="h-9 w-9 sm:h-11 sm:w-11 text-signal-red" />
                ) : (
                  <Image
                    src={app.iconUrl}
                    alt={`${app.name} icon`}
                    fill
                    sizes="80px"
                    className="object-cover"
                    priority
                  />
                )}
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <TechnicalLabel
                    variant={app.status === "live" ? "success" : "neutral"}
                    size="xs"
                    indicator
                  >
                    {app.statusLabel}
                  </TechnicalLabel>
                  <span className="font-mono text-xs text-silver-dark">•</span>
                  <span className="font-mono text-xs text-silver-dark">{app.platform}</span>
                </div>

                <h1 className="font-display text-3xl sm:text-5xl font-bold text-primary tracking-tight">
                  {app.name}
                </h1>
                <p className="font-display text-base sm:text-xl text-silver font-light">
                  {app.tagline}
                </p>
              </div>
            </div>

            {/* Quick External Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {app.externalLinks.map((link, i) => {
                if (link.verified && link.url) {
                  return (
                    <PrimaryButton
                      key={i}
                      href={link.url}
                      external
                      variant={link.type === "play-store" ? "signal" : "outline"}
                      size="md"
                      signalDot={link.type === "play-store"}
                      icon={
                        link.type === "play-store" ? (
                          <ExternalLink className="h-3.5 w-3.5" />
                        ) : (
                          <Github className="h-3.5 w-3.5" />
                        )
                      }
                    >
                      {link.label}
                    </PrimaryButton>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Product Demonstration & Screenshots */}
      <section>
        <Container size="wide">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-silver-dark tracking-widest flex items-center gap-1.5">
                  <Smartphone className="h-3.5 w-3.5 text-signal-red" />
                  AUTHENTIC_INTERFACE_DEMONSTRATION
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-primary mt-1">
                  Product Surface &amp; Mobile Previews
                </h2>
              </div>
              <TechnicalLabel variant="neutral" size="xs">
                {app.screenshots.length > 0 ? "LIVE SCREENSHOTS" : "PROTOTYPE SCHEMATIC"}
              </TechnicalLabel>
            </div>

            {/* Screenshots Grid or Vector Phone Mockup */}
            {app.screenshots.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center bg-bg-elevated border border-border-subtle p-8 sm:p-12">
                {app.screenshots.map((s, idx) => (
                  <div key={idx} className="space-y-4 flex flex-col items-center">
                    <PhoneMockup
                      screenshotUrl={s.url}
                      alt={s.alt}
                      appName={app.name}
                      className="w-[240px] sm:w-[280px]"
                    />
                    {s.caption && (
                      <p className="font-mono text-xs text-silver-dark text-center tracking-wide">
                        {s.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center bg-bg-elevated border border-border-subtle p-8 sm:p-12">
                <div className="space-y-4 flex flex-col items-center">
                  <PhoneMockup appName={app.name} isPrototype className="w-[240px] sm:w-[280px]" />
                  <p className="font-mono text-xs text-silver-dark text-center tracking-wide">
                    Architectural vector preview — UI mockups for windshield QR &amp; masked calling proxy
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Main Details & Architecture Grid */}
      <section>
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Overview, Features & Problem Solved */}
            <div className="lg:col-span-8 space-y-8">
              {/* Problem Solved & Overview */}
              <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 space-y-4 shadow-elevation">
                <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-signal-red" />
                  Product Purpose &amp; Problem Solved
                </h3>
                <p className="font-body text-sm sm:text-base text-silver leading-relaxed">
                  {app.problemSolved}
                </p>
                <p className="font-body text-xs sm:text-sm text-muted leading-relaxed pt-2">
                  {app.overview}
                </p>
              </div>

              {/* Main Features */}
              <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 space-y-6 shadow-elevation">
                <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
                  <Layers className="h-4 w-4 text-signal-red" />
                  Core Capabilities &amp; Features
                </h3>

                <div className="space-y-4">
                  {app.features.map((feat, i) => (
                    <div key={i} className="p-4 bg-charcoal/40 border border-border-subtle space-y-1.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-signal-red" />
                        <h4 className="font-display text-base font-semibold text-primary">
                          {feat.title}
                        </h4>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-silver font-light leading-relaxed pl-5">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture & Engineering Implementation */}
              <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 space-y-5 shadow-elevation">
                <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-signal-red" />
                  Architecture &amp; Engineering Pattern
                </h3>

                <div className="p-3 bg-charcoal/60 border border-border-subtle font-mono text-xs text-silver flex items-center justify-between">
                  <span>PATTERN: {app.architecture.pattern}</span>
                  <span className="text-emerald-400">OPTIMIZED</span>
                </div>

                <p className="font-body text-sm text-muted leading-relaxed">
                  {app.architecture.details}
                </p>

                <div className="space-y-2 pt-2 border-t border-border-subtle">
                  <span className="font-mono text-xs uppercase text-silver-dark font-semibold">
                    TECHNICAL HIGHLIGHTS:
                  </span>
                  <ul className="space-y-2">
                    {app.architecture.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-mono text-silver">
                        <span className="text-signal-red font-bold">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Stack & Availability Links */}
            <div className="lg:col-span-4 space-y-6">
              {/* Technology Stack */}
              <div className="bg-bg-elevated border border-border-subtle p-6 space-y-4 shadow-elevation">
                <span className="font-mono text-xs uppercase tracking-wider text-silver-dark flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-silver" />
                  TECHNOLOGIES_USED
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {app.technologies.map((t) => (
                    <TechnicalLabel key={t} variant="outline" size="xs">
                      {t}
                    </TechnicalLabel>
                  ))}
                </div>
              </div>

              {/* Publication Status & Verified Destinations */}
              <div className="bg-bg-elevated border border-border-subtle p-6 space-y-4 shadow-elevation">
                <span className="font-mono text-xs uppercase tracking-wider text-silver-dark">
                  PUBLICATION_VERIFICATION
                </span>

                <div className="space-y-3 font-mono text-xs">
                  {app.externalLinks.map((link, i) => (
                    <div key={i} className="p-3 bg-charcoal/50 border border-border-subtle space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold">{link.label}</span>
                        {link.verified ? (
                          <span className="text-[10px] text-emerald-400 uppercase">VERIFIED LIVE</span>
                        ) : (
                          <span className="text-[10px] text-amber-500 uppercase">UNAVAILABLE</span>
                        )}
                      </div>

                      {link.verified && link.url ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-signal-red hover:underline text-[11px] inline-flex items-center gap-1 break-all"
                        >
                          <span>{link.url}</span>
                          <ExternalLink className="h-3 w-3 shrink-0" />
                        </a>
                      ) : (
                        <p className="text-[11px] text-silver-dark font-body">{link.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pagination Footer */}
      <section className="pt-8 border-t border-border-subtle">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            {prevApp ? (
              <Link
                href={`/apps/${prevApp.slug}`}
                className="inline-flex items-center gap-2 text-silver hover:text-primary transition-colors py-2 px-3 bg-bg-elevated border border-border-subtle hover:border-silver"
              >
                <ArrowLeft className="h-3.5 w-3.5 text-signal-red" />
                <span>PREV: {prevApp.name}</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/apps"
              className="text-silver-dark hover:text-silver transition-colors uppercase tracking-wider"
            >
              {"// ALL RELEASED APPLICATIONS"}
            </Link>

            {nextApp ? (
              <Link
                href={`/apps/${nextApp.slug}`}
                className="inline-flex items-center gap-2 text-silver hover:text-primary transition-colors py-2 px-3 bg-bg-elevated border border-border-subtle hover:border-silver"
              >
                <span>NEXT: {nextApp.name}</span>
                <ArrowRight className="h-3.5 w-3.5 text-signal-red" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>
    </article>
  );
}
