import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Projects & Architecture Case Studies | SIGNAL / SYSTEM",
  description:
    "Low-level Android architecture case studies: smart hearing-aid BLE platform, real-time translation pipelines, medical otoscope UDP video streaming, and digital audio DSP.",
};

export default function ProjectsIndexPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <Container size="wide">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-signal-red" />
            <span>Return to Home Dashboard</span>
          </Link>
        </div>

        <SectionHeading
          systemCode="// INDEX. ARCHITECTURE SPECIFICATIONS"
          title="Engineering Case Studies"
          subtitle="In-depth breakdowns of real-world production Android platforms: protocol engineering, concurrency control, peripheral synchronization, and latency minimization."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              4 Technical Specs
            </TechnicalLabel>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              systemCode={project.systemCode}
              title={project.title}
              category={project.category}
              description={project.overview}
              metrics={project.metrics.slice(0, 2).map((m) => ({
                label: m.label,
                value: m.value,
              }))}
              tags={project.techStack}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
