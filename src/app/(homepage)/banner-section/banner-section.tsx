import React from "react";
import Image from "next/image";

export const BannerSection = () => {
  return (
    <section className="container mx-auto mb-24 lg:mb-52">
      <div className="relative lg:rounded-xl h-92">
        <Image
          src="/homepage/banner-section/banner.png"
          alt="Banner"
          fill
          className="object-cover lg:rounded-xl"
        />
        <div className="absolute w-full z-10 p-6 -bottom-16">
          <div className="bg-night-rider rounded-xl text-center px-6 py-4">
            <h5 className="text-base lg:text-3xl uppercase text-white">
              &#34;Чайка&#34; – це більше, ніж виробництво. Це довіра, якість і
              турбота про майбутнє в кожному нашому рішенні
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};
