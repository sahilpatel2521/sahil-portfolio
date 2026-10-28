"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  code: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Impact", code: "01", href: "/#impact" },
  { label: "Systems", code: "02", href: "/#systems" },
  { label: "Approach", code: "03", href: "/#approach" },
  { label: "Open Source", code: "04", href: "/#open-source" },
  { label: "Experience", code: "05", href: "/#experience" },
  { label: "Contact", code: "06", href: "/#contact" },
];

export const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex items-center gap-6"
        aria-label="Main Navigation"
      >
        <ul className="flex items-center gap-5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.code}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative font-mono text-xs uppercase tracking-wider py-1.5 transition-colors duration-150 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-silver hover:text-primary"
                  )}
                >
                  <span className="text-[10px] text-silver-dark group-hover:text-signal-red transition-colors">
                    {item.code}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-signal-red"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Quick CTA */}
        <div className="pl-4 border-l border-border-subtle flex items-center gap-3">
          <PrimaryButton
            href="/assets/Sahil_Patel_Senior_Android_Engineer_Resume.pdf"
            external
            size="sm"
            variant="outline"
            icon={<FileText className="h-3.5 w-3.5 text-silver" />}
          >
            Resume
          </PrimaryButton>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-silver hover:text-primary bg-charcoal border border-border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[65px] z-50 bg-bg-deep/98 backdrop-blur-md border-t border-border-subtle p-6 flex flex-col justify-between md:hidden"
        >
          <div className="space-y-6">
            <div className="font-mono text-xs uppercase text-silver-dark tracking-widest pb-3 border-b border-border-subtle flex items-center justify-between">
              <span>System Navigation</span>
              <span className="flex items-center gap-1.5 text-signal-red">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-red animate-pulse" />
                ONLINE
              </span>
            </div>

            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.code}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-display text-primary hover:text-silver border-b border-border-subtle"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-signal-red">
                        {"//"}{item.code}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span className="font-mono text-xs text-silver-dark">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-border-subtle space-y-3">
            <PrimaryButton
              href="/assets/Sahil_Patel_Senior_Android_Engineer_Resume.pdf"
              external
              size="md"
              variant="signal"
              signalDot
              className="w-full"
            >
              Download Verified Resume (PDF)
            </PrimaryButton>
            <p className="font-mono text-[10px] text-center text-silver-dark uppercase tracking-wider">
              Ahmedabad, IN // Senior Android Engineer
            </p>
          </div>
        </div>
      )}
    </>
  );
};
