"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

import { Banner } from "@/app/activity-areas/hero-section/components/banner";
import { HeroCard } from "@/app/activity-areas/hero-section/components/hero-card";
import { containerVariants, itemVariants } from "@/constants/animations";

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const isInView = useInView(contentRef, { once: true });

  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen md:min-h-auto lg:mt-28 xl:mt-32 mb-16 sm:mb-20 md:mb-24 lg:mb-32 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full">
        {/* Content Section */}
        <motion.div
          ref={contentRef}
          className="relative z-20 pt-32 sm:pt-36 md:pt-40 lg:pt-44 px-4 sm:px-6 md:px-8 lg:pl-12 xl:pl-20 lg:pr-0 flex flex-col justify-center items-start min-h-screen md:min-h-auto"
          style={{ y: contentY }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
          >
            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold uppercase text-white mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 leading-tight relative"
              whileHover={{
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            >
              Ваш надійний партнер <br className="hidden sm:block" />у
              виробництві!
            </motion.h1>

            {/* Cards Container */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 items-stretch lg:items-center w-full lg:w-auto"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="flex-1 lg:flex-none lg:w-auto"
              >
                <HeroCard
                  title="Закритий цикл виробництва"
                  description="Забезпечуємо повний процес від вирощування сировини на власних полях і садах до виготовлення кінцевої продукції"
                />
              </motion.div>

              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="flex-1 lg:flex-none lg:w-auto"
              >
                <HeroCard
                  title="Поєднання інновацій і традицій"
                  description="Використовуємо сучасні технології у тваринництві та агробізнесі, зберігаючи органічні принципи вирощування"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Background Image with Parallax */}
        <motion.div
          ref={imageRef}
          className="absolute inset-0 max-h-screen lg:inset-y-0 lg:h-96 xl:h-[35rem] lg:right-0 lg:left-auto lg:w-3/5 xl:w-2/3 2xl:w-3/5 z-10 overflow-hidden lg:rounded-l-xl"
          style={{
            y: imageY,
            scale: imageScale,
          }}
        >
          {/* Overlay gradients for better text readability */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:from-black/40 lg:via-transparent lg:to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          />

          {/* Main background image */}
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/activity-areas/hero-section/field.avif"
              alt="Поля та сільськогосподарські угіддя компанії"
              fill
              className="object-cover lg:rounded-l-xl"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </motion.div>
        </motion.div>

        <Banner />
      </div>
    </motion.section>
  );
};
