import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <motion.div
      className="relative z-30 bg-night-rider h-36 w-full grid place-items-center mt-0 lg:mt-40 xl:mt-60"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <h3 className="text-2xl md:text-4xl relative z-10 uppercase text-white text-center">
        Сучасність і традиції у закритому циклі виробництва
      </h3>
      <div className="absolute w-full h-full -bottom-25 flex">
        {Array.from({ length: 16 }, (_, i) => (
          <div key={i} className="w-30 h-20 relative">
            <Image
              fill
              src={
                i % 2 === 0
                  ? "/activity-areas/hero-section/icons/icon-1.svg"
                  : "/activity-areas/hero-section/icons/icon-2.svg"
              }
              alt="decor"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
