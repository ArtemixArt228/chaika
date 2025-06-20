import React from "react";

import { OurValuesCard } from "@/app/about/our-values-section/components/our-values-card";

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
        <h4 className="text-center text-white uppercase text-2xl md:text-4xl mb-8">
          Наші цінності
        </h4>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-5 p-3 md:px-0">
          {OUR_VALUES_CARDS.map((card, i) => (
            <OurValuesCard key={i} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
};
