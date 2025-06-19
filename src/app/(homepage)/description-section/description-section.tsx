"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { MainButton } from "@/components/shared/button";

import {
  containerVariants,
  fadeInUpVariants,
  textVariants,
} from "@/constants/animations";

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const DescriptionSection = () => {
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
          bg-main md:bg-transparent
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
        Від родючих полів до смачних страв – ми створюємо якість природним
        шляхом
      </motion.h2>

      <div className="flex gap-6 sm:gap-8 lg:gap-12 xl:gap-16 flex-col-reverse lg:flex-row items-start">
        <motion.div
          className="grid gap-4 sm:gap-6 lg:gap-8 lg:flex-1 w-full"
          variants={containerVariants}
        >
          <motion.h3
            variants={textVariants}
            className="
              text-white uppercase
              lg:text-2xl xl:text-3xl
              font-medium tracking-wide
              hover:text-gray-100
              transition-colors duration-300 ease-out
            "
          >
            «Чайка» - натуральність та довіра в кожному аспекті
          </motion.h3>

          <motion.p
            variants={textVariants}
            className="
              text-stone-400
              text-sm sm:text-base lg:text-lg xl:text-xl
              hover:text-stone-300
              transition-colors duration-300 ease-out
            "
          >
            Компанія «Чайка» веде успішну діяльність на землях площею понад 3500
            гектарів, де ми займаємося вирощуванням сільськогосподарських
            культур, тваринництвом, садівництвом і м&#39;ясопереробкою.
          </motion.p>

          <motion.p
            variants={textVariants}
            className="
              text-stone-400
              text-sm sm:text-base lg:text-lg xl:text-xl
              hover:text-stone-300
              transition-colors duration-300 ease-out
            "
          >
            Ми не лише вирощуємо та переробляємо сільськогосподарську продукцію,
            а й розвиваємо сучасні технології для досягнення високих результатів
            у всіх сферах. Наш підхід до бізнесу — це гармонійне поєднання
            традицій та новітніх технологій.
          </motion.p>

          <motion.div variants={textVariants} className="mt-2 sm:mt-4">
            <MainButton text="Більше" className="px-18 md:px-20" />
          </motion.div>
        </motion.div>

        <motion.div
          className="
            relative
            h-64 sm:h-72 md:h-80 lg:h-[22rem] xl:h-[26rem]
            w-full lg:flex-1
            mb-8 lg:mb-0
          "
          variants={containerVariants}
        >
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.05,
              zIndex: 20,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="
              absolute
              w-44 h-36 sm:w-56 sm:h-44 md:w-64 md:h-48 lg:w-80 lg:h-60 xl:w-96 xl:h-72
              rounded-lg sm:rounded-xl
              bottom-6 sm:bottom-8 lg:bottom-12
              right-0 sm:right-2 lg:right-4
              z-10
              shadow-lg hover:shadow-2xl
              transition-all duration-300 ease-out
              overflow-hidden
              group
            "
          >
            <Image
              src="/homepage/description-section/seed.png"
              alt="Seed"
              fill
              sizes="(max-width: 640px) 176px,
                 (max-width: 768px) 224px,
                 (max-width: 1024px) 256px,
                 (max-width: 1280px) 320px,
                 384px"
              className="
                object-cover rounded-lg sm:rounded-xl
                group-hover:scale-110
                transition-transform duration-500 ease-out
              "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="
              absolute
              w-44 h-36 sm:w-56 sm:h-44 md:w-64 md:h-48 lg:w-80 lg:h-60 xl:w-96 xl:h-72
              rounded-lg sm:rounded-xl
              bottom-0 sm:bottom-2 lg:bottom-4
              left-0 sm:left-2 lg:left-4
              shadow-lg hover:shadow-2xl
              transition-all duration-300 ease-out
              overflow-hidden
              group
            "
          >
            <Image
              src="/homepage/description-section/field.png"
              alt="Field"
              fill
              sizes="(max-width: 640px) 176px,
                 (max-width: 768px) 224px,
                 (max-width: 1024px) 256px,
                 (max-width: 1280px) 320px,
                 384px"
              className="
                object-cover rounded-lg sm:rounded-xl
                group-hover:scale-110
                transition-transform duration-500 ease-out
              "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
