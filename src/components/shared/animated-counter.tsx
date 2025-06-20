"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

export const AnimatedCounter = ({
  from = 0,
  to = 100,
  duration = 2,
  text = "",
  symbol = "",
}) => {
  const ref = useRef(null);

  const [display, setDisplay] = useState(from);

  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        onUpdate: (latest) => setDisplay(latest),
      });

      return controls.stop;
    }
  }, [isInView, to, duration, count]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center gap-2">
      <motion.p className="text-6xl text-white text-center">
        {Math.round(display)}
        {symbol}
      </motion.p>
      <span className="text-base text-white text-center">{text}</span>
    </div>
  );
};
