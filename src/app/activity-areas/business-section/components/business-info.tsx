import React from "react";
import Image from "next/image";

type TBusinessInfoProps = {
  businessHeadline: string;
  businessDescription: string;
  businessSubimage1: string;
  businessSubimage2: string;
};

export const BusinessInfo = ({
  businessHeadline,
  businessDescription,
  businessSubimage1,
  businessSubimage2,
}: TBusinessInfoProps) => {
  return (
    <div className="flex flex-col gap-6 px-3 lg:p-0 mb-20 container mx-auto">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        {businessHeadline}
      </h4>

      <p className="text-stone-400 text-xl text-center">
        {businessDescription}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="w-full sm:w-1/2 aspect-[4/3] relative">
          <Image
            src={businessSubimage1}
            alt="Business Image 1"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="w-full sm:w-1/2 aspect-[4/3] relative">
          <Image
            src={businessSubimage2}
            alt="Business Image 2"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};
