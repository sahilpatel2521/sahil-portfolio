"use client";

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
    <section id="open-source" className="scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">
        <SectionHeading
          systemCode="05 · Upstream Contributions"
          title="Open-Source Contributions"
          subtitle="Verified pull requests and contributions to widely adopted Android developer tooling and upstream privacy platforms."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              Verified Pull Requests
            </TechnicalLabel>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openSourceContributions.map((contrib, idx) => (
            <MotionSection key={contrib.id} delay={idx * 0.08}>
              <div className="group relative flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.2] transition-all p-6 shadow-elevation h-full">
                <div>
                  {/* Header status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <TechnicalLabel
                      variant={contrib.status === "merged" ? "success" : "neutral"}
                      size="xs"
                      indicator
                    >
                      {`PR #${contrib.prNumber} · ${contrib.status === "merged" ? "Merged" : "Open"}`}
                    </TechnicalLabel>
                    <span className="font-mono text-xs text-silver-dark flex items-center gap-1.5">
                      <Github className="h-3.5 w-3.5" />
                      {contrib.repoOwner}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-primary group-hover:text-white transition-colors">
                    {contrib.prTitle}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-silver-dark font-body leading-relaxed">
                    {contrib.summary}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-silver font-body">
                    <span className="font-mono text-[11px] text-silver-dark font-medium block mb-1">
                      Upstream Impact:
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
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <TextLink
                    href={contrib.prUrl}
                    external
                    variant={contrib.status === "merged" ? "silver" : "signal"}
                    showArrow
                  >
                    View Pull Request #{contrib.prNumber}
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
