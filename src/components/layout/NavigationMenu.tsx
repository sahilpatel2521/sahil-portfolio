"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  { label: "Systems", code: "01", href: "/#systems" },
  { label: "Apps", code: "02", href: "/#apps" },
  { label: "Approach", code: "03", href: "/#approach" },
  { label: "Open Source", code: "04", href: "/#open-source" },
  { label: "Experience", code: "05", href: "/#experience" },
  { label: "Contact", code: "06", href: "/#contact" },
];

export const NavigationMenu: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dynamically observe active homepage sections
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["systems", "apps", "approach", "open-source", "experience", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`/#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key and focus trapping for mobile menu
  useEffect(() => {
    if (!isOpen) return;

    const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusables && focusables.length > 0) {
      focusables[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const items = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (items.length === 0) return;

        const first = items[0];
        const last = items[items.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
        className="hidden lg:flex items-center gap-6"
        aria-label="Main Navigation"
      >
        <ul className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || (pathname === "/" && activeSection === item.href);
            return (
              <li key={item.code}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative font-sans text-xs font-medium py-1.5 transition-colors duration-150 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red rounded",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-silver hover:text-primary"
                  )}
                >
                  <span className="text-[10px] text-silver-muted group-hover:text-silver transition-colors">
                    {item.code}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-signal-red rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Quick CTA */}
        <div className="pl-5 border-l border-white/[0.08] flex items-center gap-3">
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

      {/* Mobile & Tablet Toggle Button */}
      <div className="flex items-center gap-2 lg:hidden">
        <button
          ref={toggleButtonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-silver hover:text-primary bg-white/[0.04] border border-white/[0.08] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-red"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay via Portal */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            ref={drawerRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-x-0 bottom-0 top-16 z-50 bg-[#0f0f11]/95 backdrop-blur-2xl border-t border-white/[0.08] p-6 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="font-mono text-xs text-silver-dark tracking-wider pb-3 border-b border-white/[0.08] flex items-center justify-between">
                <span>Navigation</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available for roles
                </span>
              </div>

              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.code}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-2 text-base font-sans font-medium text-primary hover:text-silver border-b border-white/[0.05]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-silver-dark">
                          {item.code}
                        </span>
                        <span>{item.label}</span>
                      </span>
                      <span className="text-silver-dark">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.08] space-y-3">
              <PrimaryButton
                href="/assets/Sahil_Patel_Senior_Android_Engineer_Resume.pdf"
                external
                size="md"
                variant="signal"
                signalDot
                className="w-full"
              >
                Download Resume (PDF)
              </PrimaryButton>
              <p className="font-mono text-[11px] text-center text-silver-muted tracking-wide">
                Ahmedabad, India · Senior Android Engineer
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
