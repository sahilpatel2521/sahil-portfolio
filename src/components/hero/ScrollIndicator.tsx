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
      className={cn("flex flex-col items-center gap-2 select-none", className)}
    >
      <a
        href={`#${targetId}`}
        onClick={handleClick}
        className="group flex flex-col items-center gap-2 text-silver-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-signal-red p-1"
        aria-label="Scroll down to featured work"
      >
        <span className="font-mono text-[10px] tracking-wider text-silver-dark group-hover:text-silver transition-colors">
          Scroll
        </span>

        {/* Minimal Vertical Track */}
        <div className="relative h-10 w-[1px] bg-white/[0.1] overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-silver-dark origin-top w-full"
            style={{
              height: "100%",
              scaleY: mounted ? scaleY : 0.2,
            }}
          />
        </div>

        <ArrowDown className="h-3 w-3 text-silver-muted group-hover:text-primary group-hover:translate-y-0.5 transition-all" />
      </a>
    </motion.div>
  );
};
