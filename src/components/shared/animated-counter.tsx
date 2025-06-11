"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export const AnimatedCounter = ({
  from = 0,
  to = 100,
  duration = 2,
  text = "",
  symbol = "",
}) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      onUpdate: (latest) => {
        setDisplay(latest);
      },
    });

    return controls.stop;
  }, [to, duration, count]);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <motion.p className="text-6xl text-white text-center">
        {Math.round(display)}
        {symbol}
      </motion.p>
      <span className="text-base text-white text-center">{text}</span>
    </div>
  );
};
