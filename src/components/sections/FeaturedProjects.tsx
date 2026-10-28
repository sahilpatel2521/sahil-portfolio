import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MotionSection } from "@/components/motion/MotionSection";
import { projects } from "@/data/projects";
import { ArrowRight, Layers } from "lucide-react";

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="systems" className="scroll-mt-24">
      <Container size="wide">
        <SectionHeading
          systemCode="// 02. CORE ARCHITECTURE"
          title="Featured Case Studies"
          subtitle="Deep-dive architectural case studies covering smart hearing-aid BLE protocols, real-time translation pipelines, UDP medical video streaming, and digital audio DSP."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              Systems Showcase
            </TechnicalLabel>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <MotionSection key={project.id} delay={idx * 0.08}>
              <ProjectCard
                id={project.id}
                systemCode={project.systemCode}
                title={project.title}
                category={project.category}
                description={project.overview}
                metrics={project.metrics.slice(0, 2).map((m) => ({
                  label: m.label,
                  value: m.value,
                }))}
                tags={project.techStack.slice(0, 4)}
                href={`/projects/${project.slug}`}
              />
            </MotionSection>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors py-2 px-4 bg-bg-elevated border border-border-subtle hover:border-silver focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
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
