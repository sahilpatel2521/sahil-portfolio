import React from "react";
import Link from "next/link";
import { NavigationMenu } from "./NavigationMenu";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { Container } from "../ui/Container";

export const SiteHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-bg-deep/90 backdrop-blur-md border-b border-border-subtle transition-all">
      <Container size="wide" className="h-16 flex items-center justify-between">
        {/* Brand & Telemetry */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
        >
          {/* Signal Indicator Dot */}
          <div className="relative flex items-center justify-center h-5 w-5 bg-charcoal border border-border-subtle">
            <span
              className="h-1.5 w-1.5 rounded-full bg-signal-red group-hover:scale-125 transition-transform"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-primary flex items-center gap-1.5">
              <span>SIGNAL</span>
              <span className="text-silver-dark font-mono text-xs">/</span>
              <span className="text-silver">SYSTEM</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-silver-dark hidden sm:inline-block">
              SAHIL PATEL // SR. ANDROID
            </span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu />
      </Container>

      {/* Global Scroll Progress Bar */}
      <ScrollProgressBar />
    </header>
  );
};
