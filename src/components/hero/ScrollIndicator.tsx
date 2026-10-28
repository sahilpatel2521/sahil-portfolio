"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  targetId = "systems",
  className,
}) => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      style={{ opacity: mounted ? opacity : 1 }}
      className={cn(
        "flex flex-col items-center gap-3 select-none",
        className
      )}
    >
      <a
        href={`#${targetId}`}
        onClick={handleClick}
        className="group flex flex-col items-center gap-2 text-silver-dark hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red p-1"
        aria-label="Scroll down to engineering systems matrix"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest text-silver-dark group-hover:text-silver transition-colors flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-signal-red" />
          SCROLL_TO_DISCOVER
        </span>

        {/* Vertical Track with Signal Red Indicator */}
        <div className="relative h-12 w-[1px] bg-border-medium overflow-hidden">
          {/* Scroll Progress Fill */}
          <motion.div
            className="absolute top-0 left-0 right-0 bg-signal-red origin-top w-full"
            style={{
              height: "100%",
              scaleY: mounted ? scaleY : 0.2,
            }}
          />
        </div>

        <ArrowDown className="h-3 w-3 text-silver-dark group-hover:text-signal-red group-hover:translate-y-0.5 transition-all" />
      </a>
    </motion.div>
  );
};
