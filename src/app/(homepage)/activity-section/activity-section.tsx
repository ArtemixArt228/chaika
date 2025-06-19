"use client";

import React from "react";
import { motion } from "framer-motion";

import { ActivityCard } from "@/app/(homepage)/activity-section/components/activity-card";
import {
  containerVariants,
  fadeInUpVariants,
  textVariants,
} from "@/constants/animations";

const ACTIVITY_CARDS = [
  {
    cardTitle: "Агробізнес",
    cardDescription:
      "Вирощуємо високоякісні культури, використовуючи сучасні екологічні підходи",
    cardImage: "/homepage/activity-section/cards/card-1.png",
  },
  {
    cardTitle: "Тваринництво",
    cardDescription:
      "Піклуємося про тварин і забезпечуємо натуральність кожного продукту",
    cardImage: "/homepage/activity-section/cards/card-2.png",
  },
  {
    cardTitle: "Садівництво",
    cardDescription:
      "Створюємо ідеальні умови для вирощування екологічно чистих фруктів і ягід",
    cardImage: "/homepage/activity-section/cards/card-3.png",
  },
  {
    cardTitle: "Мʼясопереробка",
    cardDescription:
      "Власне виробництво м’ясної продукції за найвищими стандартами якості",
    cardImage: "/homepage/activity-section/cards/card-4.png",
  },
  {
    cardTitle: "Комбікорм",
    cardDescription:
      "Натуральні інгредієнти, збалансований склад і найкращий результат",
    cardImage: "/homepage/activity-section/cards/card-5.png",
  },
];

export const ActivitySection = () => {
  return (
    <motion.section
      className="container mx-auto mb-28 sm:mb-32 lg:mb-36 xl:mb-40 px-4 sm:px-6 lg:px-8"
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
        Сфери діяльності
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
        Від вирощування до готової продукції. Ми працюємо на перетині традицій
        та інновацій, об&#39;єднуючи найкращі природні ресурси з сучасними
        технологіями
      </motion.p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-20 justify-center">
        {ACTIVITY_CARDS.map((card, i) => (
          <ActivityCard {...card} key={i} />
        ))}
      </div>
    </motion.section>
  );
};
