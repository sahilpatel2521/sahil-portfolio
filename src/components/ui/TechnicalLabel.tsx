import React from "react";
import { cn } from "@/lib/utils";

export interface TechnicalLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "signal" | "outline" | "success";
  size?: "xs" | "sm" | "md";
  indicator?: boolean;
  pulse?: boolean;
}

export const TechnicalLabel: React.FC<TechnicalLabelProps> = ({
  variant = "neutral",
  size = "sm",
  indicator = false,
  pulse: _pulse = false,
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    neutral: "bg-white/[0.04] text-silver border-white/[0.08]",
    signal: "bg-signal-red-muted text-primary border-signal-red-border",
    outline: "bg-transparent text-silver-dark border-white/[0.08] hover:border-white/[0.18]",
    success: "bg-emerald-950/30 text-emerald-300 border-emerald-900/40",
  };

  const sizeClasses = {
    xs: "text-[11px] px-2 py-0.5 gap-1",
    sm: "text-xs px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3 py-1 gap-2",
  };

  const indicatorDotColor = {
    neutral: "bg-silver-dark",
    signal: "bg-signal-red",
    outline: "bg-silver-muted",
    success: "bg-emerald-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-medium rounded-full border transition-colors select-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {indicator && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full shrink-0",
            indicatorDotColor[variant]
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};
