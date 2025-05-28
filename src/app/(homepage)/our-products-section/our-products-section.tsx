import React from "react";

import { ProductsSlider } from "@/app/(homepage)/our-products-section/components/products-slider";

export const OurProductsSection = () => {
  return (
    <section className="container mx-auto mb-20">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        Наша продукція
      </h4>
      <p className="text-stone-400 text-xl text-center">
        Нашій компанії довіряють споживачі, адже знають, що уся продукція
        створена з натуральних інгредієнтів
      </p>

      <ProductsSlider />
    </section>
  );
};
