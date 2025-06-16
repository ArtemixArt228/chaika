import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type TProductionStageItemProps = {
  productionImage: string;
  productionHeadline: string;
  productionDescription: string;
  reverse?: boolean;
};

export const ProductionStageItem = ({
  productionImage,
  productionHeadline,
  productionDescription,
  reverse = false,
}: TProductionStageItemProps) => {
  return (
    <div
      className={cn(
        "flex bg-night-rider lg:bg-transparent flex-col rounded-xl lg:rounded-none lg:flex-row gap-10 items-center mb-16 pb-4 lg:pb-0",
        {
          "flex-col lg:flex-row-reverse": reverse,
        },
      )}
    >
      <div className="w-full lg:w-1/2 aspect-video relative shrink-0">
        <Image
          src={productionImage}
          alt="Production stage"
          fill
          className="object-cover  rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-4 px-3 lg:px-0">
        <h6 className="text-white uppercase text-2xl lg:text-3xl">
          {productionHeadline}
        </h6>
        <p className="text-stone-400 text-base lg:text-xl">
          {productionDescription}
        </p>
      </div>
    </div>
  );
};
