import React from "react";
import Image from "next/image";

import { CounterCards } from "@/app/about/hero-section/components/counter-cards";

export const HeroSection = () => {
  return (
    <section className="min-h-dvh mt-32 mb-32">
      <div className="py-8">
        <div className="relative rounded-r-xl h-110 w-3xl">
          <Image
            src="/about/hero-section/field.png"
            alt="Field"
            fill
            className="object-cover rounded-r-xl"
          />

          <div className="absolute -right-full top-1/2 -translate-1/2 w-xl">
            <div className="bg-night-rider rounded-xl text-center px-6 py-4">
              <h1 className="text-3xl uppercase text-white">
                Чайка – смак, вирощений з турботою.
              </h1>
              <p className="text-stone-400 text-xl">
                Ми працюємо в агробізнесі, тваринництві, садівництві та
                м’ясопереробці, забезпечуючи повний цикл виробництва з турботою
                про природу і людей
              </p>
            </div>
          </div>
        </div>

        <CounterCards />
      </div>
    </section>
  );
};
