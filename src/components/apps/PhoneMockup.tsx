import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { QrCode, Shield, PhoneCall, Wifi, Battery } from "lucide-react";

export interface PhoneMockupProps {
  screenshotUrl?: string;
  alt?: string;
  appName?: string;
  isPrototype?: boolean;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screenshotUrl,
  alt = "App screenshot preview",
  appName = "App",
  isPrototype = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto rounded-[36px] p-2.5 bg-gradient-to-b from-[#3a3a3a] via-[#202020] to-[#141414] border border-border-medium shadow-2xl select-none",
        "w-[260px] sm:w-[280px] aspect-[9/18]",
        className
      )}
    >
      {/* Outer Phone Bezel Rim */}
      <div className="relative w-full h-full rounded-[28px] bg-bg-deep overflow-hidden border border-black/80 flex flex-col justify-between">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-4 w-20 bg-black rounded-full flex items-center justify-end px-2">
          <div className="h-1.5 w-1.5 rounded-full bg-signal-red/80" />
        </div>

        {/* Top Status Bar */}
        <div className="relative z-20 px-4 pt-2 pb-1 flex items-center justify-between text-[10px] font-mono text-silver-dark pointer-events-none">
          <span>09:41</span>
          <div className="flex items-center gap-1.5">
            <Wifi className="h-3 w-3" />
            <Battery className="h-3 w-3" />
          </div>
        </div>

        {/* Screen Display Area */}
        <div className="relative w-full flex-1 overflow-hidden bg-bg-deep">
          {screenshotUrl ? (
            <Image
              src={screenshotUrl}
              alt={alt}
              fill
              sizes="(max-width: 640px) 260px, 280px"
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
              priority={false}
            />
          ) : isPrototype ? (
            /* ReachMe Architectural Vector Mockup */
            <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-b from-bg-elevated to-bg-deep font-mono text-xs text-silver">
              <div className="text-center pt-4 space-y-1">
                <div className="inline-flex items-center gap-1 text-[10px] text-signal-red">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-red" />
                  MASKED_PROXY // ACTIVE
                </div>
                <h4 className="font-display text-sm font-bold text-primary">{appName}</h4>
                <p className="text-[10px] text-silver-dark">Windshield QR Verification</p>
              </div>

              {/* QR Schematic */}
              <div className="mx-auto p-4 bg-charcoal border border-border-subtle rounded-lg flex flex-col items-center gap-2">
                <QrCode className="h-16 w-16 text-primary" />
                <span className="text-[9px] text-silver-dark tracking-widest">
                  TOKEN: 8F2A-91CE-00B4
                </span>
              </div>

              {/* Action Simulation */}
              <div className="space-y-2 pb-2">
                <div className="p-2 bg-charcoal/80 border border-border-subtle text-[10px] flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-silver">
                    <Shield className="h-3 w-3 text-emerald-400" />
                    Caller Phone Masked
                  </span>
                  <span className="text-emerald-400">SECURE</span>
                </div>

                <div className="p-2.5 bg-signal-red text-white text-center rounded font-mono text-[10px] font-bold flex items-center justify-center gap-1.5">
                  <PhoneCall className="h-3 w-3" />
                  <span>ALERT VEHICLE OWNER</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-xs text-silver-dark">
              NO_PREVIEW
            </div>
          )}

          {/* Screen Glare Highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Home Navigation Indicator Bar */}
        <div className="relative z-20 py-1.5 flex justify-center pointer-events-none">
          <div className="h-1 w-24 bg-silver-dark/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
