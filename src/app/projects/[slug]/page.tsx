import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { DiagramRenderer } from "@/components/diagrams/DiagramRenderer";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  Radio,
  FileCode2,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Technical Case Study | SIGNAL / SYSTEM`,
    description: project.overview,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* HUD Header Banner */}
      <section className="relative">
        <Container size="wide">
          {/* Back breadcrumb */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/#systems"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-signal-red" />
              <span>Back to Systems Matrix</span>
            </Link>

            <span className="font-mono text-xs text-silver-dark hidden sm:inline-block">
              {project.systemCode}
            </span>
          </div>

          {/* Title Header */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <TechnicalLabel variant="signal" size="xs" indicator>
                {project.category}
              </TechnicalLabel>
              <span className="font-mono text-xs text-silver-dark">•</span>
              <span className="font-mono text-xs text-silver-dark">{project.period}</span>
              <span className="font-mono text-xs text-silver-dark">•</span>
              <span className="font-mono text-xs text-silver">{project.role}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              {project.title}
            </h1>

            <p className="font-display text-lg sm:text-2xl text-silver font-light leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics HUD Strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5 sm:p-6 bg-bg-elevated border border-border-subtle shadow-elevation">
            {project.metrics.map((m, i) => (
              <div key={i} className="border-l border-border-medium pl-3 py-1">
                <div className="font-display text-2xl sm:text-3xl font-bold text-primary">
                  {m.value}
                </div>
                <div className="font-mono text-[11px] text-silver font-semibold mt-0.5">
                  {m.label}
                </div>
                <div className="font-mono text-[10px] text-silver-dark mt-1 line-clamp-2">
                  {m.qualification}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Embedded Architecture Diagram Visualizer */}
      <section className="relative">
        <Container size="wide">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-silver-dark uppercase tracking-widest flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-signal-red" />
                  TECHNICAL_ARCHITECTURE_SPECIFICATION
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-primary mt-1">
                  {project.architecture.diagramTitle}
                </h2>
              </div>
              <TechnicalLabel variant="neutral" size="xs">
                INTERACTIVE SCHEMATIC
              </TechnicalLabel>
            </div>

            <DiagramRenderer type={project.architecture.diagramType} />

            <p className="font-mono text-xs text-silver-dark leading-relaxed">
              {project.architecture.diagramDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Context, Scope & Problem Definition */}
      <section>
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Context & Problem */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-signal-red" />
                  Context &amp; Engineering Challenge
                </h3>
                <p className="text-sm sm:text-base text-silver font-body leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Architecture Pillars */}
              <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 space-y-6">
                <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-signal-red" />
                  System Architecture &amp; Implementation
                </h3>
                <p className="text-sm text-silver font-body leading-relaxed">
                  {project.architecture.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border-subtle">
                  {project.architecture.pillars.map((pillar, idx) => (
                    <div key={idx} className="space-y-2 p-3 bg-charcoal/40 border border-border-subtle">
                      <div className="font-mono text-xs text-signal-red font-bold">
                        PILLAR 0{idx + 1}
                      </div>
                      <h4 className="font-display text-sm font-semibold text-primary">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed font-body">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Difficult Technical Decisions & Trade-offs */}
              <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 space-y-6">
                <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-signal-red" />
                  Difficult Technical Decisions &amp; Trade-Offs
                </h3>

                <div className="space-y-6">
                  {project.keyDecisions.map((decision, idx) => (
                    <div key={idx} className="p-4 bg-charcoal/30 border border-border-subtle space-y-3">
                      <h4 className="font-display text-base font-semibold text-silver">
                        {decision.title}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-body text-xs">
                        <div className="p-2 bg-bg-deep border border-border-subtle">
                          <span className="font-mono text-[10px] text-silver-dark uppercase block mb-1">
                            CONTEXT:
                          </span>
                          <span className="text-muted">{decision.context}</span>
                        </div>
                        <div className="p-2 bg-bg-deep border border-border-subtle">
                          <span className="font-mono text-[10px] text-silver-dark uppercase block mb-1">
                            DECISION:
                          </span>
                          <span className="text-silver-light font-medium">{decision.decision}</span>
                        </div>
                        <div className="p-2 bg-bg-deep border border-border-subtle">
                          <span className="font-mono text-[10px] text-emerald-400 uppercase block mb-1">
                            RATIONALE:
                          </span>
                          <span className="text-silver-light">{decision.rationale}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reliability & Production Hardening */}
              <div className="bg-bg-elevated border border-border-subtle p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-xl font-bold text-primary flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Reliability &amp; Performance Hardening
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.reliability.map((rel, i) => (
                    <div key={i} className="p-3 bg-charcoal/30 border border-border-subtle space-y-1.5">
                      <h4 className="font-display text-sm font-semibold text-silver">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed font-body">
                        {rel.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Ownership, Hardware & Links Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Responsibility & Scope Card */}
              <div className="bg-bg-elevated border border-border-subtle p-6 space-y-5 shadow-elevation">
                <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-silver-dark">
                    OWNERSHIP_SCOPE
                  </span>
                  <TechnicalLabel variant="neutral" size="xs">
                    INDIVIDUAL VS TEAM
                  </TechnicalLabel>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-signal-red font-bold block mb-1">
                      MY PERSONAL CONTRIBUTIONS:
                    </span>
                    <p className="text-xs text-silver font-body leading-relaxed">
                      {project.personalScope}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border-subtle">
                    <span className="font-mono text-[10px] uppercase text-silver-dark font-bold block mb-1">
                      WIDER TEAM RESPONSIBILITIES:
                    </span>
                    <p className="text-xs text-muted font-body leading-relaxed">
                      {project.teamScope}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hardware & Peripheral Integration */}
              {project.hardwareNotes && (
                <div className="bg-bg-elevated border border-border-subtle p-6 space-y-3 shadow-elevation">
                  <span className="font-mono text-xs uppercase tracking-wider text-silver-dark flex items-center gap-1.5">
                    <Radio className="h-3.5 w-3.5 text-signal-red" />
                    HARDWARE_ENVIRONMENT
                  </span>
                  <p className="text-xs text-silver font-mono leading-relaxed">
                    {project.hardwareNotes}
                  </p>
                </div>
              )}

              {/* Technology Stack */}
              <div className="bg-bg-elevated border border-border-subtle p-6 space-y-4 shadow-elevation">
                <span className="font-mono text-xs uppercase tracking-wider text-silver-dark flex items-center gap-1.5">
                  <FileCode2 className="h-3.5 w-3.5 text-silver" />
                  TECHNOLOGIES_USED
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <TechnicalLabel key={tech} variant="outline" size="xs">
                      {tech}
                    </TechnicalLabel>
                  ))}
                </div>
              </div>

              {/* Public Links & Verification Status */}
              <div className="bg-bg-elevated border border-border-subtle p-6 space-y-4 shadow-elevation">
                <span className="font-mono text-xs uppercase tracking-wider text-silver-dark">
                  PUBLIC_AVAILABILITY
                </span>
                <div className="space-y-2">
                  {project.publicLinks.map((link, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      {link.verified ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-charcoal border border-border-subtle hover:border-silver text-xs font-mono text-silver hover:text-primary flex items-center justify-between transition-colors"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="h-3.5 w-3.5 text-signal-red" />
                        </a>
                      ) : (
                        <div className="p-2.5 bg-charcoal/40 border border-border-subtle text-xs font-mono text-silver-dark flex items-center justify-between">
                          <span>{link.label}</span>
                          <span className="text-[10px] text-amber-500 uppercase">CONFIDENTIAL</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Next / Previous Project Navigation */}
      <section className="pt-8 border-t border-border-subtle">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="inline-flex items-center gap-2 text-silver hover:text-primary transition-colors py-2 px-3 bg-bg-elevated border border-border-subtle hover:border-silver"
              >
                <ArrowLeft className="h-3.5 w-3.5 text-signal-red" />
                <span>PREV: {prevProject.title}</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/projects"
              className="text-silver-dark hover:text-silver transition-colors uppercase tracking-wider"
            >
              {"// ALL ARCHITECTURE CASE STUDIES"}
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 text-silver hover:text-primary transition-colors py-2 px-3 bg-bg-elevated border border-border-subtle hover:border-silver"
              >
                <span>NEXT: {nextProject.title}</span>
                <ArrowRight className="h-3.5 w-3.5 text-signal-red" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>
    </article>
  );
}
