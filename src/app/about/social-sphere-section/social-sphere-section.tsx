"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { fadeInUpVariants, textVariants } from "@/constants/animations";

export const SocialSphereSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parallax effect for the image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.section
      ref={sectionRef}
      className="container mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32 px-4 sm:px-6 md:px-8 lg:px-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
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
        Соціальна сфера
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
        Ми будуємо краще завтра, підтримуючи місцеві громади, зберігаючи
        традиції та впроваджуючи інновації у кожній сфері нашої діяльності
      </motion.p>

      <motion.div
        className="relative overflow-hidden rounded-xl aspect-video md:aspect-auto md:h-110 "
        style={{ y: imageY }}
      >
        <motion.div style={{ scale: imageScale }} className="w-full h-full">
          <Image
            src="/about/social-sphere-section/banner.png"
            alt="Соціальна сфера - підтримка місцевих громад та розвиток традицій"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
