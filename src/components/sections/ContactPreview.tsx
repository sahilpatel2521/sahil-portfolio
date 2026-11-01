"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Mail, Linkedin, Github, FileText, Phone, MapPin, Radio, CheckCircle2 } from "lucide-react";

export const ContactPreview: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">
        <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden shadow-spatial">
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Available for Senior Android Engineer roles &amp; architecture consulting</span>
            </div>

            <SectionHeading
              systemCode="08 · Contact"
              title="Let's Build Something Meaningful"
              subtitle="Available for Senior Android Engineer positions, platform architecture, BLE peripheral integration, and low-latency audio/video systems."
            />

            {/* Direct CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <PrimaryButton
                href="mailto:heysahilpatel@gmail.com"
                variant="signal"
                size="lg"
                signalDot
                icon={<Mail className="h-4 w-4" />}
              >
                heysahilpatel@gmail.com
              </PrimaryButton>

              <PrimaryButton
                href="https://www.linkedin.com/in/sahil-patel-b0aa83194"
                external
                variant="primary"
                size="lg"
                icon={<Linkedin className="h-4 w-4 text-silver" />}
              >
                LinkedIn Profile
              </PrimaryButton>

              <PrimaryButton
                href="https://github.com/sahilpatel2521"
                external
                variant="outline"
                size="lg"
                icon={<Github className="h-4 w-4 text-silver" />}
              >
                GitHub @sahilpatel2521
              </PrimaryButton>

              <PrimaryButton
                href="/assets/Sahil_Patel_Senior_Android_Engineer_Resume.pdf"
                external
                variant="outline"
                size="lg"
                icon={<FileText className="h-4 w-4 text-silver" />}
              >
                Resume (PDF)
              </PrimaryButton>
            </div>

            {/* Location & Direct Coordinates */}
            <div className="pt-6 border-t border-white/[0.06] font-mono text-xs text-silver-dark flex flex-wrap gap-y-2 gap-x-6">
              <span className="flex items-center gap-1.5 text-silver">
                <Phone className="h-3.5 w-3.5 text-signal-red" />
                +91 63552 38623
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-silver">
                <MapPin className="h-3.5 w-3.5 text-silver-dark" />
                Ahmedabad, Gujarat, India (IST / UTC+5:30)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Open to Remote &amp; Hybrid
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
