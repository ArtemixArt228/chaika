import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TActivityCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
};

export const ActivityCard = ({
  cardTitle,
  cardDescription,
  cardImage,
}: TActivityCardProps) => {
  return (
    <Card className="max-w-99 w-99 h-72 relative p-0 border-0">
      <div className="absolute w-full z-10 p-6 -bottom-16">
        <CardHeader className="bg-night-rider rounded-xl text-center px-6 py-4">
          <CardTitle className="text-white uppercase">{cardTitle}</CardTitle>
          <CardDescription className="text-stone-400">
            {cardDescription}
          </CardDescription>
          <Button variant="link" className="uppercase text-main">
            Більше
          </Button>
        </CardHeader>
      </div>
      <CardContent className="relative w-full h-full">
        <Image
          fill
          className="object-cover w-full h-full rounded-xl"
          src={cardImage}
          alt="Activity card"
        />
      </CardContent>
    </Card>
  );
};
