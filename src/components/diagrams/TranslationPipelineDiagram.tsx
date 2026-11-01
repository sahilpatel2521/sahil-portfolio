"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface DiagramProps {
  className?: string;
}

export const TranslationPipelineDiagram: React.FC<DiagramProps> = ({ className }) => {
  return (
    <div className={cn("w-full bg-bg-deep border border-border-subtle p-4 sm:p-6 overflow-x-auto", className)}>
      <svg
        viewBox="0 0 900 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[700px] h-auto font-mono text-[11px] select-none"
        aria-label="Real-Time Translation Pipeline and Ordered Response Dispatch"
      >
        <title>Real-Time Translation Pipeline and Ordered Response Dispatch</title>
        <desc>
          Coordinated translation flow illustrating speech segmentation, cooperative coroutine cancellation, monotonic sequence ordering, and incremental rendering.
        </desc>

        <defs>
          <pattern id="trans-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(42, 42, 42, 0.4)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="900" height="360" fill="url(#trans-grid)" />

        {/* STEP 1: AUDIO INGESTION & SEGMENTATION */}
        <g transform="translate(30, 40)">
          <rect width="180" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="180" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="90" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            01. SPEECH INGESTION
          </text>

          <rect x="15" y="52" width="150" height="48" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="72" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Microphone / BLE Mic
          </text>
          <text x="90" y="88" fill="#666666" textAnchor="middle" fontSize="9">
            16 kHz PCM Stream
          </text>

          <rect x="15" y="112" width="150" height="52" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="132" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            VAD Segmentation
          </text>
          <text x="90" y="148" fill="#666666" textAnchor="middle" fontSize="9">
            Voice Activity Detect
          </text>

          <rect x="15" y="176" width="150" height="48" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="196" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Seq ID Generator
          </text>
          <text x="90" y="212" fill="#e10600" textAnchor="middle" fontSize="9">
            Monotonic: #001, #002...
          </text>

          <text x="90" y="270" fill="#666666" textAnchor="middle" fontSize="9">
            STREAMING_BUFFER
          </text>
        </g>

        {/* CONNECTION 1 */}
        <path d="M 210 180 L 260 180" className="animate-data-flow" stroke="#c0c0c0" strokeWidth="1.5" />
        <circle cx="260" cy="180" r="3.5" fill="#e10600" />

        {/* STEP 2: TRANSLATION COORDINATOR CORE */}
        <g transform="translate(270, 40)">
          <rect width="360" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="360" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="180" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            02. TRANSLATION COORDINATOR
          </text>

          {/* Cancellation & Debounce Block */}
          <rect x="20" y="52" width="320" height="50" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="180" y="74" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
            Coroutine Cancellation &amp; Debounce Engine
          </text>
          <text x="180" y="90" fill="#e10600" textAnchor="middle" fontSize="9">
            Job.cancel() on speech invalidation (~60% faster turnaround)
          </text>

          {/* Cache & Sequence Reordering */}
          <g transform="translate(20, 114)">
            <rect width="150" height="96" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="75" y="20" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              CACHE LOOKUP
            </text>
            <text x="75" y="42" fill="#666666" textAnchor="middle" fontSize="8">
              Room Segment Cache
            </text>
            <text x="75" y="60" fill="#22c55e" textAnchor="middle" fontSize="8">
              HIT: Instant Render
            </text>
            <text x="75" y="78" fill="#9e9e9e" textAnchor="middle" fontSize="8">
              MISS: Cloud Dispatch
            </text>
          </g>

          <g transform="translate(190, 114)">
            <rect width="150" height="96" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="75" y="20" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              SEQUENCE BUFFER
            </text>
            <text x="75" y="42" fill="#666666" textAnchor="middle" fontSize="8">
              PriorityQueue [SeqID]
            </text>
            <text x="75" y="60" fill="#f4f4f4" textAnchor="middle" fontSize="8">
              Guaranteed In-Order
            </text>
            <text x="75" y="78" fill="#e10600" textAnchor="middle" fontSize="8">
              Prevents Audio Race
            </text>
          </g>

          {/* PairHub Integration Note */}
          <rect x="20" y="222" width="320" height="42" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="180" y="240" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            PairHub™ Routing: 4 Paired Devices Active
          </text>
          <text x="180" y="254" fill="#22c55e" textAnchor="middle" fontSize="9">
            Switch Latency: ~55% Faster // Zero Re-pairing
          </text>
        </g>

        {/* CONNECTION 2 */}
        <path d="M 630 180 L 680 180" className="animate-data-flow" stroke="#c0c0c0" strokeWidth="1.5" />
        <circle cx="680" cy="180" r="3.5" fill="#e10600" />

        {/* STEP 3: INCREMENTAL RENDERING & AUDIO DSP */}
        <g transform="translate(700, 40)">
          <rect width="170" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="170" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="85" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            03. OUTPUT STAGE
          </text>

          <g transform="translate(15, 52)">
            <rect width="140" height="60" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="70" y="22" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              COMPOSE UI
            </text>
            <text x="70" y="40" fill="#22c55e" textAnchor="middle" fontSize="9">
              Partial Text Words
            </text>
            <text x="70" y="52" fill="#666666" textAnchor="middle" fontSize="8">
              60 FPS Recomposition
            </text>
          </g>

          <g transform="translate(15, 126)">
            <rect width="140" height="60" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="70" y="22" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              TTS / AUDIO DSP
            </text>
            <text x="70" y="40" fill="#f4f4f4" textAnchor="middle" fontSize="9">
              Translated Audio
            </text>
            <text x="70" y="52" fill="#666666" textAnchor="middle" fontSize="8">
              Acoustic Equalization
            </text>
          </g>

          <g transform="translate(15, 200)">
            <rect width="140" height="60" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="70" y="22" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              BLE WEARABLE
            </text>
            <text x="70" y="40" fill="#e10600" textAnchor="middle" fontSize="9">
              WeHear Headset
            </text>
            <text x="70" y="52" fill="#22c55e" textAnchor="middle" fontSize="8">
              SYNCHRONIZED
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
