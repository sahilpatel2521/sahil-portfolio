import React from "react";
import Link from "next/link";
import { ArrowUpRight, Smartphone, Github } from "lucide-react";
import { TechnicalLabel } from "./TechnicalLabel";
import { cn } from "@/lib/utils";

export interface AppCardProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  platform: "Google Play" | "GitHub" | "Multiplatform";
  playStoreUrl?: string;
  githubUrl?: string;
  internalSlug?: string;
  tags: string[];
  status?: "live" | "open-source" | "in-development";
  className?: string;
}

export const AppCard: React.FC<AppCardProps> = ({
  name,
  tagline,
  description,
  platform,
  playStoreUrl,
  githubUrl,
  internalSlug,
  tags,
  status = "live",
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between bg-bg-elevated border border-border-subtle hover:border-silver/40 transition-all duration-300 p-6 shadow-elevation",
        className
      )}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <TechnicalLabel
            variant={status === "live" ? "success" : "neutral"}
            size="xs"
            indicator
          >
            {status === "live" ? "Live Release" : "Open Source"}
          </TechnicalLabel>
          <span className="font-mono text-[10px] uppercase text-silver-dark tracking-wider">
            {platform}
          </span>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-primary group-hover:text-white transition-colors">
              {name}
            </h3>
            <p className="font-mono text-xs text-silver-dark mt-0.5">{tagline}</p>
          </div>
          <div className="p-2 bg-charcoal border border-border-subtle text-silver shrink-0">
            <Smartphone className="h-4 w-4" />
          </div>
        </div>

        <p className="mt-3 text-sm text-muted font-body leading-relaxed">
          {description}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <TechnicalLabel key={t} variant="outline" size="xs">
              {t}
            </TechnicalLabel>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
        {internalSlug ? (
          <Link
            href={`/apps/${internalSlug}`}
            className="font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            <span>Overview</span>
          </Link>
        ) : (
          <span />
        )}

        <div className="flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-silver-dark hover:text-primary transition-colors"
              title="View Source on GitHub"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Source</span>
            </a>
          )}
          {playStoreUrl && (
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-silver-dark hover:text-primary transition-colors"
              title="Open in Google Play Store"
            >
              <span>Play Store</span>
              <ArrowUpRight className="h-3 w-3 text-signal-red" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
