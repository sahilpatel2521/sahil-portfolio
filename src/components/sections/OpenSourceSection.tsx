import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { TextLink } from "@/components/ui/TextLink";
import { MotionSection } from "@/components/motion/MotionSection";
import { openSourceContributions } from "@/data/oss";
import { GitPullRequest, Github } from "lucide-react";

export const OpenSourceSection: React.FC = () => {
  return (
    <section id="open-source" className="scroll-mt-24">
      <Container size="wide">
        <SectionHeading
          systemCode="// 04. UPSTREAM CONTRIBUTIONS"
          title="Open-Source Contributions"
          subtitle="Verified contributions to widely adopted Android developer tooling and upstream privacy platforms."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              Verified Pull Requests
            </TechnicalLabel>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openSourceContributions.map((contrib, idx) => (
            <MotionSection key={contrib.id} delay={idx * 0.08}>
              <div className="group relative flex flex-col justify-between bg-bg-elevated border border-border-subtle hover:border-silver/40 transition-all p-6 shadow-elevation h-full">
                <div>
                  {/* Header status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <TechnicalLabel
                      variant={contrib.status === "merged" ? "success" : "neutral"}
                      size="xs"
                      indicator
                    >
                      {`PR #${contrib.prNumber} // ${contrib.status.toUpperCase()}`}
                    </TechnicalLabel>
                    <span className="font-mono text-xs text-silver-dark flex items-center gap-1">
                      <Github className="h-3 w-3" />
                      {contrib.repoOwner}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-primary group-hover:text-white transition-colors">
                    {contrib.prTitle}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-muted font-body leading-relaxed">
                    {contrib.summary}
                  </p>

                  <div className="mt-4 p-3 bg-charcoal/50 border border-border-subtle text-xs text-silver-dark font-body">
                    <span className="font-mono text-[10px] text-silver font-semibold uppercase block mb-1">
                      UPSTREAM IMPACT:
                    </span>
                    {contrib.impact}
                  </div>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {contrib.technologies.map((t) => (
                      <TechnicalLabel key={t} variant="outline" size="xs">
                        {t}
                      </TechnicalLabel>
                    ))}
                  </div>
                </div>

                {/* Action link */}
                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                  <TextLink
                    href={contrib.prUrl}
                    external
                    variant={contrib.status === "merged" ? "silver" : "signal"}
                    showArrow
                  >
                    Inspect Upstream PR #{contrib.prNumber}
                  </TextLink>
                  <GitPullRequest
                    className={`h-4 w-4 ${
                      contrib.status === "merged" ? "text-emerald-400" : "text-signal-red"
                    }`}
                  />
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
