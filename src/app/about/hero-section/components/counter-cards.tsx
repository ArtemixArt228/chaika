import React from "react";

import { Separator } from "@/components/ui/separator";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export const CounterCards = () => {
  return (
    <div className="container mx-auto">
      <div className="flex h-36 px-12 py-10 bg-night-rider rounded-xl justify-between">
        <div className="flex items-center gap-6">
          <AnimatedCounter />
        </div>
        <Separator orientation="vertical" className="bg-gray-100" />
        <div className="flex items-center gap-6">
          <AnimatedCounter />
        </div>
        <Separator orientation="vertical" className="bg-gray-100" />
        <div className="flex items-center gap-6">
          <AnimatedCounter />
        </div>
        <Separator orientation="vertical" className="bg-gray-100" />
        <div className="flex items-center gap-6">
          <AnimatedCounter />
        </div>
      </div>
    </div>
  );
};
