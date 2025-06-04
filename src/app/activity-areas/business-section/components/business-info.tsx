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
    <div className="flex flex-col gap-6">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        {businessHeadline}
      </h4>
      <p className="text-stone-400 text-xl text-center">
        {businessDescription}
      </p>

      <div className="flex items-center gap-4">
        <div className="w-1/2 h-75 relative">
          <Image
            src={businessSubimage1}
            alt="Business"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-1/2 h-75 relative">
          <Image
            src={businessSubimage2}
            alt="Business"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
