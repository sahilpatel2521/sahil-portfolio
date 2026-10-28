import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "signal" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  signalDot?: boolean;
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  signalDot = false,
  icon,
  className,
  children,
  ...props
}) => {
  const baseClasses =
    "group inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-all duration-150 active:scale-[0.98] select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep";

  const variantClasses = {
    primary:
      "bg-bg-elevated hover:bg-bg-surface text-primary border border-border-medium hover:border-silver shadow-sm",
    signal:
      "bg-bg-elevated hover:bg-bg-surface text-primary border border-signal-red-border hover:border-signal-red shadow-sm",
    outline:
      "bg-transparent hover:bg-bg-elevated text-silver hover:text-primary border border-border-subtle hover:border-border-medium",
    ghost:
      "bg-transparent hover:bg-bg-elevated text-silver hover:text-primary border border-transparent",
  };

  const sizeClasses = {
    sm: "h-8 px-3 py-1 gap-1.5",
    md: "h-10 px-4 py-2 gap-2",
    lg: "h-12 px-6 py-3 gap-2.5 text-sm",
  };

  const content = (
    <>
      {signalDot && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-signal-red group-hover:scale-125 transition-transform shrink-0"
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
      {icon && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  const mergedClassName = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={mergedClassName}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={mergedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={mergedClassName} {...props}>
      {content}
    </button>
  );
};
