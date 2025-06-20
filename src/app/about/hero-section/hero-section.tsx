"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { CounterCards } from "@/app/about/hero-section/components/counter-cards";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 50]);
  const textY = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section className="relative mt-0 sm:mt-20 lg:mt-24 xl:mt-30 px-0">
      <motion.div
        className="relative w-full h-screen sm:h-[80vh] md:h-screen lg:h-110 lg:w-3xl rounded-lg sm:rounded-xl lg:rounded-none lg:rounded-r-xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.25, 0, 1] }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: imageY }}
        >
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/about/hero-section/field.png"
              alt="Field"
              fill
              className="object-cover rounded-none sm:rounded-xl lg:rounded-none lg:rounded-r-xl transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40 rounded-none sm:rounded-xl lg:rounded-none lg:rounded-r-xl" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute right-0 sm:right-4 lg:-right-1/4 xl:-right-1/2 2xl:-right-2/3 top-1/2 -translate-y-1/2 max-w-80 sm:max-w-92 md:max-w-xl lg:max-w-2xl w-full"
          style={{ y: textY }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="bg-night-rider rounded-l-xl lg:rounded-xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 shadow-2xl backdrop-blur-sm border border-white/10"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase text-white mb-4 sm:mb-6 lg:mb-8 font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Чайка
              </motion.span>{" "}
              – смак,
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                вирощений з турботою.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-stone-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Ми працюємо в агробізнесі, тваринництві, садівництві та
              м&#39;ясопереробці, забезпечуючи повний цикл виробництва з
              турботою про природу і людей
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 sm:mt-20 lg:mt-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <CounterCards />
      </motion.div>

      <div className="absolute -bottom-[10%] sm:-bottom-[12%] lg:-bottom-[15%] w-full h-[10%] sm:h-[12%] lg:h-[15%] bg-black rounded-b-[100%_50%] sm:rounded-b-[120%_60%] lg:rounded-b-[150%_100%]" />
    </section>
  );
};
