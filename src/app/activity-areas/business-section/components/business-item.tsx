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
      className={cn(
        "flex flex-col-reverse p-3 lg:px-0 lg:flex-row gap-6 items-end mb-20",
        {
          "md:flex-row-reverse": reverse,
        },
      )}
    >
      <div className="w-full md:w-1/2 aspect-[4/3] relative shrink-0">
        <Image
          src={businessImage}
          alt="Business"
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h6 className="text-white uppercase text-3xl">{businessHeadline}</h6>
        <p className="text-stone-400 text-xl">{businessDescription}</p>
        <div className="flex gap-4 flex-row">
          <div className="w-1/2 aspect-[4/3] relative">
            <Image
              src={businessSubimage1}
              alt="Subimage 1"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="w-1/2 aspect-[4/3] relative">
            <Image
              src={businessSubimage2}
              alt="Subimage 2"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
