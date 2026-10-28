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
  pulse = false,
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    neutral: "bg-charcoal text-silver border-border-subtle",
    signal: "bg-signal-red-muted text-primary border-signal-red-border",
    outline: "bg-transparent text-silver-dark border-border-subtle hover:border-silver-dark",
    success: "bg-emerald-950/40 text-emerald-300 border-emerald-900/50",
  };

  const sizeClasses = {
    xs: "text-[10px] px-1.5 py-0.5 tracking-wider gap-1",
    sm: "text-xs px-2 py-1 tracking-wider gap-1.5",
    md: "text-xs px-3 py-1.5 tracking-widest gap-2",
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
        "inline-flex items-center font-mono font-medium uppercase border transition-colors select-none",
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
            indicatorDotColor[variant],
            pulse && variant === "signal" && "animate-pulse"
          )}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};
