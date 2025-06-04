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
      className={cn("flex gap-6 items-end", {
        "flex-row-reverse": reverse,
      })}
    >
      <div className="w-1/2 h-130 relative shrink-0">
        <Image
          src={productionImage}
          alt="Production stage"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h6 className="text-white uppercase text-3xl">{productionHeadline}</h6>
        <p className="text-stone-400 text-xl">{productionDescription}</p>
      </div>
    </div>
  );
};
