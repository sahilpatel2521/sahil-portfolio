import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { AppGallery } from "@/components/apps/AppGallery";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Released Applications Gallery | SIGNAL / SYSTEM",
  description:
    "Explore released Android applications built by Sahil Patel, including on-device AI recommendation engines, hands-free accessibility platforms, and wearable companion apps.",
};

export default function AppsIndexPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <Container size="wide">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-signal-red" />
            <span>Return to Home Dashboard</span>
          </Link>
        </div>

        <SectionHeading
          systemCode="// INDEX. PRODUCTION RELEASES"
          title="Released Applications & Products"
          subtitle="Explore standalone consumer and open-source applications engineered with on-device computer vision, Android Accessibility Services, and clean architecture."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              Product Showcase
            </TechnicalLabel>
          }
        />
      </Container>

      {/* Editorial App Gallery */}
      <AppGallery />

      {/* Verification Notice */}
      <Container size="wide">
        <div className="p-4 bg-charcoal/40 border border-border-subtle flex items-start gap-3 text-xs text-silver-dark font-mono">
          <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            PUBLICATION DISCLOSURE: Google Play URLs for Styledrobe, Zbukk, and WeHear have been
            verified against live public listings. ReachMe is cataloged as an architectural prototype
            with unpublished store distribution.
          </p>
        </div>
      </Container>
    </div>
  );
}
