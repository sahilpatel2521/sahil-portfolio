"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgressBar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-border-subtle overflow-hidden pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-silver/40 via-silver to-signal-red origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
