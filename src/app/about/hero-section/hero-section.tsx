import React from "react";
import Image from "next/image";

import { CounterCards } from "@/app/about/hero-section/components/counter-cards";

export const HeroSection = () => {
  return (
    <section className="min-h-dvh mt-0 lg:mt-24 mb-32">
      <div className="relative w-full h-screen lg:h-110 lg:w-3xl rounded-none lg:rounded-r-xl">
        <Image
          src="/about/hero-section/field.png"
          alt="Field"
          fill
          className="object-cover rounded-none lg:rounded-r-xl"
        />

        <div className="absolute right-0 lg:-right-1/3 xl:-right-2/3 top-1/2 -translate-y-1/2 max-w-92 md:max-w-xl">
          <div className="bg-night-rider rounded-l-xl lg:rounded-xl px-6 py-4">
            <h1 className="text-2xl md:text-4xl uppercase text-white mb-6">
              Чайка – смак,
              <br /> вирощений з турботою.
            </h1>
            <p className="text-stone-400 text-base md:text-xl">
              Ми працюємо в агробізнесі, тваринництві, садівництві та
              м’ясопереробці, забезпечуючи повний цикл виробництва з турботою
              про природу і людей
            </p>
          </div>
        </div>
      </div>

      <CounterCards />
    </section>
  );
};
