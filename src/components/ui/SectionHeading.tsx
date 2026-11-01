import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  systemCode?: string;
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  systemCode,
  title,
  subtitle,
  badge,
  className,
}) => {
  return (
    <div className={cn("mb-8 sm:mb-12", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
        {systemCode && (
          <span className="font-mono text-xs text-silver-dark font-medium flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-red" aria-hidden="true" />
            {systemCode}
          </span>
        )}
        {badge && <div className="shrink-0">{badge}</div>}
      </div>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-silver-dark max-w-2xl font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
