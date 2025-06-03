import React from "react";
import Image from "next/image";

export const SocialSphereSection = () => {
  return (
    <section className="container mx-auto mb-20">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        Соціальна сфера
      </h4>
      <p className="text-stone-400 text-xl text-center">
        Ми будуємо краще завтра, підтримуючи місцеві громади, зберігаючи
        традиції та впроваджуючи інновації у кожній сфері нашої діяльності
      </p>
      <div className="relative rounded-xl h-110">
        <Image
          src="/about/social-sphere-section/banner.png"
          alt="Banner"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
};
