"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export const AnimatedCounter = ({
  from = 0,
  to = 100,
  duration = 2,
  text = "",
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
    <motion.span className="text-xl text-white">
      {Math.round(display)}
      {text}
    </motion.span>
  );
};
