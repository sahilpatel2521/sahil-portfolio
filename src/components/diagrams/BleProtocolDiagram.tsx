"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface DiagramProps {
  className?: string;
}

export const BleProtocolDiagram: React.FC<DiagramProps> = ({ className }) => {
  return (
    <div className={cn("w-full bg-bg-deep border border-border-subtle p-4 sm:p-6 overflow-x-auto", className)}>
      <svg
        viewBox="0 0 900 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full min-w-[700px] h-auto font-mono text-[11px] select-none"
        aria-label="BLE Dual-Channel Command Orchestration Architecture"
      >
        <title>BLE Dual-Channel Command Orchestration Architecture</title>
        <desc>
          Shows Android application layer sending commands through prioritized Left and Right GATT write queues with mutual exclusion and acknowledgment checks before peripheral hardware execution.
        </desc>

        {/* Background Grid Pattern */}
        <defs>
          <pattern id="ble-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(42, 42, 42, 0.4)" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="signal-pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="50%" stopColor="#e10600" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
        </defs>
        <rect width="900" height="360" fill="url(#ble-grid)" />

        {/* SECTION 1: ANDROID CLIENT APP */}
        <g transform="translate(30, 40)">
          <rect width="180" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="180" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="90" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            ANDROID UI / DOMAIN
          </text>

          {/* Sub-blocks */}
          <rect x="15" y="48" width="150" height="48" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="68" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            UI StateFlow
          </text>
          <text x="90" y="84" fill="#666666" textAnchor="middle" fontSize="9">
            Volume / Modes / EQ
          </text>

          <rect x="15" y="108" width="150" height="52" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="128" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Remote Fitting Assistant
          </text>
          <text x="90" y="144" fill="#666666" textAnchor="middle" fontSize="9">
            Rule-Based Audio Engine
          </text>

          <rect x="15" y="172" width="150" height="52" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="192" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            SavedStateHandle
          </text>
          <text x="90" y="208" fill="#666666" textAnchor="middle" fontSize="9">
            Process Death Recovery
          </text>

          <rect x="15" y="236" width="150" height="32" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="90" y="256" fill="#e10600" textAnchor="middle" fontSize="9" fontWeight="bold">
            DISPATCH_COMMAND
          </text>
        </g>

        {/* CONNECTION ARROW 1 */}
        <path d="M 210 180 L 260 180" stroke="#c0c0c0" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="260" cy="180" r="3" fill="#e10600" />

        {/* SECTION 2: UNIFIED BLE ABSTRACTION LAYER */}
        <g transform="translate(270, 40)">
          <rect width="360" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="360" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="180" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            UNIFIED BLE ABSTRACTION &amp; QUEUE LAYER
          </text>

          {/* Device Family Mapper */}
          <rect x="20" y="48" width="320" height="36" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="180" y="70" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            Hardware Family Mapper (6 Vendor GATT Specifications)
          </text>

          {/* Dual Queues */}
          {/* Left Channel Queue */}
          <g transform="translate(20, 96)">
            <rect width="150" height="110" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="75" y="20" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              LEFT EAR QUEUE
            </text>
            <rect x="10" y="32" width="130" height="18" fill="#202020" stroke="#2a2a2a" />
            <text x="75" y="45" fill="#f4f4f4" textAnchor="middle" fontSize="8">
              CMD_SET_VOLUME [CH_L]
            </text>
            <rect x="10" y="55" width="130" height="18" fill="#202020" stroke="#2a2a2a" />
            <text x="75" y="68" fill="#9e9e9e" textAnchor="middle" fontSize="8">
              CMD_NOISE_REDUCTION
            </text>
            <rect x="10" y="78" width="130" height="18" fill="#252525" stroke="#e10600" strokeWidth="0.75" />
            <text x="75" y="91" fill="#e10600" textAnchor="middle" fontSize="8">
              MUTEX_LOCK: ACTIVE
            </text>
          </g>

          {/* Right Channel Queue */}
          <g transform="translate(190, 96)">
            <rect width="150" height="110" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="75" y="20" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              RIGHT EAR QUEUE
            </text>
            <rect x="10" y="32" width="130" height="18" fill="#202020" stroke="#2a2a2a" />
            <text x="75" y="45" fill="#f4f4f4" textAnchor="middle" fontSize="8">
              CMD_SET_VOLUME [CH_R]
            </text>
            <rect x="10" y="55" width="130" height="18" fill="#202020" stroke="#2a2a2a" />
            <text x="75" y="68" fill="#9e9e9e" textAnchor="middle" fontSize="8">
              CMD_SYNC_PROFILE
            </text>
            <rect x="10" y="78" width="130" height="18" fill="#252525" stroke="#2a2a2a" />
            <text x="75" y="91" fill="#22c55e" textAnchor="middle" fontSize="8">
              MUTEX_LOCK: IDLE
            </text>
          </g>

          {/* Acknowledgment & State Machine */}
          <rect x="20" y="218" width="320" height="48" rx="2" fill="#171717" stroke="#2a2a2a" />
          <text x="180" y="238" fill="#c0c0c0" textAnchor="middle" fontSize="10">
            ACK Verification &amp; State Synchronization Engine
          </text>
          <text x="180" y="254" fill="#22c55e" textAnchor="middle" fontSize="9">
            Status 0 (GATT_SUCCESS) • 0 Packet Collisions
          </text>
        </g>

        {/* CONNECTION ARROW 2 */}
        <path d="M 630 180 L 680 180" stroke="#c0c0c0" strokeWidth="1.5" />
        <path d="M 680 140 L 700 140" stroke="#c0c0c0" strokeWidth="1" />
        <path d="M 680 220 L 700 220" stroke="#c0c0c0" strokeWidth="1" />
        <path d="M 680 140 L 680 220" stroke="#c0c0c0" strokeWidth="1" />

        {/* SECTION 3: PERIPHERAL HEARING-AID HARDWARE */}
        <g transform="translate(700, 40)">
          <rect width="170" height="280" rx="4" fill="#202020" stroke="#383838" strokeWidth="1" />
          <rect width="170" height="32" rx="4" fill="#252525" stroke="#383838" strokeWidth="1" />
          <text x="85" y="21" fill="#f4f4f4" textAnchor="middle" fontWeight="bold">
            HEARING AID DSP
          </text>

          {/* Left Peripheral */}
          <g transform="translate(15, 60)">
            <rect width="140" height="75" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="70" y="22" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              LEFT DEVICE
            </text>
            <text x="70" y="42" fill="#666666" textAnchor="middle" fontSize="9">
              GATT Server [L]
            </text>
            <text x="70" y="60" fill="#22c55e" textAnchor="middle" fontSize="8">
              BONDED // 2.4 GHz
            </text>
          </g>

          {/* Right Peripheral */}
          <g transform="translate(15, 155)">
            <rect width="140" height="75" rx="2" fill="#171717" stroke="#2a2a2a" />
            <text x="70" y="22" fill="#c0c0c0" textAnchor="middle" fontSize="10" fontWeight="bold">
              RIGHT DEVICE
            </text>
            <text x="70" y="42" fill="#666666" textAnchor="middle" fontSize="9">
              GATT Server [R]
            </text>
            <text x="70" y="60" fill="#22c55e" textAnchor="middle" fontSize="8">
              BONDED // 2.4 GHz
            </text>
          </g>

          <text x="85" y="260" fill="#e10600" textAnchor="middle" fontSize="9" fontWeight="bold">
            AUDIO DSP ENGINE
          </text>
        </g>
      </svg>
    </div>
  );
};
