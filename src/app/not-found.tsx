import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow">
        <div className="bg-bg-elevated border border-border-subtle p-8 sm:p-12 text-center space-y-6 shadow-elevation relative">
          {/* Top Laser Accent */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-signal-red to-transparent" />

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal border border-border-subtle font-mono text-xs text-signal-red">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>ERROR_CODE: 404 // UNRESOLVED_COORDINATE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-primary tracking-tight">
            SYSTEM NOT FOUND
          </h1>

          <p className="font-body text-sm sm:text-base text-muted max-w-md mx-auto leading-relaxed">
            The requested platform specification or telemetry route does not exist within the current
            dispatch registry.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <PrimaryButton
              href="/"
              variant="signal"
              size="md"
              signalDot
              icon={<ArrowLeft className="h-4 w-4" />}
            >
              Return to Dashboard
            </PrimaryButton>

            <PrimaryButton href="/projects" variant="outline" size="md">
              Architecture Index
            </PrimaryButton>
          </div>

          <div className="pt-6 border-t border-border-subtle font-mono text-[10px] text-silver-dark uppercase tracking-widest">
            STATUS: ROUTING_FAULT_CONTAINED // DISPATCH_NORMAL
          </div>
        </div>
      </Container>
    </div>
  );
}
