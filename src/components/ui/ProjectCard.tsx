import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { TechnicalLabel } from "./TechnicalLabel";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  id: string;
  systemCode: string;
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  href: string;
  status?: "production" | "enterprise" | "hardware" | "research";
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  systemCode,
  title,
  category,
  description,
  metrics,
  tags,
  href,
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between bg-bg-elevated border border-border-subtle hover:border-border-highlight transition-all duration-300 p-6 sm:p-7 shadow-elevation hover:shadow-elevation-lg",
        className
      )}
    >
      {/* Top Laser Notch Accent (Strictly 3-5% red accent) */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-border-medium to-transparent group-hover:via-signal-red-border transition-colors duration-300" />

      <div>
        {/* Header HUD */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="font-mono text-[11px] tracking-wider text-silver-dark flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-signal-red group-hover:scale-125 transition-transform" />
            {systemCode}
          </span>
          <TechnicalLabel variant="neutral" size="xs">
            {category}
          </TechnicalLabel>
        </div>

        {/* Project Title & Category */}
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary group-hover:text-white transition-colors flex items-center justify-between">
          <span>{title}</span>
          <Cpu className="h-4 w-4 text-silver-muted opacity-40 group-hover:opacity-100 group-hover:text-silver transition-all" />
        </h3>

        <p className="mt-3 text-sm text-muted font-body leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Key Measurable Outcomes */}
        {metrics && metrics.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-2 border-y border-border-subtle py-3">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-base sm:text-lg font-bold text-silver">
                  {m.value}
                </span>
                <span className="font-mono text-[10px] uppercase text-silver-dark tracking-wider">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <TechnicalLabel key={tag} variant="outline" size="xs">
              {tag}
            </TechnicalLabel>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-silver group-hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
        >
          <span>Examine Architecture</span>
          <ArrowRight className="h-3.5 w-3.5 text-silver group-hover:translate-x-1 group-hover:text-signal-red transition-all" />
        </Link>
      </div>
    </div>
  );
};
