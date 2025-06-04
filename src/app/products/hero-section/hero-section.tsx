import React from "react";
import Image from "next/image";

import { MainButton } from "@/components/shared/button";

export const HeroSection = () => {
  return (
    <section className="container mx-auto mt-32 mb-20">
      <div className="flex gap-6 items-end">
        <div className="w-1/2 h-130 relative shrink-0">
          <Image
            src="/products/hero-section/banner.png"
            alt="Products"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 rounded-xl text-white text-center max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Чайка – від ферми до вашого столу з любов’ю
          </h1>
          <p className="text-lg md:text-xl">
            Наш підхід до бізнесу — це гармонійне поєднання традицій та новітніх
            технологій, що забезпечує сталий розвиток та надійність на кожному
            етапі виробництва.
          </p>
          <MainButton text="Співпрацювати" />
        </div>
      </div>
    </section>
  );
};
