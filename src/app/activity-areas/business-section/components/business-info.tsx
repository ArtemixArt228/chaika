"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { containerVariants } from "@/constants/animations";

type TBusinessInfoProps = {
  businessHeadline: string;
  businessDescription: string;
  businessSubimage1: string;
  businessSubimage2: string;
};

export const BusinessInfo = ({
  businessHeadline,
  businessDescription,
  businessSubimage1,
  businessSubimage2,
}: TBusinessInfoProps) => {
  return (
    <motion.div
      variants={containerVariants}
      className="flex flex-col gap-6 px-3 lg:p-0 mb-20 container mx-auto"
    >
      {/* Header */}
      <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 text-center">
        <motion.h4
          className="
              text-white uppercase
              text-xl sm:text-2xl md:text-3xl lg:text-4xl
              mb-2 sm:mb-4 lg:mb-8
              rounded-lg md:rounded-none
              font-medium tracking-wide
              leading-tight sm:leading-tight
            "
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {businessHeadline}
        </motion.h4>

        <motion.p
          className="
              text-stone-400
              text-sm sm:text-base lg:text-lg xl:text-xl
              hover:text-stone-300
              transition-colors duration-300 ease-out
              max-w-2xl mx-auto
            "
        >
          {businessDescription}
        </motion.p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={businessSubimage1}
            alt="Business Image 1"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>

        <div className="w-full aspect-[4/3] relative">
          <Image
            src={businessSubimage2}
            alt="Business Image 2"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
};
