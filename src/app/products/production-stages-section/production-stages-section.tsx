"use client";

import React from "react";
import { motion } from "framer-motion";

import { ProductionStageItem } from "@/app/products/production-stages-section/components/production-stage-item";
import { fadeInUpVariants } from "@/constants/animations";

const PRODUCTION_STAGE_ITEMS = [
  {
    productionImage: "/products/production-stages-section/image-1.png",
    productionHeadline: "Вирощування та виробництво комбікорму",
    productionDescription:
      "На власних полях ми вирощуємо екологічно чисті зернові та трав'яні культури, які стають основою для якісних комбікормів. Контроль якості починається ще на цьому етапі, забезпечуючи розробку здорового харчування для тварин у лабораторії.",
  },
  {
    productionImage: "/products/production-stages-section/image-2.png",
    productionHeadline: "Тваринництво",
    productionDescription:
      "На сучасних фермах ми дбаємо про добробут тварин, застосовуючи інноваційні технології та підтримуючи високі стандарти утримання. Це гарантує отримання якісної сировини для подальшого виробництва.",
  },
  {
    productionImage: "/products/production-stages-section/image-3.png",
    productionHeadline: "Переробка м’ясної сировини",
    productionDescription:
      "На м’ясопереробних цехах компанії використовуються сучасні технології обробки, що дозволяють зберегти натуральний смак і корисні властивості продукції. Усі процеси відповідають суворим санітарним нормам і стандартам якості.",
  },
  {
    productionImage: "/products/production-stages-section/image-4.png",
    productionHeadline: "Пакування продукції та доставка",
    productionDescription:
      "М’ясна продукція проходить ретельне вакуумне або герметичне пакування, що зберігає свіжість і якість на тривалий час.Продукція доставляється у роздрібні точки за оптимальних умов транспортування, що гарантує її свіжість і відповідність найвищим стандартам якості.",
  },
];

export const ProductionStagesSection = () => {
  return (
    <section className="container mx-auto mb-20 px-3 lg:px-0">
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
        Етапи виробництва
      </motion.h2>

      {PRODUCTION_STAGE_ITEMS.map((item, i) => (
        <ProductionStageItem key={i} {...item} reverse={i % 2 === 0} />
      ))}
    </section>
  );
};
