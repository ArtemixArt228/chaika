"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  imageVariants,
  subImageVariants,
  textVariants,
} from "@/constants/animations";

type TBusinessItemProps = {
  businessImage: string;
  businessHeadline: string;
  businessDescription: string;
  businessSubimage1: string;
  businessSubimage2: string;
  index?: number;
  reverse?: boolean;
};

export const BusinessItem = ({
  businessImage,
  businessHeadline,
  businessDescription,
  businessSubimage1,
  businessSubimage2,
  reverse = false,
  index = 0,
}: TBusinessItemProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "flex flex-col gap-8 sm:gap-10 lg:gap-16",
        "lg:flex-row lg:items-center",
        reverse && "lg:flex-row-reverse",
      )}
    >
      {/* Main Image */}
      <motion.div variants={imageVariants} className="flex-1 relative group">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={businessImage}
              alt={businessHeadline}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority={index === 0}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex-1 space-y-6 sm:space-y-8">
        <motion.div variants={textVariants} className="space-y-4 sm:space-y-6">
          <motion.h4
            className="
              text-white uppercase
              text-xl sm:text-2xl md:text-3xl lg:text-4xl
              mb-2 sm:mb-4 lg:mb-8
              rounded-lg md:rounded-none
              font-medium tracking-wide
              leading-tight sm:leading-tight
              max-w-5xl mx-auto
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
              max-w-3xl mx-auto
              transition-colors duration-300 ease-out
            "
          >
            {businessDescription}
          </motion.p>
        </motion.div>

        {/* Sub Images */}
        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          <motion.div
            custom={0}
            variants={subImageVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
            className="flex-1 relative group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image
                src={businessSubimage1}
                alt="Business detail 1"
                width={300}
                height={200}
                className="w-full h-32 sm:h-40 lg:h-48 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={subImageVariants}
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
            className="flex-1 relative group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image
                src={businessSubimage2}
                alt="Business detail 2"
                width={300}
                height={200}
                className="w-full h-32 sm:h-40 lg:h-48 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
