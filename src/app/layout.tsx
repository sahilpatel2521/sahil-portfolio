import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/styles/globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIGNAL / SYSTEM — Sahil Patel | Senior Android Engineer",
  description:
    "Engineering portfolio and released-app showcase of Sahil Patel, Senior Android Engineer specializing in BLE architecture, low-latency audio/video streaming, and Jetpack Compose.",
  keywords: [
    "Sahil Patel",
    "Senior Android Engineer",
    "Kotlin",
    "Jetpack Compose",
    "BLE GATT",
    "PairHub",
    "NUConnect",
    "Styledrobe",
    "Zbukk",
    "Clean Architecture",
  ],
  authors: [{ name: "Sahil Patel", url: "https://github.com/sahilpatel2521" }],
};

export const viewport: Viewport = {
  themeColor: "#171717",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} dark`}
      id="top"
    >
      <body className="min-h-screen bg-bg-deep text-primary font-body antialiased selection:bg-signal-red-muted selection:text-primary">
        <div className="relative flex min-h-screen flex-col">
          {/* Subtle background grid pattern */}
          <div
            className="pointer-events-none fixed inset-0 z-0 engineering-grid opacity-40"
            aria-hidden="true"
          />

          <SiteHeader />

          <main className="relative z-10 flex-1">{children}</main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
