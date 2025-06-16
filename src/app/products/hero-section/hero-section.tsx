import React from "react";
import Image from "next/image";

import { MainButton } from "@/components/shared/button";

export const HeroSection = () => {
  return (
    <section className="relative lg:mt-30 mb-26">
      <div className="flex gap-6 items-center">
        <div className="relative w-full h-screen lg:w-1/2 lg:h-130  shrink-0">
          <Image
            src="/products/hero-section/banner.png"
            alt="Products"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 lg:top-0 lg:translate-0 lg:relative p-8 lg:rounded-xl text-white lg:max-w-xl">
          <h1 className="text-2xl md:text-4xl uppercase text-white mb-6">
            Чайка – від ферми до <br /> вашого столу з любов’ю
          </h1>
          <p className="text-stone-300 text-base md:text-xl mb-6">
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
