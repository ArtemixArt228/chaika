import React from "react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TProductCardProps = {
  category: string;
  quality: string;
  name: string;
  image: string;
};

export const ProductCard = ({
  category,
  name,
  quality,
  image,
}: TProductCardProps) => {
  return (
    <Card className="p-0 border-0 rounded-lg overflow-hidden gap-0">
      <CardContent className="relative aspect-video">
        <Image
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          fill
          className="object-cover rounded-t w-full h-full"
          src={image}
          alt="Activity card"
        />
      </CardContent>
      <CardHeader className="bg-night-rider rounded-b p-3">
        <div className="flex justify-between">
          <span className="text-main ">{category}</span>
          <span className="text-stone-400">{quality}</span>
        </div>
        <CardTitle className="text-white uppercase text-2xl my-2">
          {name}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
