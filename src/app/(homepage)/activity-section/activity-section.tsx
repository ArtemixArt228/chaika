import React from "react";

import { ActivityCard } from "@/app/(homepage)/activity-section/components/activity-card";

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
    <section className="container mx-auto mb-20">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        Сфери діяльності
      </h4>
      <p className="text-stone-400 text-xl text-center">
        Від вирощування до готової продукції. Ми працюємо на перетині традицій
        та інновацій, об&#39;єднуючи найкращі природні ресурси з сучасними
        технологіями
      </p>

      <div className="flex flex-wrap gap-x-5 gap-y-20 justify-center">
        {ACTIVITY_CARDS.map((card, i) => (
          <ActivityCard {...card} key={i} />
        ))}
      </div>
    </section>
  );
};
