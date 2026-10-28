import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Container } from "../ui/Container";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full bg-bg-deep border-t border-border-subtle mt-24 py-12">
      <Container size="wide">
        {/* Top telemetry row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border-subtle">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-red animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-silver">
                STATUS: ALL SYSTEMS NOMINAL
              </span>
            </div>
            <p className="font-mono text-[11px] text-silver-dark tracking-wider">
              LAT/LONG: 23.0225° N, 72.5714° E // AHMEDABAD, GUJARAT, INDIA
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sahilpatel2521"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver-dark hover:text-primary bg-charcoal border border-border-subtle hover:border-silver transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
              aria-label="GitHub Profile (sahilpatel2521)"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-patel-b0aa83194"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver-dark hover:text-primary bg-charcoal border border-border-subtle hover:border-silver transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
              aria-label="LinkedIn Profile (Sahil Patel)"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:heysahilpatel@gmail.com"
              className="p-2 text-silver-dark hover:text-primary bg-charcoal border border-border-subtle hover:border-silver transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
              aria-label="Send Email to heysahilpatel@gmail.com"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright and metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-silver-dark">
          <div>
            <span>© {new Date().getFullYear()} SAHIL PATEL. </span>
            <span className="text-silver-muted">SIGNAL / SYSTEM — SENIOR ANDROID PORTFOLIO.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/resume"
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
            >
              {"// RESUME_INDEX"}
            </Link>
            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
              aria-label="Back to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
