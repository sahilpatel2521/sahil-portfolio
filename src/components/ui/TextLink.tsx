import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  variant?: "silver" | "signal" | "muted";
  showArrow?: boolean;
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  external = false,
  variant = "silver",
  showArrow = false,
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    silver: "text-silver hover:text-primary border-b border-border-subtle hover:border-silver",
    signal: "text-silver hover:text-primary border-b border-border-subtle hover:border-signal-red",
    muted: "text-muted hover:text-silver border-b border-transparent hover:border-border-subtle",
  };

  const content = (
    <>
      <span className="font-mono text-xs uppercase tracking-wider">{children}</span>
      {(showArrow || external) && (
        <ArrowUpRight
          className="inline-block h-3.5 w-3.5 ml-0.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          aria-hidden="true"
        />
      )}
    </>
  );

  const mergedClassName = cn(
    "group inline-flex items-center gap-0.5 pb-0.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red",
    variantClasses[variant],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={mergedClassName}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={mergedClassName} {...props}>
      {content}
    </Link>
  );
};
