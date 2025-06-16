import React from "react";

import { ProductionStageItem } from "@/app/products/production-stages-section/components/production-stage-item";

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
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        Етапи виробництва
      </h4>

      {PRODUCTION_STAGE_ITEMS.map((item, i) => (
        <ProductionStageItem key={i} {...item} reverse={i % 2 === 0} />
      ))}
    </section>
  );
};
