import React from "react";

import { Separator } from "@/components/ui/separator";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export const CounterCards = () => {
  return (
    <div className="container mx-auto mt-12 md:mt-24">
      <div className="flex flex-col md:flex-row md:h-36 max-w-6xl mx-auto gap-10 md:gap-1 md:justify-between">
        <AnimatedCounter from={0} to={30} text="років на ринку" />
        <Separator
          orientation="vertical"
          className="bg-gray-100 hidden md:flex"
        />
        <AnimatedCounter from={0} to={3500} text="гектарів землі" />
        <Separator
          orientation="vertical"
          className="bg-gray-100 hidden md:flex"
        />
        <AnimatedCounter from={0} to={8} text="магазинів офлайн" />
        <Separator
          orientation="vertical"
          className="bg-gray-100 hidden md:flex"
        />
        <AnimatedCounter
          from={0}
          to={10}
          symbol="т"
          text="мʼяса переробляємо"
        />
      </div>
    </div>
  );
};
