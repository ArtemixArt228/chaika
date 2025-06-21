"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type THistoryItemProps = {
  itemImage: string;
  itemDescription: string;
  index: number;
};

export const HistoryItem = ({
  itemImage,
  itemDescription,
  index,
}: THistoryItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        x: 4,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="flex items-start gap-4 sm:gap-6 md:gap-8 group cursor-pointer"
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
        transition={{
          scale: { duration: 0.3 },
          rotate: { duration: 0.6, ease: "easeInOut" },
          boxShadow: { duration: 0.3 },
        }}
        className="rounded-full bg-night-rider group-hover:bg-main flex shrink-0 justify-center items-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 transition-colors duration-500 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{
            scale: 2,
            opacity: [0, 0.5, 0],
            transition: { duration: 0.6 },
          }}
        />

        <motion.div
          whileHover={{
            filter: "brightness(0) invert(1)",
            scale: 1.2,
          }}
          transition={{ duration: 0.3 }}
        >
          <Image
            width={32}
            height={32}
            src={itemImage}
            alt="history milestone"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-all duration-300"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
        className="flex-1"
      >
        <motion.p
          className="text-stone-400 group-hover:text-stone-200 max-w-64 xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed transition-colors duration-500"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
        >
          {itemDescription}
        </motion.p>

        <motion.div
          className="h-0.5 bg-gradient-to-r from-main to-transparent mt-2"
          initial={{ width: 0 }}
          whileHover={{ width: "60%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};
