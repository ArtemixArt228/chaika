"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { MainButton } from "@/components/shared/button";

import { BusinessItem } from "@/app/activity-areas/business-section/components/business-item";
import { BusinessInfo } from "@/app/activity-areas/business-section/components/business-info";
import { containerVariants, sectionVariants } from "@/constants/animations";

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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-12 sm:py-16 lg:py-24 xl:py-32"
    >
      {/* Main Business Items */}
      <motion.div
        variants={sectionVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-10 sm:mb-12 lg:mb-16"
      >
        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {BUSINESS_ITEMS.map((item, i) => (
            <BusinessItem key={i} {...item} reverse={i % 2 !== 0} index={i} />
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center mb-10">
        <Link href="#contact_us">
          <MainButton text="Співпрацювати" />
        </Link>
      </div>

      {/* Business Info Grid */}
      <motion.div
        variants={sectionVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-20 sm:mt-24 lg:mt-32"
      >
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {BUSINESS_INFO.map((item, i) => (
            <BusinessInfo key={i} {...item} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
