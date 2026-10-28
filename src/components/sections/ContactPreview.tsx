import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Mail, Linkedin, Github, FileText, Phone, MapPin, Radio } from "lucide-react";

export const ContactPreview: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24">
      <Container size="wide">
        <div className="bg-bg-elevated border border-border-subtle p-8 sm:p-12 relative overflow-hidden shadow-elevation">
          {/* Subtle background radar ring element */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none font-mono text-8xl font-bold select-none text-silver">
            SIGNAL
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-signal-red">
              <span className="h-2 w-2 rounded-full bg-signal-red animate-pulse" />
              <span>DISPATCH TELEMETRY ACTIVE // CH_01</span>
            </div>

            <SectionHeading
              systemCode="// 07. DIRECT COORDINATES"
              title="Connect & Collaborate"
              subtitle="Available for Senior Android Engineer roles, technical platform architecture, Bluetooth/BLE hardware integration, and low-latency audio/video consulting."
            />

            {/* Direct CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
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
                Download Resume (PDF)
              </PrimaryButton>
            </div>

            {/* Hardware & Location Coordinates */}
            <div className="pt-6 border-t border-border-subtle font-mono text-xs text-silver-dark flex flex-wrap gap-y-2 gap-x-6">
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
                <Radio className="h-3.5 w-3.5" />
                READY FOR DISPATCH
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
