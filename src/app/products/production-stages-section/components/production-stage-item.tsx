"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  containerVariants,
  imageVariants,
  textVariants,
} from "@/constants/animations";

type TProductionStageItemProps = {
  productionImage: string;
  productionHeadline: string;
  productionDescription: string;
  reverse?: boolean;
  index?: number;
};

export const ProductionStageItem = ({
  productionImage,
  productionHeadline,
  productionDescription,
  reverse = false,
  index = 0,
}: TProductionStageItemProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={cn(
        "flex bg-night-rider lg:bg-transparent flex-col rounded-xl lg:rounded-none lg:flex-row",
        "gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center",
        "mb-12 sm:mb-14 md:mb-16 lg:mb-20 pb-3 sm:pb-4 lg:pb-0",
        "p-4 sm:p-5 md:p-6 lg:p-0",
        "hover:bg-night-rider/80 lg:hover:bg-transparent transition-colors duration-300",
        {
          "flex-col lg:flex-row-reverse": reverse,
        },
      )}
    >
      {/* Image Container */}
      <motion.div
        variants={imageVariants}
        className="w-full lg:w-1/2 aspect-video relative shrink-0 group overflow-hidden rounded-xl"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={productionImage}
            alt={`Production stage: ${productionHeadline}`}
            fill
            className="object-cover rounded-xl transition-all duration-500 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority={index === 0}
          />

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        </motion.div>
      </motion.div>

      {/* Content Container */}
      <motion.div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 sm:px-3 lg:px-0 w-full lg:w-1/2">
        <motion.h6
          variants={textVariants}
          whileHover={{
            x: 5,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
          className="text-white uppercase font-bold leading-tight cursor-default
                     text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl
                     tracking-wide hover:text-white/90 transition-colors duration-200"
        >
          {productionHeadline}
        </motion.h6>

        <motion.p
          variants={textVariants}
          className="text-stone-400 leading-relaxed max-w-2xl
                     text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl
                     hover:text-stone-300 transition-colors duration-200 cursor-default"
        >
          {productionDescription}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
