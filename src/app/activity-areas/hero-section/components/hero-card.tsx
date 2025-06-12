import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type THeroCardProps = {
  title: string;
  description: string;
};

export const HeroCard = ({ title, description }: THeroCardProps) => (
  <Card className="relative p-0 border-0 w-full lg:shrink-0 lg:min-w-96 lg:max-w-98">
    <CardHeader className="bg-night-rider rounded-xl gap-3 px-6 py-4">
      <CardTitle className="text-white text-xl">{title}</CardTitle>
      <CardDescription className="text-stone-400 text-base">
        {description}
      </CardDescription>
    </CardHeader>
  </Card>
);
