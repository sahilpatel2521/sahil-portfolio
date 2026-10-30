import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: "var(--bg-deep)",
          elevated: "var(--bg-elevated)",
          surface: "var(--bg-surface)",
          hover: "var(--bg-hover)",
        },
        charcoal: {
          DEFAULT: "var(--charcoal)",
          light: "var(--charcoal-light)",
          border: "var(--charcoal-border)",
        },
        silver: {
          DEFAULT: "var(--silver)",
          light: "var(--silver-light)",
          dark: "var(--silver-dark)",
          muted: "var(--silver-muted)",
        },
        signal: {
          red: "var(--signal-red)",
          "red-muted": "var(--signal-red-muted)",
          "red-glow": "var(--signal-red-glow)",
          "red-border": "var(--signal-red-border)",
        },
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        dim: "var(--text-dim)",
        border: {
          subtle: "var(--border-subtle)",
          medium: "var(--border-medium)",
          active: "var(--border-active)",
          highlight: "var(--border-highlight)",
          signal: "var(--border-signal)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "'Space Grotesk'", "sans-serif"],
        body: ["var(--font-body)", "'Inter'", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        elevation: "0 4px 20px -2px rgba(0, 0, 0, 0.7)",
        "elevation-lg": "0 10px 30px -5px rgba(0, 0, 0, 0.8)",
        "signal-subtle": "0 0 12px -2px rgba(225, 6, 0, 0.35)",
      },
      letterSpacing: {
        technical: "0.12em",
        display: "-0.03em",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotateX(68deg) rotateY(-18deg) rotateZ(0deg)" },
          "100%": { transform: "rotateX(68deg) rotateY(-18deg) rotateZ(360deg)" },
        },
        "spin-reverse-medium": {
          "0%": { transform: "rotateX(42deg) rotateY(38deg) rotateZ(0deg)" },
          "100%": { transform: "rotateX(42deg) rotateY(38deg) rotateZ(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 48s linear infinite",
        "spin-reverse-medium": "spin-reverse-medium 36s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
