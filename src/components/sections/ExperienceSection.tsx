import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { workExperience } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <Container size="wide">
        <SectionHeading
          systemCode="// 05. PROFESSIONAL CAREER"
          title="Work Experience"
          subtitle="Engineering leadership, embedded firmware collaboration, and architecture modernization."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator pulse>
              Present Role
            </TechnicalLabel>
          }
        />

        <div className="space-y-8">
          {workExperience.map((job, idx) => (
            <div
              key={idx}
              className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 shadow-elevation relative"
            >
              {/* Top Laser Accent */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-signal-red-border to-transparent" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-subtle">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-signal-red" />
                    <span className="font-mono text-xs uppercase text-silver-dark tracking-widest">
                      {job.company}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary">
                    {job.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-silver-dark">
                  <span className="flex items-center gap-1.5 bg-charcoal px-2.5 py-1 border border-border-subtle text-silver">
                    <Calendar className="h-3.5 w-3.5 text-signal-red" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-silver-dark" />
                    {job.location}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base text-silver font-body leading-relaxed max-w-4xl">
                {job.summary}
              </p>

              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-silver-dark mb-3">
                  CORE RESPONSIBILITIES &amp; DELIVERABLES:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {job.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 bg-charcoal/30 border border-border-subtle text-xs text-silver-light font-body leading-relaxed"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-signal-red shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
                {job.technologies.map((t) => (
                  <TechnicalLabel key={t} variant="outline" size="xs">
                    {t}
                  </TechnicalLabel>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
