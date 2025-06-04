import React from "react";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Banner } from "@/app/activity-areas/hero-section/components/banner";

export const HeroSection = () => {
  return (
    <section className="min-h-dvh mt-32 mb-32">
      <div className="py-8 relative w-full">
        <div className="pl-20 flex flex-col justify-center items-start">
          <h1 className="text-3xl relative z-10 uppercase text-white">
            Ваш надійний партнер у виробництві!
          </h1>

          <div className="flex gap-4 items-center w-full relative z-10">
            <Card className="relative p-3 border-0 shrink-0 min-w-96">
              <CardHeader className="bg-night-rider rounded-xl px-6 py-4">
                <CardTitle className="text-white uppercase">
                  Закритий цикл виробництва
                </CardTitle>
                <CardDescription className="text-stone-400">
                  Забезпечуємо повний процес від вирощування сировини на власних
                  полях і садах до виготовлення кінцевої продукції
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative p-3 border-0 shrink-0 min-w-96">
              <CardHeader className="bg-night-rider rounded-xl px-6 py-4">
                <CardTitle className="text-white uppercase">
                  Поєднання інновацій і традицій
                </CardTitle>
                <CardDescription className="text-stone-400">
                  Використовуємо сучасні технології у тваринництві та
                  агробізнесі, зберігаючи органічні принципи вирощування
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="absolute rounded-l-xl h-110 w-3xl top-0 right-0 z-1">
          <Image
            src="/activity-areas/hero-section/field.png"
            alt="Field"
            fill
            className="object-cover rounded-l-xl"
          />
        </div>

        <Banner />
      </div>
    </section>
  );
};
