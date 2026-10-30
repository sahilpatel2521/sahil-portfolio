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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sahilpatel.dev"),
  title: {
    default: "SIGNAL / SYSTEM — Sahil Patel | Senior Android Engineer",
    template: "%s | Sahil Patel",
  },
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
    "Android Architect",
  ],
  authors: [{ name: "Sahil Patel", url: "https://github.com/sahilpatel2521" }],
  creator: "Sahil Patel",
  openGraph: {
    title: "SIGNAL / SYSTEM — Sahil Patel | Senior Android Engineer",
    description:
      "Architecting deterministic Android platforms, custom BLE communication protocols, low-latency audio/video pipelines, and on-device ML.",
    url: "https://sahilpatel.dev",
    siteName: "SIGNAL / SYSTEM",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIGNAL / SYSTEM — Sahil Patel | Senior Android Engineer",
    description:
      "Senior Android Engineer specializing in BLE GATT architectures, real-time audio/video streaming, and Jetpack Compose.",
    creator: "@sahilpatel2521",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

          <main id="main-content" tabIndex={-1} className="relative z-10 flex-1 outline-none">
            {children}
          </main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
