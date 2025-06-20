"use client";

import React from "react";
import { motion } from "framer-motion";

import { OurValuesCard } from "@/app/about/our-values-section/components/our-values-card";
import { fadeInUpVariants } from "@/constants/animations";

const OUR_VALUES_CARDS = [
  {
    cardTitle: "Інноваційне вирощування врожаю",
    cardDescription:
      "Впровадження сучасних агротехнологій, що дозволило підвищити врожайність та зменшити вплив на навколишнє середовище",
    cardImage: "/about/our-values-section/card-1.svg",
  },
  {
    cardTitle: "Високі стандарти утримання тварин",
    cardDescription:
      "Досягнення сертифікації міжнародного рівня за гуманними умовами утримання тварин, що сприяє виробництву екологічно чистого м’яса",
    cardImage: "/about/our-values-section/card-2.svg",
  },
  {
    cardTitle: "Нововведення у садівництві",
    cardDescription:
      "Створення великих садів із застосуванням крапельного зрошення та біозахисту, що забезпечує високу якість органічної продукції",
    cardImage: "/about/our-values-section/card-3.svg",
  },
  {
    cardTitle: "Ефективна м’ясопереробка",
    cardDescription:
      "Запуск сучасного комплексу м’ясопереробки, який дозволяє виробляти продукцію з повним контролем якості на всіх етапах виробництва",
    cardImage: "/about/our-values-section/card-4.svg",
  },
  {
    cardTitle: "Експорт продукції на світові ринки",
    cardDescription:
      "Вихід на світові ринки, із сертифікованими м’ясними та агропродуктами, що відповідають найвищим стандартам",
    cardImage: "/about/our-values-section/card-5.svg",
  },
  {
    cardTitle: "Екологічна відповідальність",
    cardDescription:
      "Запровадження біогазових установок для переробки відходів виробництва, що значно сприяє енергетичній автономності",
    cardImage: "/about/our-values-section/card-6.svg",
  },
];

export const OurValuesSection = () => {
  return (
    <div className="bg-stone-900 pt-60 lg:pt-40 pb-12 mb-32">
      <section className="container mx-auto">
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
          Наші цінності
        </motion.h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-5 p-3 md:px-0">
          {OUR_VALUES_CARDS.map((card, i) => (
            <OurValuesCard key={i} {...card} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};
