"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Smartphone, FileText } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.35,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const HeroHeadline: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headlineLines = [
    "Software that connects",
    "mobile platforms to",
    "the physical world.",
  ];

  return (
    <div className="space-y-6 sm:space-y-7 max-w-3xl">
      {/* Small Technical Category Pill */}
      <motion.div
        custom={0}
        initial={mounted && !shouldReduceMotion ? "hidden" : "visible"}
        animate="visible"
        variants={lineVariants}
        className="flex items-center gap-2"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-silver">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-red" aria-hidden="true" />
          Android · Connected Devices · Audio &amp; DSP · AI
        </span>
      </motion.div>

      {/* Main Headline (Real HTML H1 with Clean Typography) */}
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.08]">
        {headlineLines.map((line, index) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              custom={index + 1}
              initial={mounted && !shouldReduceMotion ? "hidden" : "visible"}
              animate="visible"
              variants={lineVariants}
              className={`block ${
                index === 2 ? "text-silver" : ""
              }`}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* Supporting Text */}
      <motion.p
        initial={mounted && !shouldReduceMotion ? "hidden" : "visible"}
        animate="visible"
        variants={fadeUpVariants}
        className="font-body text-base sm:text-lg text-silver-dark font-normal max-w-2xl leading-relaxed"
      >
        I am a Senior Android Engineer building reliable mobile software that interfaces with smart hearing aids, Bluetooth peripherals, real-time audio streams, and on-device intelligent systems.
      </motion.p>

      {/* Focus Summary */}
      <motion.p
        initial={mounted && !shouldReduceMotion ? "hidden" : "visible"}
        animate="visible"
        variants={fadeUpVariants}
        className="font-body text-xs sm:text-sm text-muted max-w-xl leading-relaxed"
      >
        Specializing in BLE GATT peripheral orchestration, sliding-window jitter buffers for low-latency streaming, and lifecycle-resilient Jetpack Compose architecture.
      </motion.p>

      {/* Primary & Secondary Call to Actions + Resume Access */}
      <motion.div
        initial={mounted && !shouldReduceMotion ? "hidden" : "visible"}
        animate="visible"
        variants={fadeUpVariants}
        className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
      >
        <PrimaryButton
          href="#systems"
          variant="signal"
          size="lg"
          signalDot
          className="w-full sm:w-auto"
          icon={<ArrowRight className="h-4 w-4" />}
        >
          Explore Projects
        </PrimaryButton>

        <PrimaryButton
          href="#apps"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          icon={<Smartphone className="h-4 w-4 text-silver" />}
        >
          View Released Apps
        </PrimaryButton>

        <PrimaryButton
          href="/assets/Sahil_Patel_Senior_Android_Engineer_Resume.pdf"
          external
          variant="outline"
          size="lg"
          className="w-full sm:w-auto"
          icon={<FileText className="h-4 w-4 text-silver" />}
        >
          Resume (PDF)
        </PrimaryButton>
      </motion.div>
    </div>
  );
};
