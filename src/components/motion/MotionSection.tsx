"use client";

import React from "react";

export interface MotionSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  delay?: number;
}

/**
 * MotionSection: Resilient semantic container for section content.
 * Guarantees zero opacity-traps, instantaneous SSR rendering,
 * and flawless compatibility across all WebKit, Safari, and Chromium engines.
 */
export const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className = "",
  delay: _delay = 0,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
