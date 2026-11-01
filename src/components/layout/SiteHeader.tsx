import React from "react";
import Link from "next/link";
import { NavigationMenu } from "./NavigationMenu";
import { Container } from "../ui/Container";

export const SiteHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0f0f11]/80 backdrop-blur-xl border-b border-white/[0.07] transition-all">
      {/* Skip to Main Content accessible link for keyboard & screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1c1c20] focus:border focus:border-signal-red focus:text-primary focus:font-sans focus:text-xs focus:rounded-lg focus:shadow-elevation focus:outline-none focus:ring-1 focus:ring-signal-red transition-all"
      >
        Skip to main content
      </a>

      <Container size="wide" className="h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red rounded-lg p-1"
        >
          {/* Signal Indicator Dot */}
          <div className="relative flex items-center justify-center h-6 w-6 rounded-lg bg-white/[0.05] border border-white/[0.08]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-signal-red group-hover:scale-125 transition-transform"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-display text-sm font-semibold tracking-tight text-primary flex items-center gap-1.5">
              <span>Sahil Patel</span>
              <span className="text-silver-muted text-xs">·</span>
              <span className="text-silver text-xs font-normal">Android</span>
            </span>
            <span className="font-body text-[11px] text-silver-dark hidden sm:inline-block">
              Senior Android Engineer
            </span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu />
      </Container>
    </header>
  );
};
