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
    <Card className="relative p-3 border-0">
      <CardHeader className="bg-night-rider rounded-xl px-6 py-4">
        <Image width={64} height={64} src={cardImage} alt="Our values card" />
        <CardTitle className="text-white uppercase">{cardTitle}</CardTitle>
        <CardDescription className="text-stone-400">
          {cardDescription}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
