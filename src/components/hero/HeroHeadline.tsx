"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Smartphone, FileText } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.45,
      duration: 0.5,
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
    "SOFTWARE THAT",
    "CONNECTS TO THE",
    "REAL WORLD.",
  ];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-3xl">
      {/* Small Technical Label */}
      <motion.div
        custom={0}
        initial={mounted && !shouldReduceMotion ? "hidden" : "visible"}
        animate="visible"
        variants={lineVariants}
        className="flex items-center gap-2"
      >
        <TechnicalLabel variant="neutral" size="sm" indicator pulse>
          ANDROID / CONNECTED SYSTEMS / AUDIO / AI
        </TechnicalLabel>
      </motion.div>

      {/* Main Headline (Real HTML H1 with Staggered Lines) */}
      <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-[1.04]">
        {headlineLines.map((line, index) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              custom={index + 1}
              initial={mounted && !shouldReduceMotion ? "hidden" : "visible"}
              animate="visible"
              variants={lineVariants}
              className={`block ${
                index === 2 ? "text-silver group-hover:text-white transition-colors" : ""
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
        className="font-body text-base sm:text-xl text-silver-dark font-light max-w-2xl leading-relaxed"
      >
        I build Android experiences across connected devices, real-time systems, audio, and on-device AI.
      </motion.p>

      {/* Secondary Bio Note */}
      <motion.p
        initial={mounted && !shouldReduceMotion ? "hidden" : "visible"}
        animate="visible"
        variants={fadeUpVariants}
        className="font-body text-xs sm:text-sm text-muted max-w-xl leading-relaxed"
      >
        Senior Android Engineer at WeHear Innovations. Modernized 3 codebase generations to Jetpack Compose,
        co-designed firmware protocols in China, and invented PairHub™ for multi-device switching.
      </motion.p>

      {/* Primary & Secondary Call to Actions + Resume Access */}
      <motion.div
        initial={mounted && !shouldReduceMotion ? "hidden" : "visible"}
        animate="visible"
        variants={fadeUpVariants}
        className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
      >
        {/* Primary CTA */}
        <PrimaryButton
          href="#systems"
          variant="signal"
          size="lg"
          signalDot
          icon={<ArrowRight className="h-4 w-4" />}
        >
          Explore projects
        </PrimaryButton>

        {/* Secondary CTA */}
        <PrimaryButton
          href="#apps"
          variant="primary"
          size="lg"
          icon={<Smartphone className="h-4 w-4 text-silver" />}
        >
          View released apps
        </PrimaryButton>

        {/* Clear Resume Access */}
        <PrimaryButton
          href="/assets/Sahil_Patel_Senior_Android_Engineer_Resume.pdf"
          external
          variant="outline"
          size="lg"
          icon={<FileText className="h-4 w-4 text-silver" />}
        >
          Resume (PDF)
        </PrimaryButton>
      </motion.div>
    </div>
  );
};
