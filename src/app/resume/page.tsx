import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { workExperience, education } from "@/data/experience";
import { openSourceContributions } from "@/data/oss";
import {
  FileText,
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Resume & Experience Index | Sahil Patel",
  description:
    "Curriculum vitae and verified technical experience of Sahil Patel, Senior Android Engineer specializing in BLE GATT systems, real-time audio/video streaming, and Jetpack Compose.",
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <Container size="narrow">
        {/* Navigation & Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-silver hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-signal-red" />
            <span>Return to Dashboard</span>
          </Link>

          <div className="flex items-center gap-3">
            <PrimaryButton
              href="/assets/Sahil_Patel_Senior_Android_Engineer_Resume.pdf"
              external
              variant="signal"
              size="sm"
              signalDot
              icon={<FileText className="h-3.5 w-3.5" />}
            >
              Download PDF Resume
            </PrimaryButton>
          </div>
        </div>

        {/* Resume Paper / HUD Container */}
        <article className="bg-bg-elevated border border-border-subtle p-8 sm:p-12 space-y-10 shadow-elevation print:bg-white print:text-black print:border-none print:p-0 print:shadow-none">
          {/* Header */}
          <header className="pb-8 border-b border-border-subtle print:border-black/20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-primary print:text-black tracking-tight">
                  SAHIL PATEL
                </h1>
                <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-silver print:text-gray-700 mt-1">
                  Senior Android Engineer // Systems &amp; Low-Level Protocols
                </p>
              </div>

              <div className="font-mono text-xs text-silver-dark print:text-gray-600 space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-signal-red print:text-black" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-signal-red print:text-black" />
                  <span>+91 63552 38623</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-signal-red print:text-black" />
                  <span>heysahilpatel@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs text-silver print:text-blue-700">
              <a
                href="https://github.com/sahilpatel2521"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <Github className="h-3.5 w-3.5" />
                <span>github.com/sahilpatel2521</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/sahil-patel-b0aa83194"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>linkedin.com/in/sahil-patel-b0aa83194</span>
              </a>
            </div>
          </header>

          {/* Technical Skills Matrix */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-silver-dark print:text-black font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-signal-red print:bg-black" />
              TECHNICAL SKILLS MATRIX
            </h2>

            <div className="space-y-2.5 font-body text-xs sm:text-sm text-silver print:text-gray-800">
              <p>
                <strong className="font-mono text-primary print:text-black font-semibold">Languages: </strong>
                Kotlin, Java, Python
              </p>
              <p>
                <strong className="font-mono text-primary print:text-black font-semibold">Android SDK: </strong>
                Jetpack Compose, Android SDK, Coroutines, Flow, Hilt, Room, WorkManager, Paging 3, XML
              </p>
              <p>
                <strong className="font-mono text-primary print:text-black font-semibold">Architecture: </strong>
                MVVM, MVI, Clean Architecture, Repository Pattern, Use Cases, UDF, Modularization, SOLID
              </p>
              <p>
                <strong className="font-mono text-primary print:text-black font-semibold">Networking &amp; Data: </strong>
                REST APIs, WebSockets, Retrofit, OkHttp Interceptors, AES-256 Encryption, UDP Streaming, Wi-Fi Station Mode
              </p>
              <p>
                <strong className="font-mono text-primary print:text-black font-semibold">AI/ML &amp; Audio: </strong>
                TensorFlow Lite, MediaPipe, On-Device ML, Audio Processing, Frequency Analysis, AudioTrack, Notch Filtering (ATNF)
              </p>
              <p>
                <strong className="font-mono text-primary print:text-black font-semibold">Performance: </strong>
                Android Profiler, CPU/Memory Profiling, Baseline Profiles, App Startup Optimization, LeakCanary, ANR Analysis
              </p>
            </div>
          </section>

          {/* Work Experience */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-silver-dark print:text-black font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-signal-red print:bg-black" />
              PROFESSIONAL WORK EXPERIENCE
            </h2>

            {workExperience.map((job, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary print:text-black">
                      {job.role}
                    </h3>
                    <p className="font-mono text-xs text-silver print:text-gray-700">
                      {job.company} — {job.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-silver-dark print:text-gray-600">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2 font-body text-xs sm:text-sm text-silver print:text-gray-800 list-disc list-inside">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Open-Source Contributions */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-silver-dark print:text-black font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-signal-red print:bg-black" />
              VERIFIED OPEN-SOURCE CONTRIBUTIONS
            </h2>

            <div className="space-y-3 font-body text-xs sm:text-sm text-silver print:text-gray-800">
              {openSourceContributions.map((contrib) => (
                <div key={contrib.id} className="p-3 bg-charcoal/40 print:bg-gray-100 border border-border-subtle print:border-none space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary print:text-black">
                      {contrib.repo} — PR #{contrib.prNumber}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400 print:text-green-700 uppercase">
                      {contrib.status}
                    </span>
                  </div>
                  <p className="text-xs text-silver print:text-gray-700">{contrib.prTitle}</p>
                  <p className="text-[11px] text-muted print:text-gray-600">{contrib.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Academic Credentials */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-silver-dark print:text-black font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-signal-red print:bg-black" />
              EDUCATION
            </h2>

            <div className="space-y-3 font-body text-xs sm:text-sm text-silver print:text-gray-800">
              {education.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-border-subtle print:border-gray-200">
                  <div>
                    <h3 className="font-display text-sm font-semibold text-primary print:text-black">
                      {item.degree}
                    </h3>
                    <p className="font-mono text-xs text-silver-dark print:text-gray-600">
                      {item.institution}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-silver-dark print:text-gray-600">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Verification Footnote */}
          <footer className="pt-6 border-t border-border-subtle print:border-gray-200 flex items-center justify-between font-mono text-[10px] text-silver-dark print:text-gray-500">
            <span>VERIFIED PROFESSIONAL RECORD // SIGNAL / SYSTEM</span>
            <span>AHMEDABAD, IN // OCT 2026</span>
          </footer>
        </article>
      </Container>
    </div>
  );
}
