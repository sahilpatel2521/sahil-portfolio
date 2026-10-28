/**
 * SIGNAL / SYSTEM Design Tokens
 * Centralized design token definitions for Sahil Patel's Senior Android Engineering Portfolio.
 */

export const tokens = {
  colors: {
    // Core brand palette
    bg: {
      deep: "#171717", // Primary page background
      elevated: "#202020", // Card and surface layer 1
      surface: "#252525", // Interactive surface layer 2
      hover: "#2a2a2a", // Subtle hover state
    },
    charcoal: {
      DEFAULT: "#2a2a2a",
      light: "#333333",
      dark: "#1e1e1e",
      border: "#2a2a2a",
    },
    silver: {
      DEFAULT: "#c0c0c0", // Moonlit silver
      light: "#dcdcdc",
      dark: "#8e8e8e",
      muted: "#717171",
    },
    signal: {
      red: "#e10600", // Strictly 3-5% accent - status, active telemetry, laser ticks
      redMuted: "rgba(225, 6, 0, 0.15)",
      redGlow: "rgba(225, 6, 0, 0.25)",
      redBorder: "rgba(225, 6, 0, 0.4)",
    },
    text: {
      primary: "#f4f4f4", // High-contrast editorial headlines and body
      secondary: "#c0c0c0", // Silver secondary data
      muted: "#9e9e9e", // Accessible neutral for captions and timestamps (4.5:1+ contrast)
      dim: "#6b6b6b", // Low-priority grid/telemetry markers
    },
    border: {
      subtle: "#2a2a2a",
      medium: "#383838",
      active: "#505050",
      highlight: "#c0c0c0",
      signal: "#e10600",
    },
    status: {
      live: "#22c55e",
      warning: "#eab308",
      signal: "#e10600",
      inactive: "#6b6b6b",
    },
  },
  fonts: {
    display: "var(--font-display), 'Space Grotesk', -apple-system, sans-serif",
    body: "var(--font-body), 'Inter', -apple-system, sans-serif",
    mono: "var(--font-mono), 'JetBrains Mono', monospace",
  },
  radii: {
    none: "0px",
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    full: "9999px",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.16, 1, 0.3, 1)",
    normal: "250ms cubic-bezier(0.16, 1, 0.3, 1)",
    slow: "400ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
} as const;

export type DesignTokens = typeof tokens;
