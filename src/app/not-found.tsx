import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <Container size="narrow">
        <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-8 sm:p-12 text-center space-y-6 shadow-spatial">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-silver">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-red" />
            <span>404 Error</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            Page Not Found
          </h1>

          <p className="font-body text-sm sm:text-base text-silver-dark max-w-md mx-auto leading-relaxed">
            The page or specification you are looking for does not exist or has been relocated.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <PrimaryButton
              href="/"
              variant="signal"
              size="md"
              signalDot
              icon={<ArrowLeft className="h-4 w-4" />}
            >
              Return Home
            </PrimaryButton>

            <PrimaryButton href="/projects" variant="outline" size="md">
              View All Projects
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
