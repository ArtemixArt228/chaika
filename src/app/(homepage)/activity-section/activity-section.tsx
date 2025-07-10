"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

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
    cardImage: "/homepage/activity-section/cards/card-1.avif",
  },
  {
    cardTitle: "Тваринництво",
    cardDescription:
      "Піклуємося про тварин і забезпечуємо натуральність кожного продукту",
    cardImage: "/homepage/activity-section/cards/card-2.avif",
  },
  {
    cardTitle: "Садівництво",
    cardDescription:
      "Створюємо ідеальні умови для вирощування екологічно чистих фруктів і ягід",
    cardImage: "/homepage/activity-section/cards/card-3.avif",
  },
  {
    cardTitle: "Мʼясопереробка",
    cardDescription:
      "Власне виробництво м’ясної продукції за найвищими стандартами якості",
    cardImage: "/homepage/activity-section/cards/card-4.avif",
  },
  {
    cardTitle: "Комбікорм",
    cardDescription:
      "Натуральні інгредієнти, збалансований склад і найкращий результат",
    cardImage: "/homepage/activity-section/cards/card-5.avif",
  },
];

export const ActivitySection = () => (
  <LazyMotion features={domAnimation}>
    <m.section
      className="container mx-auto mb-28 sm:mb-32 lg:mb-36 xl:mb-40 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <m.h2
        variants={fadeInUpVariants}
        className="text-center text-white uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl
          mb-6 sm:mb-8 lg:mb-12 px-4 py-3 sm:px-6 sm:py-4 md:px-0 md:py-0
          rounded-lg md:rounded-none font-medium tracking-wide leading-tight max-w-5xl mx-auto"
      >
        Сфери діяльності
      </m.h2>

      <m.p
        variants={textVariants}
        className="text-stone-400 text-center text-sm sm:text-base lg:text-lg xl:text-xl
          max-w-3xl mx-auto mb-16 transition-colors duration-300 ease-out hover:text-stone-300"
      >
        Від вирощування до готової продукції. Ми працюємо на перетині традицій
        та інновацій, обʼєднуючи найкращі природні ресурси з сучасними
        технологіями.
      </m.p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-20 justify-center">
        {ACTIVITY_CARDS.map((card) => (
          <ActivityCard {...card} key={card.cardTitle} />
        ))}
      </div>
    </m.section>
  </LazyMotion>
);
