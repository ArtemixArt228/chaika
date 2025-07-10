"use client";

import React from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, easeOut } from "framer-motion";

// Mock Separator component
const Separator = ({
  orientation = "vertical",
  className = "",
}: {
  orientation?: string;
  className?: string;
}) => (
  <div
    className={`
      ${orientation === "vertical" ? "w-px h-full" : "h-px w-full"}
      bg-gray-100 ${className}
    `}
  />
);

const HERO_ADVANTAGES_CARDS = [
  {
    icon: "/homepage/hero-section/cards/return.svg",
    alt: "Return icon",
    title: "Натуральна сировина",
    description: "Продукти, вирощені з любовʼю",
  },
  {
    icon: "/homepage/hero-section/cards/tractor.svg",
    alt: "Tractor icon",
    title: "100% автономність",
    description: "Закритий цикл виробництва",
  },
  {
    icon: "/homepage/hero-section/cards/shop.svg",
    alt: "Shop icon",
    title: "Фірмові магазини",
    description: "8 магазини з продукцією",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: easeOut } },
};

export const HeroAdvantagesCards = () => (
  <div className="mt-10 lg:mt-0 lg:absolute z-10 lg:-bottom-17 w-full px-4 sm:px-6 lg:px-0">
    <div className="lg:container mx-auto">
      <LazyMotion features={domAnimation}>
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            flex flex-col gap-6 sm:gap-8 lg:gap-10
            p-4 sm:p-6 lg:p-2
            lg:flex-row lg:h-36 lg:px-8 xl:px-12 lg:py-8 xl:py-10
            bg-night-rider lg:justify-between
            shadow-2xl lg:shadow-none
            rounded-lg lg:rounded-xl
          "
        >
          {HERO_ADVANTAGES_CARDS.map((card, index) => (
            <React.Fragment key={index}>
              <m.div
                variants={cardVariants}
                whileHover="hover"
                className="
                  flex flex-col sm:flex-row lg:flex-row items-center
                  gap-4 sm:gap-6 lg:gap-6
                  p-3 sm:p-4 lg:p-0
                  rounded-lg lg:rounded-none
                  hover:bg-white/5 lg:hover:bg-transparent
                  transition-all duration-300 ease-out
                  cursor-pointer
                  group
                "
              >
                <div
                  className="
                    h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16
                    relative shrink-0 overflow-hidden
                    flex items-center justify-center
                    transition-transform duration-300 ease-out
                    group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-lg
                  "
                >
                  <Image
                    className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-110"
                    loading="lazy"
                    fill
                    alt={card.alt}
                    src={card.icon}
                  />
                </div>

                <div
                  className="
                  flex flex-col items-center sm:items-start lg:items-start
                  justify-center space-y-1 sm:space-y-2
                  transition-transform duration-200 ease-out group-hover:translate-x-1
                "
                >
                  <h3
                    className="
                    text-lg sm:text-xl lg:text-2xl uppercase text-gray-100
                    text-center sm:text-left lg:text-left font-medium leading-tight
                    transition-colors duration-300 ease-out group-hover:text-white
                  "
                  >
                    {card.title}
                  </h3>
                  <p
                    className="
                    text-sm sm:text-base lg:text-base text-stone-400
                    text-center sm:text-left lg:text-left leading-relaxed
                    transition-colors duration-300 ease-out group-hover:text-stone-300
                    max-w-xs sm:max-w-none
                  "
                  >
                    {card.description}
                  </p>
                </div>
              </m.div>

              {index < HERO_ADVANTAGES_CARDS.length - 1 && (
                <m.div
                  variants={cardVariants}
                  className="flex justify-center lg:block"
                >
                  <Separator
                    orientation="horizontal"
                    className="bg-gray-100 w-16 sm:hidden"
                  />
                  <Separator
                    orientation="vertical"
                    className="bg-gray-100 hidden lg:block h-20 opacity-60"
                  />
                </m.div>
              )}
            </React.Fragment>
          ))}
        </m.div>
      </LazyMotion>
    </div>
  </div>
);
