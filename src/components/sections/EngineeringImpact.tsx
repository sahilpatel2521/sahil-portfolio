"use client";

import React, { useEffect, useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { impactMetrics, ImpactMetric } from "@/data/impactMetrics";
import { useReducedMotion } from "framer-motion";
import { Info } from "lucide-react";

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
          const duration = 1000;
          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
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
      className="group relative flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.2] transition-all p-6 sm:p-7 shadow-elevation"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-xs text-silver-dark flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-red" />
            {metric.system}
          </span>
          <TechnicalLabel variant="neutral" size="xs">
            Metric
          </TechnicalLabel>
        </div>

        {/* Large Metric Value with Restrained Count-Up */}
        <div className="font-display text-4xl sm:text-5xl font-bold text-primary tracking-tight">
          <span className="text-silver-dark font-light">{metric.prefix}</span>
          <span>{shouldReduceMotion ? metric.numericTarget : count}</span>
          <span className="text-signal-red">{metric.suffix}</span>
        </div>

        <h3 className="mt-3 font-display text-base sm:text-lg font-semibold text-silver group-hover:text-primary transition-colors">
          {metric.title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-silver-dark font-body leading-relaxed">
          {metric.qualification}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-[11px] text-silver-dark leading-normal">
        <span className="text-silver-muted font-semibold">Measurement: </span>
        <span>{metric.methodology}</span>
      </div>
    </div>
  );
};

export const EngineeringImpact: React.FC = () => {
  return (
    <section id="impact" className="scroll-mt-24 sm:scroll-mt-28">
      <Container size="wide">
        <SectionHeading
          systemCode="01 · Quantifiable Results"
          title="Engineering Impact"
          subtitle="Empirical performance benchmarks and architectural gains from production deployments, preserving original measurement constraints."
          badge={
            <TechnicalLabel variant="neutral" size="sm" indicator>
              4 Key Results
            </TechnicalLabel>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric) => (
            <MetricCounter key={metric.id} metric={metric} />
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3 text-xs text-silver-dark font-sans leading-relaxed">
          <Info className="h-4 w-4 text-silver-muted shrink-0 mt-0.5" />
          <p>
            Metrics reflect scenario-specific benchmarks (Macrobenchmark traces, GATT write throughput, and network round-trip evaluations) and do not imply uniform methodology across different platforms.
          </p>
        </div>
      </Container>
    </section>
  );
};
