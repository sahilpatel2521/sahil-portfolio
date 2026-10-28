import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { technicalApproachPillars } from "@/data/technicalApproach";
import { CheckCircle2 } from "lucide-react";

export const TechnicalApproach: React.FC = () => {
  return (
    <section id="approach" className="scroll-mt-24">
      <Container size="wide">
        <SectionHeading
          systemCode="// 03. ENGINEERING PHILOSOPHY"
          title="Technical Approach & Architecture"
          subtitle="How I approach building mission-critical Android systems: from protocol-level deterministic contracts to reactive UI state management."
          badge={
            <TechnicalLabel variant="neutral" size="sm">
              4 Core Pillars
            </TechnicalLabel>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalApproachPillars.map((pillar) => (
            <div
              key={pillar.code}
              className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 flex flex-col justify-between shadow-elevation"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase text-silver-dark tracking-widest flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-signal-red" />
                    {pillar.code}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-silver-dark tracking-wider">
                    {pillar.subtitle}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm text-muted font-body leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-border-subtle pt-4">
                  {pillar.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-silver font-body leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-signal-red shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
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
      </Container>
    </section>
  );
};
