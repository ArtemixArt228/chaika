import React from "react";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TOurValuesCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
};

export const OurValuesCard = ({
  cardImage,
  cardTitle,
  cardDescription,
}: TOurValuesCardProps) => {
  return (
    <Card className="relative border-0 p-0 group transition-colors duration-300 grow h-full">
      <CardHeader className="bg-night-rider group-hover:bg-main rounded-xl px-6 py-4 transition-colors duration-300">
        <Image
          width={64}
          height={64}
          src={cardImage}
          alt="Our values card"
          className="mb-3 transition duration-300 group-hover:filter group-hover:brightness-0"
        />
        <CardTitle className="text-white group-hover:text-white text-xl transition-colors duration-300">
          {cardTitle}
        </CardTitle>
        <CardDescription className="text-stone-400 group-hover:text-white text-base transition-colors duration-300">
          {cardDescription}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
