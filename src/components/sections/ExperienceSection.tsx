"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { MotionSection } from "@/components/motion/MotionSection";
import { workExperience } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">
        <SectionHeading
          systemCode="06 · Career & Experience"
          title="Work Experience"
          subtitle="Engineering leadership, embedded firmware collaboration, BLE platform architecture, and Android modernization."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              Present Role
            </TechnicalLabel>
          }
        />

        <div className="space-y-6">
          {workExperience.map((job, idx) => (
            <MotionSection key={idx} delay={idx * 0.1}>
              <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-8 shadow-spatial relative transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Briefcase className="h-4 w-4 text-signal-red" />
                      <span className="font-mono text-xs text-silver-dark font-medium">
                        {job.company}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-primary">
                      {job.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-silver-dark">
                    <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08] text-silver">
                      <Calendar className="h-3.5 w-3.5 text-signal-red" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-silver-dark">
                      <MapPin className="h-3.5 w-3.5 text-silver-muted" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base text-silver font-body leading-relaxed max-w-4xl">
                  {job.summary}
                </p>

                <div className="mt-6">
                  <h4 className="font-mono text-xs text-silver-dark font-medium mb-3">
                    Core Engineering Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-silver font-body leading-relaxed"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-signal-red shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {job.technologies.map((t) => (
                    <TechnicalLabel key={t} variant="outline" size="xs">
                      {t}
                    </TechnicalLabel>
                  ))}
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
