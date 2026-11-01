"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { ApproachDiagram } from "./ApproachDiagram";
import {
  engineeringStages,
  technicalApproachPillars,
  type EngineeringStage,
} from "@/data/technicalApproach";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const TechnicalApproach: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<
    "understand" | "architect" | "engineer" | "measure"
  >("understand");

  const shouldReduceMotion = useReducedMotion();

  const activeStage =
    engineeringStages.find((s) => s.id === activeStageId) ?? engineeringStages[0];

  const handleStageKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveStageId(engineeringStages[index].id);
    } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % engineeringStages.length;
      const nextStage = engineeringStages[nextIndex];
      setActiveStageId(nextStage.id);
      document.getElementById(`stage-tab-${nextStage.id}`)?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex =
        (index - 1 + engineeringStages.length) % engineeringStages.length;
      const prevStage = engineeringStages[prevIndex];
      setActiveStageId(prevStage.id);
      document.getElementById(`stage-tab-${prevStage.id}`)?.focus();
    }
  };

  return (
    <section id="approach" className="scroll-mt-24 sm:scroll-mt-28 space-y-12">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          systemCode="04 · Engineering Methodology"
          title="Engineering Approach & Methodology"
          subtitle="How I solve complex mobile problems: transforming ambiguous hardware protocols and system constraints into deterministic, observable Android architectures."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              4-Stage Lifecycle
            </TechnicalLabel>
          }
        />

        {/* Two-Column Process & Visual Architecture Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 4-Stage Timeline Stepper */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Connecting Vertical Track Line */}
            <div
              className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-white/[0.08] hidden sm:block pointer-events-none rounded-full"
              aria-hidden="true"
            >
              <div
                className="w-full bg-silver rounded-full transition-all duration-300"
                style={{
                  height: `${
                    ((engineeringStages.findIndex((s) => s.id === activeStageId) + 1) /
                      engineeringStages.length) *
                    100
                  }%`,
                }}
              />
            </div>

            {/* Stage Selector Buttons */}
            <div className="space-y-3" role="tablist" aria-label="Engineering Process Stages">
              {engineeringStages.map((stage, idx) => {
                const isActive = stage.id === activeStageId;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    id={`stage-tab-${stage.id}`}
                    aria-selected={isActive}
                    aria-controls={`stage-panel-${stage.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveStageId(stage.id)}
                    onKeyDown={(e) => handleStageKeyDown(e, idx)}
                    className={cn(
                      "w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative group flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red active:scale-[0.99]",
                      isActive
                        ? "bg-white/[0.07] border-white/[0.2] shadow-spatial text-primary"
                        : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] text-silver-dark hover:text-silver"
                    )}
                  >
                    {/* Stage Step Indicator Circle */}
                    <div
                      className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center font-mono text-xs font-semibold shrink-0 transition-colors z-10",
                        isActive
                          ? "bg-primary text-[#0f0f11]"
                          : "bg-white/[0.05] border border-white/[0.08] text-silver-dark group-hover:border-silver/40 group-hover:text-silver"
                      )}
                    >
                      {stage.step}
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            "font-display text-base font-bold tracking-tight",
                            isActive ? "text-primary" : "text-silver group-hover:text-primary"
                          )}
                        >
                          {stage.name}
                        </span>

                        <span className="font-mono text-[11px] text-silver-muted hidden sm:inline-block">
                          {stage.layerLabel}
                        </span>
                      </div>

                      <p className="font-body text-xs text-silver-dark leading-relaxed line-clamp-2">
                        {stage.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Interactive Architecture Pipeline Canvas */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Synchronized SVG Pipeline Schematic */}
            <ApproachDiagram
              activeStage={activeStageId}
              onSelectStage={(id) => setActiveStageId(id)}
            />

            {/* Active Stage Deep Inspection Card */}
            <div
              id={`stage-panel-${activeStage.id}`}
              role="tabpanel"
              aria-labelledby={`stage-tab-${activeStage.id}`}
              className="rounded-3xl bg-[#141418] border border-white/[0.08] p-6 sm:p-8 shadow-spatial overflow-hidden"
            >
              <motion.div
                key={activeStage.id}
                initial={{ opacity: shouldReduceMotion ? 1 : 0.85 }}
                animate={{ opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-silver font-medium flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal-red" aria-hidden="true" />
                      Stage {activeStage.step} · {activeStage.name}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-semibold text-primary">
                      {activeStage.tagline}
                    </h4>
                  </div>

                  <div className="rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 font-mono text-[11px] text-silver">
                    Focus: <span className="text-primary font-medium">{activeStage.layerKey}</span>
                  </div>
                </div>

                {/* Concrete Engineering Focus Areas */}
                <div className="space-y-3">
                  <span className="font-mono text-xs text-silver-dark font-medium block">
                    Core Engineering Practices
                  </span>

                  <ul className="space-y-2.5">
                    {activeStage.focusAreas.map((focus, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-silver font-body leading-relaxed rounded-xl bg-white/[0.02] border border-white/[0.06] p-3.5"
                      >
                        <span className="font-mono text-xs text-signal-red shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architectural Deliverable & Case Study Verification */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                  <div>
                    <span className="text-silver-dark text-[11px] block">
                      Key Deliverable
                    </span>
                    <span className="text-primary font-medium mt-0.5 block">
                      {activeStage.deliverable}
                    </span>
                  </div>

                  {activeStage.relatedCaseStudy && (
                    <Link
                      href={activeStage.relatedCaseStudy.href}
                      className="inline-flex items-center gap-1.5 text-silver hover:text-primary transition-colors border border-white/[0.08] hover:border-white/[0.2] px-3.5 py-1.5 rounded-xl bg-white/[0.03] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red group"
                    >
                      <span>View in {activeStage.relatedCaseStudy.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-signal-red group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Foundational Architecture Pillars Grid */}
        <div className="space-y-6 pt-10 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs text-silver-dark font-medium flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-red" aria-hidden="true" />
                Architecture Foundations
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mt-1">
                Core Engineering Principles
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalApproachPillars.map((pillar) => (
              <div
                key={pillar.code}
                className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 flex flex-col justify-between shadow-elevation hover:border-white/[0.18] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-silver-dark font-medium flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal-red" aria-hidden="true" />
                      {pillar.code}
                    </span>
                    <span className="font-mono text-[11px] text-silver-muted">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-semibold text-primary">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-silver font-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag) => (
                    <TechnicalLabel key={tag} variant="outline" size="xs">
                      {tag}
                    </TechnicalLabel>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
