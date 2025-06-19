"use client";

import React from "react";
import { motion } from "framer-motion";

import { ProductsSlider } from "@/app/(homepage)/our-products-section/components/products-slider";
import {
  containerVariants,
  fadeInUpVariants,
  textVariants,
} from "@/constants/animations";

export const OurProductsSection = () => {
  return (
    <motion.section
      className="container mx-auto mb-16 sm:mb-20 lg:mb-24 xl:mb-36 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        variants={fadeInUpVariants}
        className="
          text-center text-white uppercase
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          mb-6 sm:mb-8 lg:mb-12
          px-4 py-3 sm:px-6 sm:py-4 md:px-0 md:py-0
          rounded-lg md:rounded-none
          font-medium tracking-wide
          leading-tight sm:leading-tight
          max-w-5xl mx-auto
        "
      >
        Наша продукція
      </motion.h2>
      <motion.p
        variants={textVariants}
        className="
          text-stone-400
          text-center
          text-sm sm:text-base lg:text-lg xl:text-xl
          hover:text-stone-300
          max-w-3xl mx-auto mb-16
          transition-colors duration-300 ease-out
        "
      >
        Нашій компанії довіряють споживачі, адже знають, що уся продукція
        створена з натуральних інгредієнтів
      </motion.p>

      <ProductsSlider />
    </motion.section>
  );
};
