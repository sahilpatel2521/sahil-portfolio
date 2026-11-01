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
    "group inline-flex items-center justify-center font-sans text-sm font-medium transition-all duration-200 active:scale-[0.98] select-none rounded-xl disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep";

  const variantClasses = {
    primary:
      "bg-white/[0.07] hover:bg-white/[0.12] text-primary border border-white/[0.12] hover:border-white/[0.25] shadow-sm",
    signal:
      "bg-white/[0.08] hover:bg-white/[0.14] text-primary border border-signal-red/50 hover:border-signal-red shadow-sm",
    outline:
      "bg-transparent hover:bg-white/[0.05] text-silver hover:text-primary border border-white/[0.08] hover:border-white/[0.18]",
    ghost:
      "bg-transparent hover:bg-white/[0.05] text-silver hover:text-primary border border-transparent",
  };

  const sizeClasses = {
    sm: "h-8 px-3.5 text-xs gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-11 px-5 text-sm gap-2.5",
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
