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

  return (
    <section id="approach" className="scroll-mt-24 space-y-16">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          systemCode="// 03. METHODOLOGY & ARCHITECTURE"
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
            {/* Connecting Vertical Track Line (Hidden on small mobile if not aligned) */}
            <div
              className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-charcoal hidden sm:block pointer-events-none"
              aria-hidden="true"
            >
              {/* Highlight fill based on active step index */}
              <div
                className="w-full bg-silver transition-all duration-300"
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
              {engineeringStages.map((stage) => {
                const isActive = stage.id === activeStageId;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    id={`stage-tab-${stage.id}`}
                    aria-selected={isActive}
                    aria-controls={`stage-panel-${stage.id}`}
                    onClick={() => setActiveStageId(stage.id)}
                    className={cn(
                      "w-full text-left p-4 sm:p-5 transition-all duration-200 border relative block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red active:scale-[0.99]",
                      isActive
                        ? "bg-bg-elevated border-silver/60 shadow-elevation"
                        : "bg-bg-deep/80 border-border-subtle hover:border-border-medium hover:bg-bg-elevated/40"
                    )}
                  >
                    {/* Active Edge Signal Marker */}
                    {isActive && (
                      <span
                        className="absolute left-0 top-0 bottom-0 w-1 bg-signal-red"
                        aria-hidden="true"
                      />
                    )}

                    <div className="flex items-start gap-4">
                      {/* Step Indicator Node */}
                      <div
                        className={cn(
                          "relative z-10 shrink-0 h-8 w-8 rounded-full border flex items-center justify-center font-mono text-xs font-bold transition-colors",
                          isActive
                            ? "bg-charcoal border-signal-red text-primary shadow-sm"
                            : "bg-bg-deep border-border-subtle text-silver-dark group-hover:border-silver group-hover:text-silver"
                        )}
                        aria-hidden="true"
                      >
                        {stage.step}
                      </div>

                      {/* Header & Tagline */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={cn(
                              "font-display text-base sm:text-lg font-semibold transition-colors",
                              isActive ? "text-primary" : "text-silver group-hover:text-primary"
                            )}
                          >
                            {stage.name}
                          </h3>

                          <span className="font-mono text-[10px] text-silver-dark uppercase tracking-wider shrink-0">
                            {stage.layerLabel.split("//")[1]?.trim() ?? "SYSTEM"}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-silver font-body line-clamp-1">
                          {stage.tagline}
                        </p>

                        {/* Collapsible Mobile/Active Summary */}
                        {isActive && (
                          <div className="mt-3 pt-3 border-t border-border-subtle text-xs text-muted font-body leading-relaxed">
                            <p>{stage.summary}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Blueprint & Stage Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            {/* Responsive Interactive Vector Schematic */}
            <ApproachDiagram
              activeStage={activeStageId}
              onSelectStage={(stage) => setActiveStageId(stage)}
            />

            {/* Active Stage Inspection Panel */}
            <div
              id={`stage-panel-${activeStage.id}`}
              role="tabpanel"
              aria-labelledby={`stage-tab-${activeStage.id}`}
              className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 space-y-6 shadow-elevation"
            >
              {/* Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-subtle">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-silver-dark flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal-red" aria-hidden="true" />
                    STAGE_INSPECTION // {activeStage.step}: {activeStage.name.toUpperCase()}
                  </span>
                  <h4 className="font-display text-lg sm:text-xl font-semibold text-primary">
                    {activeStage.tagline}
                  </h4>
                </div>

                <div className="bg-charcoal px-3 py-1 border border-border-subtle font-mono text-[11px] text-silver">
                  LAYER: <span className="text-primary font-bold">{activeStage.layerKey.toUpperCase()}</span>
                </div>
              </div>

              {/* Concrete Engineering Focus Areas */}
              <div className="space-y-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-silver-dark font-medium block">
                  CORE_EXECUTION_PRACTICES
                </span>

                <ul className="space-y-2.5">
                  {activeStage.focusAreas.map((focus, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-silver font-body leading-relaxed bg-charcoal/30 border border-border-subtle/60 p-3"
                    >
                      <span className="font-mono text-[11px] text-signal-red shrink-0 mt-0.5">
                        [0{idx + 1}]
                      </span>
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architectural Deliverable & Case Study Verification */}
              <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                <div>
                  <span className="text-silver-dark text-[10px] uppercase block tracking-wider">
                    PRIMARY_DELIVERABLE
                  </span>
                  <span className="text-primary font-semibold mt-0.5 block">
                    {activeStage.deliverable}
                  </span>
                </div>

                {activeStage.relatedCaseStudy && (
                  <Link
                    href={activeStage.relatedCaseStudy.href}
                    className="inline-flex items-center gap-1.5 text-silver hover:text-primary transition-colors border border-border-subtle hover:border-silver px-3 py-1.5 bg-charcoal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red group"
                  >
                    <span>View in {activeStage.relatedCaseStudy.title}</span>
                    <ArrowRight className="h-3 w-3 text-signal-red group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Foundational Architecture Pillars Grid */}
        <div className="space-y-6 pt-10 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase text-silver-dark tracking-widest flex items-center gap-2">
                <span className="h-1 w-1 bg-signal-red" aria-hidden="true" />
                FOUNDATIONAL_PILLARS // TECHNICAL_DEPTH
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary mt-1">
                Core Architectural Foundations
              </h3>
            </div>
            <span className="font-mono text-xs text-silver-dark">
              SPECIFICATION_MATRIX // V3.2
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalApproachPillars.map((pillar) => (
              <div
                key={pillar.code}
                className="bg-bg-elevated border border-border-subtle p-6 flex flex-col justify-between shadow-elevation hover:border-silver/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-silver-dark tracking-wider flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-signal-red" aria-hidden="true" />
                      {pillar.code}
                    </span>
                    <span className="font-mono text-[10px] text-silver-muted uppercase tracking-wider">
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

                <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
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
