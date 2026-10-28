"use client";

import React, { useEffect, useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { impactMetrics, ImpactMetric } from "@/data/impactMetrics";
import { useReducedMotion } from "framer-motion";
import { ShieldAlert, Cpu } from "lucide-react";

interface CounterProps {
  metric: ImpactMetric;
}

const MetricCounter: React.FC<CounterProps> = ({ metric }) => {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(metric.numericTarget);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          let start = 0;
          const end = metric.numericTarget;
          const duration = 1200; // ms
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(start + (end - start) * easeProgress);
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [metric.numericTarget, shouldReduceMotion, hasAnimated]);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col justify-between bg-bg-elevated border border-border-subtle hover:border-silver/40 transition-all p-6 sm:p-7 shadow-elevation"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-[10px] uppercase text-silver-dark tracking-widest flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-signal-red" />
            {metric.system}
          </span>
          <TechnicalLabel variant="neutral" size="xs">
            BENCHMARK
          </TechnicalLabel>
        </div>

        {/* Large Metric Value with Restrained Count-Up */}
        <div className="font-display text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
          <span className="text-silver-dark font-light">{metric.prefix}</span>
          <span>{shouldReduceMotion ? metric.numericTarget : count}</span>
          <span className="text-signal-red">{metric.suffix}</span>
        </div>

        <h3 className="mt-3 font-display text-base sm:text-lg font-semibold text-silver group-hover:text-primary transition-colors">
          {metric.title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-muted font-body leading-relaxed">
          {metric.qualification}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-border-subtle font-mono text-[10px] text-silver-dark leading-normal">
        <span className="text-silver-muted font-semibold">METHODOLOGY: </span>
        <span>{metric.methodology}</span>
      </div>
    </div>
  );
};

export const EngineeringImpact: React.FC = () => {
  return (
    <section id="impact" className="scroll-mt-24">
      <Container size="wide">
        <SectionHeading
          systemCode="// 01. QUANTIFIABLE RESULTS"
          title="Engineering Impact"
          subtitle="Empirical performance benchmarks and architectural gains from production deployments, preserving original measurement constraints."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              4 Verified Benchmarks
            </TechnicalLabel>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric) => (
            <MetricCounter key={metric.id} metric={metric} />
          ))}
        </div>

        <div className="mt-6 p-4 bg-charcoal/40 border border-border-subtle flex items-start gap-3 text-xs text-silver-dark font-mono">
          <ShieldAlert className="h-4 w-4 text-signal-red shrink-0 mt-0.5" />
          <p>
            DATA INTEGRITY NOTICE: Metrics reflect scenario-specific benchmarks (Macrobenchmark traces,
            GATT write throughput, and network round-trip evaluations) and do not imply uniform methodology across different platforms.
          </p>
        </div>
      </Container>
    </section>
  );
};
