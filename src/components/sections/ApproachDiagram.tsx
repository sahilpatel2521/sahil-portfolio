"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ApproachDiagramProps {
  activeStage: "understand" | "architect" | "engineer" | "measure";
  onSelectStage: (stage: "understand" | "architect" | "engineer" | "measure") => void;
  className?: string;
}

interface NodeConfig {
  id: "understand" | "architect" | "engineer" | "measure";
  step: string;
  title: string;
  subtitle: string;
  telemetry: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const NODES: NodeConfig[] = [
  {
    id: "understand",
    step: "01",
    title: "INGRESS & SPEC",
    subtitle: "BLE / HW / LIFECYCLE",
    telemetry: "MTU: 512B // CRC: OK",
    x: 20,
    y: 65,
    width: 140,
    height: 125,
  },
  {
    id: "architect",
    step: "02",
    title: "QUEUE & STATE",
    subtitle: "MUTEX / STATEFLOW",
    telemetry: "UDF: DETERMINISTIC",
    x: 185,
    y: 65,
    width: 140,
    height: 125,
  },
  {
    id: "engineer",
    step: "03",
    title: "EXECUTION & UI",
    subtitle: "COROUTINES / COMPOSE",
    telemetry: "SCOPES: SUPERVISOR",
    x: 350,
    y: 65,
    width: 140,
    height: 125,
  },
  {
    id: "measure",
    step: "04",
    title: "BENCHMARK & QA",
    subtitle: "BASELINE / PROFILER",
    telemetry: "STARTUP: -35% // P95",
    x: 515,
    y: 65,
    width: 145,
    height: 125,
  },
];

export const ApproachDiagram: React.FC<ApproachDiagramProps> = ({
  activeStage,
  onSelectStage,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = (
    e: React.KeyboardEvent,
    id: "understand" | "architect" | "engineer" | "measure"
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelectStage(id);
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-[#141418] border border-white/[0.08] p-4 sm:p-6 shadow-spatial relative overflow-hidden",
        className
      )}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] font-mono text-xs text-silver-dark tracking-wide">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full bg-signal-red"
            aria-hidden="true"
          />
          <span className="text-silver font-medium">
            Architecture Pipeline Schematic
          </span>
        </div>
        <span className="hidden sm:inline-block text-[11px] text-silver-muted">
          Click node to inspect stage
        </span>
      </div>

      {/* Responsive SVG Schematic Canvas */}
      <svg
        viewBox="0 0 680 235"
        className="w-full h-auto select-none overflow-visible"
        role="region"
        aria-label="Interactive Deterministic Android Pipeline Schematic"
      >
        <title>Deterministic Android Pipeline Schematic</title>
        <desc>
          A four-stage interactive schematic visualizing Ingress Specification,
          Queue and State Management, Concurrency and UI Execution, and Benchmark Telemetry.
        </desc>

        <defs>
          {/* Subtle grid pattern */}
          <pattern id="diag-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(42, 42, 42, 0.45)"
              strokeWidth="0.8"
            />
          </pattern>

          {/* Marker arrows */}
          <marker
            id="arr-silver"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#c0c0c0" />
          </marker>
          <marker
            id="arr-signal"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#e10600" />
          </marker>
        </defs>

        {/* Background Grid */}
        <rect width="680" height="235" fill="url(#diag-grid)" opacity="0.6" />

        {/* Data Bus Lines Connecting Stages (Forward Flow) */}
        {/* Node 1 -> Node 2 */}
        <line
          x1="160"
          y1="125"
          x2="183"
          y2="125"
          stroke={activeStage === "understand" || activeStage === "architect" ? "#c0c0c0" : "#383838"}
          strokeWidth="2"
          markerEnd="url(#arr-silver)"
          className={!shouldReduceMotion ? "animate-data-flow" : undefined}
        />

        {/* Node 2 -> Node 3 */}
        <line
          x1="325"
          y1="125"
          x2="348"
          y2="125"
          stroke={activeStage === "architect" || activeStage === "engineer" ? "#c0c0c0" : "#383838"}
          strokeWidth="2"
          markerEnd="url(#arr-silver)"
          className={!shouldReduceMotion ? "animate-data-flow" : undefined}
        />

        {/* Node 3 -> Node 4 */}
        <line
          x1="490"
          y1="125"
          x2="513"
          y2="125"
          stroke={activeStage === "engineer" || activeStage === "measure" ? "#c0c0c0" : "#383838"}
          strokeWidth="2"
          markerEnd="url(#arr-silver)"
          className={!shouldReduceMotion ? "animate-data-flow" : undefined}
        />

        {/* Telemetry Feedback Loop (Measure -> Understand) */}
        <path
          d="M 585 190 L 585 215 L 90 215 L 90 192"
          fill="none"
          stroke="#383838"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          markerEnd="url(#arr-silver)"
        />
        <text
          x="340"
          y="228"
          textAnchor="middle"
          fill="#717171"
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="1"
        >
          TELEMETRY FEEDBACK &amp; PROFILE RE-OPTIMIZATION LOOP
        </text>

        {/* Render the 4 Stage Nodes */}
        {NODES.map((node) => {
          const isActive = activeStage === node.id;
          return (
            <g
              key={node.id}
              role="button"
              tabIndex={0}
              aria-label={`Inspect Stage ${node.step}: ${node.title}`}
              aria-pressed={isActive}
              onClick={() => onSelectStage(node.id)}
              onKeyDown={(e) => handleKeyDown(e, node.id)}
              className="cursor-pointer focus:outline-none transition-transform active:scale-[0.98]"
            >
              {/* Outer Card Body */}
              <rect
                x={node.x}
                y={node.y}
                width={node.width}
                height={node.height}
                fill={isActive ? "#252525" : "#1b1b1b"}
                stroke={isActive ? "#f4f4f4" : "#303030"}
                strokeWidth={isActive ? "1.5" : "1"}
                rx="2"
                className="transition-colors duration-200"
              />

              {/* Focus Ring Indicator inside SVG */}
              {isActive && (
                <rect
                  x={node.x - 3}
                  y={node.y - 3}
                  width={node.width + 6}
                  height={node.height + 6}
                  fill="none"
                  stroke="#e10600"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  rx="4"
                  opacity="0.8"
                />
              )}

              {/* Node Header Pill */}
              <rect
                x={node.x}
                y={node.y}
                width={node.width}
                height="24"
                fill={isActive ? "#303030" : "#222222"}
                rx="2"
              />

              {/* Step & Signal Dot */}
              <circle
                cx={node.x + 12}
                cy={node.y + 12}
                r="3"
                fill={isActive ? "#e10600" : "#717171"}
              />
              <text
                x={node.x + 22}
                y={node.y + 16}
                fill={isActive ? "#ffffff" : "#c0c0c0"}
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="1"
              >
                {node.step}
              </text>

              {/* Active Indicator Label on Header */}
              <text
                x={node.x + node.width - 8}
                y={node.y + 16}
                textAnchor="end"
                fill={isActive ? "#e10600" : "#717171"}
                fontSize="8"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="1"
              >
                {isActive ? "ACTIVE" : "STANDBY"}
              </text>

              {/* Node Title */}
              <text
                x={node.x + 10}
                y={node.y + 44}
                fill={isActive ? "#f4f4f4" : "#c0c0c0"}
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.8"
              >
                {node.title}
              </text>

              {/* Subtitle */}
              <text
                x={node.x + 10}
                y={node.y + 60}
                fill="#8e8e8e"
                fontSize="8.5"
                fontFamily="sans-serif"
              >
                {node.subtitle}
              </text>

              {/* Internal Divider */}
              <line
                x1={node.x + 10}
                y1={node.y + 72}
                x2={node.x + node.width - 10}
                y2={node.y + 72}
                stroke="#2a2a2a"
                strokeWidth="1"
              />

              {/* Telemetry readout */}
              <text
                x={node.x + 10}
                y={node.y + 88}
                fill={isActive ? "#c0c0c0" : "#666666"}
                fontSize="8"
                fontFamily="monospace"
                letterSpacing="0.5"
              >
                {node.telemetry}
              </text>

              {/* Corner accent bracket for active node */}
              {isActive && (
                <path
                  d={`M ${node.x + node.width - 8} ${node.y + node.height} L ${
                    node.x + node.width
                  } ${node.y + node.height} L ${node.x + node.width} ${
                    node.y + node.height - 8
                  }`}
                  fill="none"
                  stroke="#e10600"
                  strokeWidth="2"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};
