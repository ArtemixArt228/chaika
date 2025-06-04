import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type TBusinessItemProps = {
  businessImage: string;
  businessHeadline: string;
  businessDescription: string;
  businessSubimage1: string;
  businessSubimage2: string;
  reverse?: boolean;
};

export const BusinessItem = ({
  businessImage,
  businessHeadline,
  businessDescription,
  businessSubimage1,
  businessSubimage2,
  reverse = false,
}: TBusinessItemProps) => {
  return (
    <div
      className={cn("flex gap-6 items-end", {
        "flex-row-reverse": reverse,
      })}
    >
      <div className="w-1/2 h-130 relative shrink-0">
        <Image
          src={businessImage}
          alt="Business"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h6 className="text-white uppercase text-3xl">{businessHeadline}</h6>
        <p className="text-stone-400 text-xl">{businessDescription}</p>
        <div className="flex gap-4">
          <div className="w-76 h-70 relative">
            <Image
              src={businessSubimage1}
              alt="Business"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-76 h-70 relative">
            <Image
              src={businessSubimage2}
              alt="Business"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
