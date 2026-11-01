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
  ChevronRight,
  Sliders,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const FeaturedProjects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>("nuconnect");
  const shouldReduceMotion = useReducedMotion();

  const activeProject =
    projects.find((p) => p.id === activeProjectId) ?? projects[0];

  const handleKeyDown = (e: React.KeyboardEvent, id: string, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveProjectId(id);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % projects.length;
      const nextProj = projects[nextIndex];
      setActiveProjectId(nextProj.id);
      document.getElementById(`tab-${nextProj.id}`)?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + projects.length) % projects.length;
      const prevProj = projects[prevIndex];
      setActiveProjectId(prevProj.id);
      document.getElementById(`tab-${prevProj.id}`)?.focus();
    }
  };

  return (
    <section id="systems" className="scroll-mt-24 sm:scroll-mt-28 space-y-12">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          systemCode="02 · Flagship Architecture"
          title="Featured Case Studies"
          subtitle="Deep-dive architectural case studies covering smart hearing-aid BLE protocols, real-time translation pipelines, UDP medical video streaming, and digital audio DSP."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              4 Production Systems
            </TechnicalLabel>
          }
        />

        {/* Spatial System Selector Tabs */}
        <div
          role="tablist"
          aria-label="Core Engineering Systems"
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]"
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
                onKeyDown={(e) => handleKeyDown(e, proj.id, idx)}
                className={cn(
                  "text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red active:scale-[0.99]",
                  isActive
                    ? "bg-white/[0.07] border-white/[0.18] shadow-sm text-primary"
                    : "bg-transparent hover:bg-white/[0.04] border-transparent text-silver-dark hover:text-silver"
                )}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="font-mono text-[11px] font-medium flex items-center gap-1.5">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full shrink-0",
                        isActive ? "bg-signal-red" : "bg-silver-muted"
                      )}
                    />
                    0{idx + 1} · {proj.title}
                  </span>
                  <span className="font-mono text-[10px] text-silver-muted hidden sm:inline-block">
                    {proj.metrics[0]?.value}
                  </span>
                </div>

                <div className="font-sans text-xs text-silver-dark truncate">
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
          className="rounded-2xl bg-[#141418] border border-white/[0.08] shadow-spatial overflow-hidden mt-6"
        >
          <motion.div
            key={activeProject.id}
            initial={{ opacity: shouldReduceMotion ? 1 : 0.85 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
          >
            {/* Header Telemetry Row */}
            <div className="p-5 sm:p-6 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4 bg-white/[0.02]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-silver font-medium flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-red" aria-hidden="true" />
                  {activeProject.systemCode}
                </span>
                <span className="text-silver-muted text-xs hidden sm:inline">•</span>
                <span className="font-body text-xs text-silver-dark">
                  {activeProject.role}
                </span>
                <span className="text-silver-muted text-xs hidden sm:inline">•</span>
                <span className="font-mono text-xs text-silver-muted">
                  {activeProject.period}
                </span>
              </div>

              <Link
                href={`/projects/${activeProject.slug}`}
                className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-silver hover:text-primary transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
              >
                <span>View Full Architecture Specification</span>
                <ArrowRight className="h-3.5 w-3.5 text-signal-red group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Main Editorial Presentation: Content + Live Schematic */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
              {/* Left Column: Problem, Architectural Solution & Key Decisions */}
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                      {activeProject.title}
                    </h3>
                    <p className="font-body text-sm text-silver mt-1.5 leading-relaxed">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  {/* The Technical Challenge */}
                  <div className="space-y-2 rounded-xl bg-white/[0.02] p-4 border border-white/[0.06]">
                    <span className="font-mono text-[11px] text-silver-dark uppercase tracking-wider block font-medium">
                      The Engineering Challenge
                    </span>
                    <p className="font-body text-xs sm:text-sm text-silver leading-relaxed">
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Key Architectural Decision */}
                  {activeProject.keyDecisions[0] && (
                    <div className="space-y-2 rounded-xl bg-white/[0.02] p-4 border border-white/[0.06]">
                      <span className="font-mono text-[11px] text-signal-red font-medium block">
                        Architectural Decision: {activeProject.keyDecisions[0].title}
                      </span>
                      <p className="font-body text-xs sm:text-sm text-silver leading-relaxed">
                        {activeProject.keyDecisions[0].decision}
                      </p>
                      <p className="font-body text-xs text-silver-dark leading-relaxed pt-2 border-t border-white/[0.06]">
                        <strong className="font-mono text-silver text-[11px]">
                          Rationale:{" "}
                        </strong>
                        {activeProject.keyDecisions[0].rationale}
                      </p>
                    </div>
                  )}

                  {/* Verified Measured Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {activeProject.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl bg-white/[0.02] p-3.5 border border-white/[0.06] text-left"
                      >
                        <div className="font-display text-xl font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="font-body text-[11px] text-silver-dark mt-1 leading-snug line-clamp-3">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Stack & Action */}
                <div className="pt-6 border-t border-white/[0.06] space-y-4">
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
                    View Architecture Specification
                  </PrimaryButton>
                </div>
              </div>

              {/* Right Column: Live Architectural Schematic Diagram */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-[#0e0e11] p-4 sm:p-6 min-w-0 max-w-full overflow-hidden">
                <div className="space-y-4">
                  {/* Schematic Title */}
                  <div className="flex items-center justify-between font-mono text-xs text-silver-dark pb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal-red shrink-0" />
                      <span className="text-silver font-medium truncate">
                        {activeProject.architecture.diagramTitle}
                      </span>
                    </div>
                    <span className="text-[11px] text-silver-muted hidden sm:inline-block shrink-0">
                      Interactive Pipeline
                    </span>
                  </div>

                  {/* Embedded Live SVG Diagram */}
                  <div className="relative overflow-x-auto max-w-full">
                    <DiagramRenderer
                      type={activeProject.architecture.diagramType}
                      className="border-0 bg-transparent p-0"
                    />
                  </div>

                  {/* Schematic Caption & Data Flow Explanation */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 font-sans text-xs text-silver-dark leading-relaxed">
                    <Sliders className="h-3.5 w-3.5 text-signal-red shrink-0 mt-0.5" />
                    <span>{activeProject.architecture.diagramDescription}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-[11px] font-mono text-silver-muted border-t border-white/[0.06] mt-4">
                  <span>Scroll horizontally on smaller screens</span>
                  <span className="text-emerald-400">Production Verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary System Quick-Inspection Grid */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-silver-dark font-medium flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-red" aria-hidden="true" />
              More Flagship Systems
            </span>
            <span className="font-mono text-[11px] text-silver-muted">
              Click to preview architecture
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects
              .filter((p) => p.id !== activeProjectId)
              .map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className="group cursor-pointer rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.2] p-5 flex flex-col justify-between transition-all duration-200 shadow-elevation active:scale-[0.99]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-mono text-xs text-silver-dark group-hover:text-silver transition-colors">
                        {proj.category}
                      </span>
                      <span className="font-mono text-xs text-primary font-bold">
                        {proj.metrics[0]?.value}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-semibold text-primary group-hover:text-silver transition-colors">
                      {proj.title}
                    </h4>

                    <p className="font-body text-xs text-silver-dark line-clamp-2 leading-relaxed">
                      {proj.overview}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-silver-dark group-hover:text-primary transition-colors">
                    <span>Preview Schematic</span>
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
            className="inline-flex items-center gap-2 font-sans text-xs font-medium text-silver hover:text-primary transition-colors py-2.5 px-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
          >
            <Layers className="h-4 w-4 text-silver-dark" />
            <span>Browse Full Architecture Specifications</span>
            <ArrowRight className="h-3.5 w-3.5 text-signal-red" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
