import React from "react";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="bg-night-rider h-36 w-full grid place-items-center relative mt-80">
      <h4 className="text-3xl relative z-10 uppercase text-white">
        Сучасність і традиції у закритому циклі виробництва
      </h4>
      <div className="absolute w-full h-full -bottom-25 flex">
        {Array.from({ length: 16 }, (_, i) => (
          <div key={i} className="w-30 h-20 relative">
            <Image
              fill
              src={
                i % 2 === 0
                  ? "/activity-areas/hero-section/icons/icon-1.svg"
                  : "/activity-areas/hero-section/icons/icon-2.svg"
              }
              alt="decor"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
