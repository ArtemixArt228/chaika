import React from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

export const HeroAdvantagesCards = () => {
  return (
    <div className="absolute z-10 -bottom-17 w-full">
      <div className="container mx-auto">
        <div className="flex h-36 px-12 py-10 bg-night-rider rounded-xl justify-between">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 relative shrink-0 overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                fill
                alt="Return icon"
                src="/homepage/hero-section/cards/return.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-2xl uppercase text-gray-100">
                Натуральна сировина
              </h3>
              <div className="text-base text-stone-400">
                Продукти, вирощені з любовʼю
              </div>
            </div>
          </div>
          <Separator orientation="vertical" className="bg-gray-100" />
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 relative shrink-0 overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                fill
                alt="Tractor icon"
                src="/homepage/hero-section/cards/tractor.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-2xl uppercase text-gray-100">
                100% автономність
              </h3>
              <div className="text-base text-stone-400">
                Закритий цикл виробництва
              </div>
            </div>
          </div>
          <Separator orientation="vertical" className="bg-gray-100" />
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 relative shrink-0 overflow-hidden flex items-center justify-center">
              <Image
                className="h-full w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                fill
                alt="Shop icon"
                src="/homepage/hero-section/cards/shop.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-2xl uppercase text-gray-100">
                Фірмові магазини
              </h3>
              <div className="text-base text-stone-400">
                8 магазини з продукцією
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
