"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/experience";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">
        <SectionHeading
          systemCode="07 · Academic Foundation"
          title="Education & Credentials"
          subtitle="Formal foundation in Information Technology, computer networking, systems design, and software architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 shadow-elevation flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-silver-dark font-mono text-xs">
                    <GraduationCap className="h-4 w-4 text-signal-red" />
                    <span>Education</span>
                  </div>
                  <span className="font-mono text-xs text-silver-muted flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-silver-muted" />
                    {item.period}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-primary">
                  {item.degree}
                </h3>

                <p className="font-sans text-sm text-silver mt-1">
                  {item.institution}
                </p>

                {item.location && (
                  <p className="font-mono text-xs text-silver-muted mt-1 flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </p>
                )}

                <p className="mt-4 text-xs sm:text-sm text-silver-dark font-body leading-relaxed pt-3 border-t border-white/[0.06]">
                  <span className="text-silver font-medium block font-sans text-xs mb-1">
                    Curricular Focus:
                  </span>
                  {item.focus}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-silver-muted">
                <span>Formal Qualification</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Completed
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
