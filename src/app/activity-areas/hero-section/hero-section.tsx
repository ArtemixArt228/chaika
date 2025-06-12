import React from "react";
import Image from "next/image";

import { Banner } from "@/app/activity-areas/hero-section/components/banner";
import { HeroCard } from "@/app/activity-areas/hero-section/components/hero-card";

export const HeroSection = () => {
  return (
    <section className="min-h-dvh lg:mt-32 mb-32">
      <div className="relative w-full">
        <div className="pt-140 px-3 lg:pt-0 lg:pl-20 lg:pr-0 flex flex-col justify-center items-start">
          <h1 className="text-2xl md:text-4xl relative z-10 uppercase text-white mb-16">
            Ваш надійний партнер <br /> у виробництві!
          </h1>

          <div className="flex flex-col lg:flex-row gap-4 items-center w-full lg:w-auto relative z-10">
            <HeroCard
              title="Закритий цикл виробництва"
              description="Забезпечуємо повний процес від вирощування сировини на власних полях і садах до виготовлення кінцевої продукції"
            />
            <HeroCard
              title="Поєднання інновацій і традицій"
              description="Використовуємо сучасні технології у тваринництві та агробізнесі, зберігаючи органічні принципи вирощування"
            />
          </div>
        </div>

        <div className="w-full h-screen absolute lg:rounded-l-xl lg:h-110 lg:w-3xl top-0 right-0 z-1">
          <Image
            src="/activity-areas/hero-section/field.png"
            alt="Field"
            fill
            className="object-cover lg:rounded-l-xl"
          />
        </div>

        <Banner />
      </div>
    </section>
  );
};
