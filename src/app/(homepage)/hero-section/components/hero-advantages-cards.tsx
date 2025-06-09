import React from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

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

export const HeroAdvantagesCards = () => {
  return (
    <div className="lg:absolute z-10 lg:-bottom-17 w-full">
      <div className="lg:container mx-auto">
        <div className="flex flex-col gap-10 p-2 lg:flex-row lg:h-36 lg:px-12 lg:py-10 bg-night-rider lg:rounded-xl lg:justify-between">
          {HERO_ADVANTAGES_CARDS.map((card, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="h-16 w-16 relative shrink-0 overflow-hidden flex items-center justify-center">
                  <Image
                    className="h-full w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    fill
                    alt={card.alt}
                    src={card.icon}
                  />
                </div>
                <div className="flex flex-col items-center lg:items-start justify-center">
                  <h3 className="text-2xl uppercase text-gray-100 text-center lg:text-left">
                    {card.title}
                  </h3>
                  <p className="text-base text-stone-400 text-center lg:text-left">
                    {card.description}
                  </p>
                </div>
              </div>
              {index < HERO_ADVANTAGES_CARDS.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="bg-gray-100 hidden lg:block"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
