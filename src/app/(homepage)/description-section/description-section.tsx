import React from "react";
import Image from "next/image";

import { MainButton } from "@/components/shared/button";

export const DescriptionSection = () => {
  return (
    <section className="container mx-auto mb-20">
      <h4 className="bg-main md:bg-transparent text-center text-white uppercase text-2xl md:text-4xl mb-8">
        Від родючих полів до смачних страв – ми створюємо якість природним
        шляхом
      </h4>

      <div className="flex gap-6 px-3 lg:p-0 flex-col-reverse lg:flex-row">
        <div className="grid gap-6 lg:flex-1/2">
          <h6 className="text-white uppercase text-2xl md:text-3xl">
            «Чайка» - натуральність та довіра в кожному аспекті
          </h6>
          <p className="text-stone-400 text-base md:text-xl">
            Компанія «Чайка» веде успішну діяльність на землях площею понад 3500
            гектарів, де ми займаємося вирощуванням сільськогосподарських
            культур, тваринництвом, садівництвом і м’ясопереробкою.
          </p>
          <p className="text-stone-400 text-base md:text-xl">
            Ми не лише вирощуємо та переробляємо сільськогосподарську продукцію,
            а й розвиваємо сучасні технології для досягнення високих результатів
            у всіх сферах. Наш підхід до бізнесу — це гармонійне поєднання
            традицій та новітніх технологій.
          </p>

          <MainButton text="Більше" />
        </div>

        <div className="relative h-56 lg:h-auto lg:flex-1/2">
          <div className="absolute w-50 h-40 lg:w-94 lg:h-81 rounded-xl bottom-8 right-0 z-10">
            <Image
              src="/homepage/description-section/seed.png"
              alt="Seed"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="absolute w-50 h-40 lg:w-94 lg:h-81 rounded-xl bottom-0 left-0">
            <Image
              src="/homepage/description-section/field.png"
              alt="Field"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
