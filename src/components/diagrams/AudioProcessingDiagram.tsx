"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface DiagramProps {
  className?: string;
}

export const AudioProcessingDiagram: React.FC<DiagramProps> = ({ className }) => {
  return (
    <div className={cn("w-full bg-bg-deep border border-border-subtle p-4 sm:p-6 overflow-x-auto", className)}>
      <svg
        viewBox="0 0 900 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[700px] h-auto font-mono text-[11px] select-none"
        aria-label="Tinnitus Assessment and Adaptive Notch Filtering Architecture"
      >
        <title>Tinnitus Assessment and Adaptive Notch Filtering Architecture</title>
        <desc>
          Shows frequency assessment testing establishing patient baseline, parametric audio synthesis, and real-time Adaptive Tinnitus Notch Filtering (ATNF).
        </desc>

        <defs>
          <pattern id="audio-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(42, 42, 42, 0.4)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="900" height="360" fill="url(#audio-grid)" />

        {/* SECTION 1: ASSESSMENT TESTING ENGINE */}
        <g transform="translate(30, 40)">
          <rect width="180" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="180" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="90" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            01. ASSESSMENT CORE
          </text>

          <rect x="15" y="52" width="150" height="50" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="72" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Staircase Algorithm
          </text>
          <text x="90" y="88" fill="#666666" textAnchor="middle" fontSize="9">
            Adaptive Tone Stepping
          </text>

          <rect x="15" y="116" width="150" height="50" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="136" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Pitch / Loudness Match
          </text>
          <text x="90" y="152" fill="#666666" textAnchor="middle" fontSize="9">
            50+ Clinical Evaluations
          </text>

          <rect x="15" y="180" width="150" height="50" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="200" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Baseline Register
          </text>
          <text x="90" y="216" fill="#e10600" textAnchor="middle" fontSize="9">
            Target Freq: 4.2 kHz
          </text>

          <text x="90" y="270" fill="#666666" textAnchor="middle" fontSize="9">
            CALIBRATED_PATIENT
          </text>
        </g>

        {/* CONNECTION 1 */}
        <path d="M 210 180 L 260 180" className="animate-data-flow" stroke="#c0c0c0" strokeWidth="1.5" />
        <circle cx="260" cy="180" r="3.5" fill="#e10600" />

        {/* SECTION 2: AUDIO SYNTHESIS & ATNF NOTCH FILTER */}
        <g transform="translate(270, 40)">
          <rect width="360" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="360" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="180" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            02. SYNTHESIS &amp; ATNF NOTCH FILTERING
          </text>

          {/* Soundscape Synthesizer */}
          <rect x="20" y="52" width="320" height="46" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="180" y="70" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
            Parametric Soundscape Synthesizer
          </text>
          <text x="180" y="86" fill="#9e9e9e" textAnchor="middle" fontSize="9">
            Curated ambient tracks + customizable acoustic layers
          </text>

          {/* Notch Filter & Graph */}
          <g transform="translate(20, 110)">
            <rect width="320" height="96" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="160" y="20" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              ADAPTIVE TINNITUS NOTCH FILTER (ATNF)
            </text>

            {/* Filter Frequency Response Curve representation */}
            <path
              d="M 30 70 L 120 70 Q 140 70 150 86 Q 160 102 170 86 Q 180 70 200 70 L 290 70"
              stroke="#c0c0c0"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Red Notch marker */}
            <line x1="160" y1="35" x2="160" y2="88" stroke="#e10600" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="160" cy="88" r="3" fill="#e10600" />
            <text x="160" y="32" fill="#e10600" textAnchor="middle" fontSize="8" fontWeight="bold">
              NOTCH ATTENUATION (-24 dB @ 4.2 kHz)
            </text>

            <text x="40" y="86" fill="#666666" fontSize="8">
              Low Freq Pass
            </text>
            <text x="235" y="86" fill="#666666" fontSize="8">
              High Freq Pass
            </text>
          </g>

          {/* Automated Scheduling Engine */}
          <rect x="20" y="218" width="320" height="46" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="180" y="238" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Baseline-Driven Therapy Scheduling Engine
          </text>
          <text x="180" y="252" fill="#22c55e" textAnchor="middle" fontSize="9">
            Automated session duration &amp; curve (~55% manual setup reduction)
          </text>
        </g>

        {/* CONNECTION 2 */}
        <path d="M 630 180 L 680 180" className="animate-data-flow" stroke="#c0c0c0" strokeWidth="1.5" />
        <circle cx="680" cy="180" r="3.5" fill="#e10600" />

        {/* SECTION 3: ACOUSTIC OUTPUT & SAFETY */}
        <g transform="translate(700, 40)">
          <rect width="170" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="170" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="85" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            03. ACOUSTIC DELIVERY
          </text>

          <g transform="translate(15, 60)">
            <rect width="140" height="75" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="70" y="22" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              AUDIOTRACK DSP
            </text>
            <text x="70" y="42" fill="#22c55e" textAnchor="middle" fontSize="9">
              0 dB Distortion
            </text>
            <text x="70" y="60" fill="#666666" textAnchor="middle" fontSize="8">
              Dynamic Peak Limiter
            </text>
          </g>

          <g transform="translate(15, 155)">
            <rect width="140" height="75" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="70" y="22" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              WEARABLE OUTPUT
            </text>
            <text x="70" y="42" fill="#e10600" textAnchor="middle" fontSize="9">
              Bone Conduction
            </text>
            <text x="70" y="60" fill="#666666" textAnchor="middle" fontSize="8">
              Calibrated Transducer
            </text>
          </g>

          <text x="85" y="260" fill="#22c55e" textAnchor="middle" fontSize="9" fontWeight="bold">
            SAFE THERAPY PLAYBACK
          </text>
        </g>
      </svg>
    </div>
  );
};
