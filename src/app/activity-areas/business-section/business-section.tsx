import React from "react";

import { MainButton } from "@/components/shared/button";

import { BusinessItem } from "@/app/activity-areas/business-section/components/business-item";
import { BusinessInfo } from "@/app/activity-areas/business-section/components/business-info";

const BUSINESS_ITEMS = [
  {
    businessImage: "/activity-areas/business-section/image-1.png",
    businessHeadline: "Агробізнес",
    businessDescription:
      "Ми вирощуємо пшеницю, ячмінь, ріпак, кукурудзу, сою, соняшник та цукровий буряк. Соняшник і ріпак реалізуємо повністю. Частину пшениці і кукурудзи переробляємо на корми для свиней та птиці, решту продаємо.",
    businessSubimage1: "/activity-areas/business-section/subimage-1.png",
    businessSubimage2: "/activity-areas/business-section/subimage-2.png",
  },
  {
    businessImage: "/activity-areas/business-section/image-2.png",
    businessHeadline: "Тваринництво",
    businessDescription:
      "Вирощуємо курей бройлерів породи Ross 308 з одночасною посадкою до 250 000 голів. Завдяки впровадженню інтенсивних технологій та високому рівню менеджменту досягаємо оптимального росту птиці з конверсією корму 1.6-1.62.",
    businessSubimage1: "/activity-areas/business-section/subimage-3.png",
    businessSubimage2: "/activity-areas/business-section/subimage-4.png",
  },
  {
    businessImage: "/activity-areas/business-section/image-3.png",
    businessHeadline: "М’ясопереробка",
    businessDescription:
      "Для забезпечення високої якості продукції та задоволення потреб ринку ми активно займаємось переробкою м’яса. Наразі будуються потужності для забою свиней потужністю 35 голів на годину.",
    businessSubimage1: "/activity-areas/business-section/subimage-5.png",
    businessSubimage2: "/activity-areas/business-section/subimage-6.png",
  },
];
const BUSINESS_INFO = [
  {
    businessHeadline: "Садівництво",
    businessDescription:
      "Щороку збираємо понад 50 тонн яблук з нашого саду. Серед найбільш популярних сортів — Чемпіон, Флоріна, Ліголь та Айдарет.",
    businessSubimage1: "/activity-areas/business-section/image-4.png",
    businessSubimage2: "/activity-areas/business-section/image-5.png",
  },
  {
    businessHeadline: "Комбікорм",
    businessDescription:
      "Для відгодівлі птиці виробляємо 1250 тонн комбікорму на одну посадку, маючи близько 5.7 посадки в рік. Це дозволяє нам забезпечувати стабільність виробництва та високий рівень ефективності.",
    businessSubimage1: "/activity-areas/business-section/image-6.png",
    businessSubimage2: "/activity-areas/business-section/image-7.png",
  },
];

export const BusinessSection = () => {
  return (
    <section className="container mx-auto mb-20">
      {BUSINESS_ITEMS.map((item, i) => (
        <BusinessItem {...item} key={i} reverse={i % 2 !== 0} />
      ))}

      <MainButton text="Співпрацювати" />

      {BUSINESS_INFO.map((item, i) => (
        <BusinessInfo {...item} key={i} />
      ))}
    </section>
  );
};
