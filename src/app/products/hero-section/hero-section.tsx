"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { MainButton } from "@/components/shared/button";

import {
  containerVariants,
  imageVariants,
  textVariants,
} from "@/constants/animations";

export const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative lg:mt-30 mb-26"
    >
      <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center">
        {/* Image Container */}
        <motion.div
          variants={imageVariants}
          className="relative w-full h-screen lg:w-1/2 lg:h-130 shrink-0 group"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/products/hero-section/banner.png"
              alt="Products"
              fill
              className="object-cover transition-all duration-300 group-hover:brightness-105"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Content Container */}
        <motion.div className="absolute top-1/2 -translate-y-1/2 lg:top-0 lg:translate-y-0 lg:relative p-6 sm:p-7 md:p-8 lg:rounded-xl text-white lg:max-w-xl">
          <motion.h1
            variants={textVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl uppercase text-white mb-4 sm:mb-5 md:mb-6 leading-tight"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            Чайка – від ферми до <br /> вашого столу з любов&#39;ю
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-stone-300 text-sm sm:text-base md:text-lg lg:text-base xl:text-xl mb-4 sm:mb-5 md:mb-6 leading-relaxed"
          >
            Наш підхід до бізнесу — це гармонійне поєднання традицій та новітніх
            технологій, що забезпечує сталий розвиток та надійність на кожному
            етапі виробництва.
          </motion.p>

          <motion.div
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <MainButton text="Співпрацювати" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
