import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AppCard } from "@/components/ui/AppCard";
import { TextLink } from "@/components/ui/TextLink";
import {
  FileText,
  Terminal,
  Activity,
  Layers,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24 sm:space-y-32 py-10 sm:py-16">
      {/* HERO SECTION HUD */}
      <section className="relative">
        <Container size="wide">
          {/* Top Status Telemetry Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border-subtle mb-10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal-red animate-pulse" aria-hidden="true" />
              <span className="text-silver uppercase tracking-widest">
                SYSTEM OPERATIONAL // COROUTINES_DISPATCHER_READY
              </span>
            </div>
            <div className="flex items-center gap-4 text-silver-dark">
              <span>DEVICE_TIER: HIGH_PERF</span>
              <span>•</span>
              <span>BLE_VERSION: 5.4</span>
              <span>•</span>
              <span>LOCATION: AHMEDABAD, IN</span>
            </div>
          </div>

          {/* Hero Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-charcoal border border-border-subtle">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-red" />
                <span className="font-mono text-xs uppercase tracking-widest text-silver">
                  SAHIL PATEL // SENIOR ANDROID ENGINEER
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.05]">
                SIGNAL <span className="text-silver-dark font-light">/</span> SYSTEM
              </h1>

              <p className="font-display text-lg sm:text-2xl text-silver font-light max-w-3xl leading-snug">
                Architecting deterministic Android platforms, custom BLE communication protocols,
                low-latency audio/video pipelines, and on-device ML inference.
              </p>

              <p className="font-body text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
                4+ years crafting production-grade systems at WeHear Innovations. Modernized 3
                codebase generations to Jetpack Compose, co-designed embedded protocols on-site in
                China, and invented PairHub™ for frictionless multi-device switching.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <PrimaryButton
                  href="#systems"
                  variant="signal"
                  size="lg"
                  signalDot
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Inspect Systems Matrix
                </PrimaryButton>

                <PrimaryButton
                  href="/assets/Sahil_Patel_Senior_Android_Engineer_Resume.pdf"
                  external
                  variant="primary"
                  size="lg"
                  icon={<FileText className="h-4 w-4 text-silver" />}
                >
                  Download Verified Resume
                </PrimaryButton>
              </div>
            </div>

            {/* Quick Metrics HUD Column */}
            <div className="lg:col-span-4 bg-bg-elevated border border-border-subtle p-6 space-y-6 shadow-elevation">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-silver-dark flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-signal-red" />
                  TELEMETRY_BENCHMARKS
                </span>
                <TechnicalLabel variant="neutral" size="xs">
                  VERIFIED
                </TechnicalLabel>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-border-medium pl-3 py-0.5">
                  <div className="font-display text-2xl font-bold text-primary">-70%</div>
                  <div className="font-mono text-xs text-silver-dark uppercase tracking-wider">
                    BLE Scan & Connect Latency (NUConnect)
                  </div>
                </div>

                <div className="border-l-2 border-border-medium pl-3 py-0.5">
                  <div className="font-display text-2xl font-bold text-primary">~99%</div>
                  <div className="font-mono text-xs text-silver-dark uppercase tracking-wider">
                    Smooth UDP Frame Delivery (NUScope)
                  </div>
                </div>

                <div className="border-l-2 border-border-medium pl-3 py-0.5">
                  <div className="font-display text-2xl font-bold text-primary">3,000+</div>
                  <div className="font-mono text-xs text-silver-dark uppercase tracking-wider">
                    Live Audio Stream Attendees (BNI Hawaii)
                  </div>
                </div>

                <div className="border-l-2 border-signal-red-border pl-3 py-0.5">
                  <div className="font-display text-2xl font-bold text-primary">~35%</div>
                  <div className="font-mono text-xs text-silver-dark uppercase tracking-wider">
                    Cold Start Time Reduction (Baseline Profiles)
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-border-subtle flex items-center justify-between font-mono text-[11px] text-silver-dark">
                <span>STABILITY INDEX</span>
                <span className="text-emerald-400 font-semibold">99.9% CRASH-FREE</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 01. CORE ENGINEERING SYSTEMS */}
      <section id="systems" className="scroll-mt-24">
        <Container size="wide">
          <SectionHeading
            systemCode="// 01. SYSTEMS & ARCHITECTURE"
            title="Production Engineering Platforms"
            subtitle="Low-level Android architecture, proprietary BLE hardware protocols, and high-throughput real-time streaming engines."
            badge={
              <TechnicalLabel variant="neutral" size="sm" indicator>
                4 Systems Engineered
              </TechnicalLabel>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              id="nuconnect"
              systemCode="SYS-01 // BLE PLATFORM"
              title="NUConnect"
              category="Hearing-Aid Companion"
              description="Unified Android BLE communication layer abstracting 6 hearing-aid device families with vendor-specific GATT mappings, prioritized read/write queues, and remote patient fitting algorithms."
              metrics={[
                { value: "-70%", label: "Discovery Latency" },
                { value: "-60%", label: "Clinic Visits" },
              ]}
              tags={["Kotlin", "BLE GATT", "Coroutines Flow", "Queue Serialization"]}
              href="/projects/nuconnect"
            />

            <ProjectCard
              id="wehearapp"
              systemCode="SYS-02 // TRANSLATION CORE"
              title="WeHearApp & PairHub™"
              category="Translation & Wearables"
              description="Real-time translation platform with co-designed embedded BLE firmware protocols (42+ commands) and PairHub™ multi-device switching engine supporting up to 4 simultaneous wearables."
              metrics={[
                { value: "+60%", label: "Pipeline Speed" },
                { value: "~55%", label: "Switch Latency" },
              ]}
              tags={["Jetpack Compose", "BLE Firmware", "PairHub™", "Room RemoteMediator"]}
              href="/projects/wehearapp"
            />

            <ProjectCard
              id="nuscope"
              systemCode="SYS-03 // UDP STREAMING"
              title="NUScope"
              category="Medical Device Platform"
              description="Reverse-engineered otoscope hardware communication protocol with real-time UDP video streaming, packet sequencing, jitter buffering, and Wi-Fi Station-mode concurrent cloud routing."
              metrics={[
                { value: "~99%", label: "Frame Delivery" },
                { value: "0 ms", label: "Cloud Interrupt" },
              ]}
              tags={["UDP Streaming", "Jitter Buffering", "Reverse Engineering", "Wi-Fi Station"]}
              href="/projects/nuscope"
            />

            <ProjectCard
              id="tinnix"
              systemCode="SYS-04 // AUDIO PROCESSING"
              title="Tinni-X"
              category="Tinnitus Assessment"
              description="Personalized tinnitus testing algorithm establishing user baseline frequencies with Adaptive Tinnitus Notch Filtering (ATNF) and custom soundscape synthesis scheduling."
              metrics={[
                { value: "50+", label: "Assessment Tests" },
                { value: "~55%", label: "Setup Reduction" },
              ]}
              tags={["Audio Processing", "ATNF Filtering", "Sound Synthesis", "Scheduling"]}
              href="/projects/tinnix"
            />
          </div>
        </Container>
      </section>

      {/* 02. RELEASED APPLICATIONS */}
      <section id="apps" className="scroll-mt-24">
        <Container size="wide">
          <SectionHeading
            systemCode="// 02. INDEPENDENT APPLICATIONS"
            title="Publicly Released Apps"
            subtitle="Independently designed, engineered, and published Android applications active on Google Play and open-source repositories."
            badge={
              <TechnicalLabel variant="neutral" size="sm">
                Google Play Verified
              </TechnicalLabel>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AppCard
              id="styledrobe"
              name="Styledrobe"
              tagline="Offline AI Wardrobe Assistant"
              description="On-device garment classification and outfit recommendation using TensorFlow Lite. 100% private local inference with Clean Architecture and Jetpack Compose."
              platform="Google Play"
              playStoreUrl="https://play.google.com/store/apps/details?id=com.aquacore.stylo"
              internalSlug="styledrobe"
              tags={["TensorFlow Lite", "Jetpack Compose", "Hilt", "Room"]}
              status="live"
            />

            <AppCard
              id="zbukk"
              name="Zbukk"
              tagline="AI-Powered Accessibility Platform"
              description="Hands-free Android navigation converting real-time eye-blink detection via CameraX & ML Kit into system scrolling gestures through Android Accessibility Service."
              platform="Google Play"
              playStoreUrl="https://play.google.com/store/apps/details?id=com.sahil.eyeblikscroll"
              githubUrl="https://github.com/sahilpatel2521/Zbukk"
              internalSlug="zbukk"
              tags={["CameraX", "ML Kit", "Accessibility Service", "Kotlin"]}
              status="live"
            />

            <AppCard
              id="reachme"
              name="ReachMe"
              tagline="Privacy QR Vehicle Communication"
              description="Dynamic QR-based anonymous vehicle contact platform with real-time text, voice, push alerts, and low-latency one-way audio via Firebase and Socket.IO."
              platform="Multiplatform"
              internalSlug="reachme"
              tags={["Jetpack Compose", "Node.js", "Socket.IO", "Firebase"]}
              status="open-source"
            />
          </div>
        </Container>
      </section>

      {/* 03. OPEN SOURCE CONTRIBUTIONS */}
      <section id="open-source" className="scroll-mt-24">
        <Container size="wide">
          <SectionHeading
            systemCode="// 03. OPEN SOURCE & TOOLING"
            title="Verified Open-Source Contributions"
            subtitle="Direct contributions to upstream developer tools and open-source Android platforms."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bg-elevated border border-border-subtle p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <TechnicalLabel variant="success" size="xs" indicator>
                    PR #9450 // MERGED
                  </TechnicalLabel>
                  <span className="font-mono text-xs text-silver-dark">detekt</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-primary">
                  fix: false positive on private extension functions
                </h4>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Resolved private-extension false-positive detection issues in detekt static analysis,
                  improving analysis accuracy for production Kotlin codebases.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-border-subtle">
                <TextLink
                  href="https://github.com/detekt/detekt/pull/9450"
                  external
                  variant="silver"
                  showArrow
                >
                  Inspect Upstream PR
                </TextLink>
              </div>
            </div>

            <div className="bg-bg-elevated border border-border-subtle p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <TechnicalLabel variant="success" size="xs" indicator>
                    PR #9453 // MERGED
                  </TechnicalLabel>
                  <span className="font-mono text-xs text-silver-dark">detekt</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-primary">
                  Target JVM 17 in detekt-rules-ktlint-wrapper
                </h4>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Enhanced JVM 17 compatibility by contributing ktlint wrapper support, addressing
                  tooling integration requirements for modern Kotlin toolchains.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-border-subtle">
                <TextLink
                  href="https://github.com/detekt/detekt/pull/9453"
                  external
                  variant="silver"
                  showArrow
                >
                  Inspect Upstream PR
                </TextLink>
              </div>
            </div>

            <div className="bg-bg-elevated border border-border-subtle p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <TechnicalLabel variant="neutral" size="xs" indicator>
                    PR #8844 // UNDER REVIEW
                  </TechnicalLabel>
                  <span className="font-mono text-xs text-silver-dark">DuckDuckGo Android</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-primary">
                  Add configurable download location via Storage Access Framework
                </h4>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Improved download-location handling through Android Storage Access Framework,
                  strengthening file-access reliability across diverse storage providers.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-border-subtle">
                <TextLink
                  href="https://github.com/duckduckgo/Android/pull/8844"
                  external
                  variant="signal"
                  showArrow
                >
                  Inspect Upstream PR
                </TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 04. DESIGN SYSTEM TOKENS & ATOMIC FOUNDATION */}
      <section className="scroll-mt-24">
        <Container size="wide">
          <div className="bg-bg-elevated border border-border-subtle p-8 sm:p-10">
            <SectionHeading
              systemCode="// 04. DESIGN SYSTEM TOKENS"
              title="Centralized Token Architecture"
              subtitle="All typography, spacing, surface elevations, and accessible contrast thresholds adhere strictly to the SIGNAL / SYSTEM specification."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-xs mb-8">
              <div className="p-3 bg-bg-deep border border-border-subtle space-y-2">
                <div className="h-6 w-full bg-[#171717] border border-border-subtle" />
                <div className="text-primary font-bold">DEEP BG</div>
                <div className="text-silver-dark text-[10px]">#171717 (60%)</div>
              </div>

              <div className="p-3 bg-bg-deep border border-border-subtle space-y-2">
                <div className="h-6 w-full bg-[#202020] border border-border-subtle" />
                <div className="text-primary font-bold">ELEVATED</div>
                <div className="text-silver-dark text-[10px]">#202020 (25%)</div>
              </div>

              <div className="p-3 bg-bg-deep border border-border-subtle space-y-2">
                <div className="h-6 w-full bg-[#2a2a2a] border border-border-subtle" />
                <div className="text-primary font-bold">CHARCOAL</div>
                <div className="text-silver-dark text-[10px]">#2a2a2a (Border)</div>
              </div>

              <div className="p-3 bg-bg-deep border border-border-subtle space-y-2">
                <div className="h-6 w-full bg-[#c0c0c0]" />
                <div className="text-primary font-bold">SILVER</div>
                <div className="text-silver-dark text-[10px]">#c0c0c0 (Tech)</div>
              </div>

              <div className="p-3 bg-bg-deep border border-border-subtle space-y-2">
                <div className="h-6 w-full bg-[#f4f4f4]" />
                <div className="text-primary font-bold">PRIMARY</div>
                <div className="text-silver-dark text-[10px]">#f4f4f4 (Text)</div>
              </div>

              <div className="p-3 bg-bg-deep border border-border-subtle space-y-2">
                <div className="h-6 w-full bg-[#e10600]" />
                <div className="text-signal-red font-bold">SIGNAL RED</div>
                <div className="text-silver-dark text-[10px]">#e10600 (3-5%)</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border-subtle font-mono text-xs text-silver-dark">
              <span className="flex items-center gap-1.5 text-silver">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                WCAG AA Accessible Contrast
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-silver">
                <Layers className="h-4 w-4 text-silver" />
                Zero Red Flood Constraint Enforced
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-silver">
                <Terminal className="h-4 w-4 text-silver" />
                Geist/Space Grotesk + JetBrains Mono Typography
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. CONTACT HUD */}
      <section id="contact" className="scroll-mt-24">
        <Container size="wide">
          <div className="bg-bg-elevated border border-border-subtle p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none font-mono text-8xl font-bold select-none">
              SIGNAL
            </div>

            <div className="max-w-3xl space-y-6">
              <SectionHeading
                systemCode="// 05. DIRECT COORDINATES"
                title="Initiate Communication"
                subtitle="Available for Senior Android Engineer roles, technical leadership, Bluetooth/BLE system architecture, and low-level platform consulting."
              />

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <PrimaryButton
                  href="mailto:heysahilpatel@gmail.com"
                  variant="signal"
                  size="lg"
                  signalDot
                >
                  heysahilpatel@gmail.com
                </PrimaryButton>

                <PrimaryButton
                  href="https://www.linkedin.com/in/sahil-patel-b0aa83194"
                  external
                  variant="primary"
                  size="lg"
                >
                  Connect on LinkedIn
                </PrimaryButton>

                <PrimaryButton
                  href="https://github.com/sahilpatel2521"
                  external
                  variant="outline"
                  size="lg"
                >
                  GitHub @sahilpatel2521
                </PrimaryButton>
              </div>

              <div className="pt-6 border-t border-border-subtle font-mono text-xs text-silver-dark flex flex-wrap gap-y-2 gap-x-6">
                <span>PHONE: +91 63552 38623</span>
                <span>•</span>
                <span>RESIDENCE: AHMEDABAD, GUJARAT, INDIA</span>
                <span>•</span>
                <span>NOTICE: READY FOR DISPATCH</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
