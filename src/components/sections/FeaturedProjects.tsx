"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { DiagramRenderer } from "@/components/diagrams/DiagramRenderer";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  Activity,
  ShieldCheck,
  ChevronRight,
  Sliders,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const FeaturedProjects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>("nuconnect");
  const shouldReduceMotion = useReducedMotion();

  const activeProject =
    projects.find((p) => p.id === activeProjectId) ?? projects[0];

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveProjectId(id);
    }
  };

  return (
    <section id="systems" className="scroll-mt-24 sm:scroll-mt-28 space-y-12">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          systemCode="// 01. CORE ARCHITECTURE"
          title="Featured Case Studies"
          subtitle="Deep-dive architectural case studies covering smart hearing-aid BLE protocols, real-time translation pipelines, UDP medical video streaming, and digital audio DSP."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              4 Production Architectures
            </TechnicalLabel>
          }
        />

        {/* Industrial System Selector Tabs */}
        <div
          role="tablist"
          aria-label="Core Engineering Systems"
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 p-1.5 bg-bg-deep border border-border-subtle"
        >
          {projects.map((proj, idx) => {
            const isActive = proj.id === activeProjectId;
            return (
              <button
                key={proj.id}
                role="tab"
                id={`tab-${proj.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${proj.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveProjectId(proj.id)}
                onKeyDown={(e) => handleKeyDown(e, proj.id)}
                className={cn(
                  "text-left p-3 sm:p-4 border transition-all duration-150 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red active:scale-[0.98]",
                  isActive
                    ? "bg-bg-elevated border-silver/60 shadow-elevation text-primary"
                    : "bg-bg-deep hover:bg-bg-elevated/50 border-transparent text-silver-dark hover:text-silver hover:border-border-subtle"
                )}
              >
                {/* Active Indicator Top Notch */}
                {isActive && (
                  <span
                    className="absolute -top-[1px] left-0 right-0 h-[2px] bg-signal-red"
                    aria-hidden="true"
                  />
                )}

                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full shrink-0",
                        isActive ? "bg-signal-red" : "bg-silver-muted"
                      )}
                    />
                    0{idx + 1} {"//"} SYS
                  </span>
                  <span className="font-mono text-[9px] text-silver-dark uppercase tracking-widest hidden sm:inline-block">
                    {proj.metrics[0]?.value}
                  </span>
                </div>

                <div className="font-display text-xs sm:text-sm md:text-base font-semibold truncate text-primary">
                  {proj.title}
                </div>

                <div className="font-mono text-[10px] text-silver-dark truncate mt-0.5">
                  {proj.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Flagship Case Study Viewer Panel */}
        <div
          id={`panel-${activeProject.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeProject.id}`}
          className="bg-bg-elevated border border-border-subtle shadow-elevation"
        >
          {/* Header Telemetry Row */}
          <div className="p-5 sm:p-6 border-b border-border-subtle flex flex-wrap items-center justify-between gap-4 bg-charcoal/30">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-silver-dark flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-red" aria-hidden="true" />
                {activeProject.systemCode}
              </span>
              <span className="text-silver-muted text-xs hidden sm:inline">•</span>
              <span className="font-mono text-xs text-silver-dark uppercase tracking-wider">
                {activeProject.role}
              </span>
              <span className="text-silver-muted text-xs hidden sm:inline">•</span>
              <span className="font-mono text-xs text-silver-muted">
                {activeProject.period}
              </span>
            </div>

            <Link
              href={`/projects/${activeProject.slug}`}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors hover:underline group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
            >
              <span>Examine Full Architecture Specification</span>
              <ArrowRight className="h-3.5 w-3.5 text-signal-red group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Main Editorial Presentation: Content + Live Schematic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
            {/* Left Column: Problem, Architectural Solution & Key Decisions */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                    {activeProject.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-silver mt-1 leading-relaxed">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* The Technical Challenge */}
                <div className="space-y-2 bg-charcoal/40 p-4 border-l-2 border-border-medium">
                  <span className="font-mono text-[10px] text-silver-dark uppercase tracking-widest block font-semibold">
                    THE_ENGINEERING_CHALLENGE
                  </span>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>

                {/* Key Architectural Decision */}
                {activeProject.keyDecisions[0] && (
                  <div className="space-y-2 bg-charcoal/20 p-4 border border-border-subtle">
                    <span className="font-mono text-[10px] text-signal-red uppercase tracking-widest block font-semibold">
                      DECISION // {activeProject.keyDecisions[0].title}
                    </span>
                    <p className="font-body text-xs text-silver leading-relaxed">
                      {activeProject.keyDecisions[0].decision}
                    </p>
                    <p className="font-body text-[11px] text-muted leading-relaxed pt-1 border-t border-border-subtle/40">
                      <strong className="font-mono text-silver-dark uppercase text-[10px]">
                        RATIONALE:{" "}
                      </strong>
                      {activeProject.keyDecisions[0].rationale}
                    </p>
                  </div>
                )}

                {/* Verified Measured Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {activeProject.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-bg-deep p-3 border border-border-subtle text-left"
                    >
                      <div className="font-display text-lg sm:text-xl font-bold text-primary">
                        {metric.value}
                      </div>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-silver-dark mt-0.5 line-clamp-4 leading-tight min-h-[2.5rem]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Stack & Action */}
              <div className="pt-6 border-t border-border-subtle space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.techStack.map((tech) => (
                    <TechnicalLabel key={tech} variant="outline" size="xs">
                      {tech}
                    </TechnicalLabel>
                  ))}
                </div>

                <PrimaryButton
                  href={`/projects/${activeProject.slug}`}
                  variant="signal"
                  size="md"
                  signalDot
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="h-3.5 w-3.5" />}
                >
                  Deep-Dive Architecture Case Study
                </PrimaryButton>
              </div>
            </div>

            {/* Right Column: Live Architectural Schematic Diagram */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-bg-deep p-4 sm:p-6">
              <div className="space-y-4">
                {/* Schematic Title HUD */}
                <div className="flex items-center justify-between font-mono text-[11px] text-silver-dark pb-3 border-b border-border-subtle tracking-wider">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal-red animate-pulse shrink-0" />
                    <span className="text-silver uppercase truncate">
                      SCHEMATIC: {activeProject.architecture.diagramTitle}
                    </span>
                  </div>
                  <span className="text-[10px] text-silver-muted hidden sm:inline-block uppercase shrink-0">
                    INTERACTIVE_SPEC
                  </span>
                </div>

                {/* Embedded Live SVG Diagram */}
                <div className="relative">
                  <DiagramRenderer
                    type={activeProject.architecture.diagramType}
                    className="border-0 bg-transparent p-0"
                  />
                </div>

                {/* Schematic Caption & Data Flow Explanation */}
                <div className="p-3 bg-bg-elevated border border-border-subtle flex items-start gap-2.5 font-mono text-[11px] text-silver-dark leading-relaxed">
                  <Sliders className="h-3.5 w-3.5 text-signal-red shrink-0 mt-0.5" />
                  <span>{activeProject.architecture.diagramDescription}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-[10px] font-mono text-silver-muted border-t border-border-subtle mt-4">
                <span>SCROLL HORIZONTALLY ON MOBILE IF CLIPPED</span>
                <span>SYSTEM_STATUS // PRODUCTION_VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary System Quick-Inspection Grid */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-silver-dark flex items-center gap-2">
              <span className="h-1 w-1 bg-signal-red" aria-hidden="true" />
              SECONDARY_PRODUCTION_SYSTEMS // QUICK_INSPECT
            </span>
            <span className="font-mono text-[10px] text-silver-muted uppercase">
              CLICK_CARD_TO_PREVIEW_SCHEMATIC
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects
              .filter((p) => p.id !== activeProjectId)
              .map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className="group cursor-pointer bg-bg-elevated border border-border-subtle hover:border-silver/60 p-5 flex flex-col justify-between transition-all duration-150 shadow-elevation active:scale-[0.99]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-mono text-[10px] text-silver-dark uppercase tracking-widest">
                        {proj.systemCode}
                      </span>
                      <span className="font-mono text-[10px] text-primary font-bold">
                        {proj.metrics[0]?.value}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-semibold text-primary group-hover:text-silver transition-colors">
                      {proj.title}
                    </h4>

                    <p className="font-body text-xs text-muted line-clamp-2 leading-relaxed">
                      {proj.overview}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between font-mono text-[10px] text-silver-dark group-hover:text-primary transition-colors">
                    <span>Inspect Schematic</span>
                    <ArrowRight className="h-3 w-3 text-signal-red group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Catalog Link */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors py-2.5 px-5 bg-bg-elevated border border-border-subtle hover:border-silver focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
          >
            <Layers className="h-4 w-4 text-silver-dark" />
            <span>Browse Full Architecture Specifications Index</span>
            <ArrowRight className="h-3.5 w-3.5 text-signal-red" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
