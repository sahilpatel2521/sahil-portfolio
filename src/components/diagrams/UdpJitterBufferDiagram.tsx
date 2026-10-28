"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface DiagramProps {
  className?: string;
}

export const UdpJitterBufferDiagram: React.FC<DiagramProps> = ({ className }) => {
  return (
    <div className={cn("w-full bg-bg-deep border border-border-subtle p-4 sm:p-6 overflow-x-auto", className)}>
      <svg
        viewBox="0 0 900 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[700px] h-auto font-mono text-[11px] select-none"
        aria-label="UDP Video Streaming and Adaptive Jitter Buffer Architecture"
      >
        <title>UDP Video Streaming and Adaptive Jitter Buffer Architecture</title>
        <desc>
          Shows raw UDP packet ingestion over Wi-Fi Station mode, sliding-window jitter buffer with adaptive frame dropping, and concurrent cloud routing.
        </desc>

        <defs>
          <pattern id="udp-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(42, 42, 42, 0.4)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="900" height="360" fill="url(#udp-grid)" />

        {/* SECTION 1: HARDWARE OTOSCOPE */}
        <g transform="translate(30, 40)">
          <rect width="180" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="180" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="90" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            01. OTOSCOPE HARDWARE
          </text>

          <rect x="15" y="52" width="150" height="50" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="72" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            CMOS Sensor
          </text>
          <text x="90" y="88" fill="#666666" textAnchor="middle" fontSize="9">
            1080p @ 30 FPS Video
          </text>

          <rect x="15" y="116" width="150" height="50" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="136" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            UDP Packetizer
          </text>
          <text x="90" y="152" fill="#666666" textAnchor="middle" fontSize="9">
            Seq # + Payload Split
          </text>

          <rect x="15" y="180" width="150" height="50" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="200" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Wi-Fi AP (2.4 GHz)
          </text>
          <text x="90" y="216" fill="#e10600" textAnchor="middle" fontSize="9">
            NO INTERNET ACCESS
          </text>

          <text x="90" y="270" fill="#666666" textAnchor="middle" fontSize="9">
            RAW_DATAGRAMS
          </text>
        </g>

        {/* CONNECTION 1 */}
        <path d="M 210 180 L 260 180" className="animate-data-flow" stroke="#c0c0c0" strokeWidth="1.5" />
        <circle cx="260" cy="180" r="3.5" fill="#e10600" className="animate-pulse" />

        {/* SECTION 2: ANDROID UDP INGESTION & JITTER BUFFER */}
        <g transform="translate(270, 40)">
          <rect width="360" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="360" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="180" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            02. UDP INGESTION &amp; NETWORK BINDING
          </text>

          {/* Wi-Fi Station Mode Router */}
          <rect x="20" y="52" width="320" height="46" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="180" y="70" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
            Wi-Fi Station Mode + Multi-Interface Routing
          </text>
          <text x="180" y="86" fill="#22c55e" textAnchor="middle" fontSize="9">
            Socket bound to local Wi-Fi • Cloud APIs routed to Cellular
          </text>

          {/* Jitter Buffer & Packet Reordering */}
          <g transform="translate(20, 110)">
            <rect width="150" height="96" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="75" y="20" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              PACKET REORDERING
            </text>
            <text x="75" y="42" fill="#666666" textAnchor="middle" fontSize="8">
              Sliding Window: 1..64
            </text>
            <text x="75" y="60" fill="#e10600" textAnchor="middle" fontSize="8">
              DETECT PACKET LOSS
            </text>
            <text x="75" y="78" fill="#22c55e" textAnchor="middle" fontSize="8">
              ~99% Smooth Delivery
            </text>
          </g>

          <g transform="translate(190, 110)">
            <rect width="150" height="96" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="75" y="20" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              JITTER BUFFER
            </text>
            <text x="75" y="42" fill="#666666" textAnchor="middle" fontSize="8">
              Dynamic 30-50ms Depth
            </text>
            <text x="75" y="60" fill="#f4f4f4" textAnchor="middle" fontSize="8">
              Adaptive Frame Dropping
            </text>
            <text x="75" y="78" fill="#9e9e9e" textAnchor="middle" fontSize="8">
              Zero Playback Drift
            </text>
          </g>

          {/* Offline Persistence */}
          <rect x="20" y="218" width="320" height="46" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="180" y="238" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Offline-First Encrypted Media Persistence (Room + Disk)
          </text>
          <text x="180" y="252" fill="#22c55e" textAnchor="middle" fontSize="9">
            Automatic cloud sync when full internet is restored
          </text>
        </g>

        {/* CONNECTION 2 */}
        <path d="M 630 180 L 680 180" className="animate-data-flow" stroke="#c0c0c0" strokeWidth="1.5" />
        <circle cx="680" cy="180" r="3.5" fill="#e10600" className="animate-pulse" />

        {/* SECTION 3: VIDEO RENDERING SURFACE */}
        <g transform="translate(700, 40)">
          <rect width="170" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="170" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="85" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            03. CLINICAL DISPLAY
          </text>

          <g transform="translate(15, 60)">
            <rect width="140" height="75" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="70" y="22" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              SURFACEVIEW
            </text>
            <text x="70" y="42" fill="#22c55e" textAnchor="middle" fontSize="9">
              Hardware Decoder
            </text>
            <text x="70" y="60" fill="#666666" textAnchor="middle" fontSize="8">
              H.264 / MJPEG Direct
            </text>
          </g>

          <g transform="translate(15, 155)">
            <rect width="140" height="75" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="70" y="22" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              EHR CLOUD SYNC
            </text>
            <text x="70" y="42" fill="#22c55e" textAnchor="middle" fontSize="9">
              Cellular Routing
            </text>
            <text x="70" y="60" fill="#666666" textAnchor="middle" fontSize="8">
              0 ms Stream Stutter
            </text>
          </g>

          <text x="85" y="260" fill="#e10600" textAnchor="middle" fontSize="9" fontWeight="bold">
            ACTIVE EXAMINATION
          </text>
        </g>
      </svg>
    </div>
  );
};
