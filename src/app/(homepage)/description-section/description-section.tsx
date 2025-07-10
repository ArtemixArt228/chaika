"use client";

import React from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { MainButton } from "@/components/shared/button";

import {
  containerVariants,
  fadeInUpVariants,
  textVariants,
} from "@/constants/animations";

export const DescriptionSection = () => (
  <LazyMotion features={domAnimation}>
    <m.section
      className="container mx-auto mb-16 sm:mb-20 lg:mb-24 xl:mb-36 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <m.h2
        variants={fadeInUpVariants}
        className="bg-main md:bg-transparent text-center text-white uppercase
          text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-12
          px-4 py-3 sm:px-6 sm:py-4 md:px-0 md:py-0 rounded-lg md:rounded-none
          font-medium tracking-wide leading-tight max-w-5xl mx-auto"
      >
        Від родючих полів до смачних страв – ми створюємо якість природним
        шляхом
      </m.h2>

      <div className="flex flex-col-reverse lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
        <m.div
          className="grid gap-4 sm:gap-6 lg:gap-8 lg:flex-1"
          variants={containerVariants}
        >
          <m.h3
            variants={textVariants}
            className="text-white uppercase lg:text-2xl xl:text-3xl
              font-medium tracking-wide hover:text-gray-100 transition-colors duration-300 ease-out"
          >
            «Чайка» - натуральність та довіра в кожному аспекті
          </m.h3>

          <m.p
            variants={textVariants}
            className="text-stone-400 text-sm sm:text-base lg:text-lg xl:text-xl
              hover:text-stone-300 transition-colors duration-300 ease-out"
          >
            Компанія «Чайка» веде успішну діяльність на землях площею понад 3500
            гектарів, де ми займаємося вирощуванням сільськогосподарських
            культур, тваринництвом, садівництвом і м&#39;ясопереробкою.
          </m.p>

          <m.p
            variants={textVariants}
            className="text-stone-400 text-sm sm:text-base lg:text-lg xl:text-xl
              hover:text-stone-300 transition-colors duration-300 ease-out"
          >
            Ми не лише вирощуємо та переробляємо сільськогосподарську продукцію,
            а й розвиваємо сучасні технології для досягнення високих результатів
            у всіх сферах. Наш підхід до бізнесу — це гармонійне поєднання
            традицій та новітніх технологій.
          </m.p>

          <m.div variants={textVariants} className="mt-4">
            <MainButton text="Більше" className="px-18 md:px-20" />
          </m.div>
        </m.div>

        <div className="relative w-full lg:flex-1 h-64 sm:h-72 md:h-80 lg:h-[22rem] xl:h-[26rem] mb-8 lg:mb-0">
          {["seed.avif", "field.avif"].map((img, idx) => {
            const pos =
              idx === 0
                ? { right: ["0", "2", "4"], bottom: ["6", "8", "12"] }
                : { left: ["0", "2", "4"], bottom: ["0", "2", "4"] };

            return (
              <div
                key={img}
                className={`
                  absolute
                  w-44 h-36 sm:w-56 sm:h-44 md:w-64 md:h-48 lg:w-80 lg:h-60 xl:w-96 xl:h-72
                  rounded-lg sm:rounded-xl shadow-lg overflow-hidden group
                  transition-shadow duration-300 ease-out hover:shadow-2xl
                  will-change-transform
                  bottom-${pos.bottom[0]} sm:bottom-${pos.bottom[1]} lg:bottom-${pos.bottom[2]}
                  ${
                    pos.right
                      ? `right-${pos.right[0]} sm:right-${pos.right[1]} lg:right-${pos.right[2]}`
                      : `left-${pos.left[0]} sm:left-${pos.left[1]} lg:left-${pos.left[2]}`
                  }
                `}
              >
                <Image
                  src={`/homepage/description-section/${img}`}
                  alt={img.split(".")[0]}
                  fill
                  sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 384px"
                  className="object-cover rounded-lg sm:rounded-xl
                    group-hover:scale-105 transition-transform duration-300 ease-in-out
                    will-change-transform backface-hidden"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                />
              </div>
            );
          })}
        </div>
      </div>
    </m.section>
  </LazyMotion>
);
