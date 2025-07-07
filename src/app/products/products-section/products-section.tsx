import React, { useMemo } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ProductCard } from "@/app/products/products-section/components/product-card";
import productsData from "@/app/products/products-section/product-cards.json";

export const ProductsSection = () => {
  const categories = useMemo(
    () => [
      "сирокопчені",
      "варені",
      "вітчина",
      "копчено-варені",
      "печені",
      "салямі",
    ],
    [],
  );

  // Group products by category
  const productsByCategory = useMemo(() => {
    const grouped: Record<string, typeof productsData.products> = {};

    categories.forEach((category) => {
      grouped[category] = productsData.products.filter(
        (product) => product.category === category,
      );
    });

    return grouped;
  }, [categories]);

  return (
    <section className="container mx-auto mb-16 sm:mb-20 lg:mb-24 xl:mb-36 px-4 sm:px-6 lg:px-8">
      <h4 className="text-2xl md:text-4xl uppercase text-center text-white mb-16">
        Наша продукція
      </h4>

      {/* Accordion Categories */}
      <Accordion type="multiple" className="space-y-6">
        {categories.map((category) => {
          const categoryProducts = productsByCategory[category];

          if (!categoryProducts || categoryProducts.length === 0) {
            return null;
          }

          return (
            <AccordionItem
              key={category}
              value={category}
              className="border cursor-pointer border-zinc-700 rounded-xl overflow-hidden bg-zinc-900"
            >
              <AccordionTrigger className="w-full px-6 py-4 cursor-pointer text-white text-2xl uppercase flex items-center justify-between hover:bg-zinc-800 transition-colors duration-200 hover:no-underline [&[data-state=open]>svg]:text-main">
                <span className="flex items-center gap-3">
                  {category}
                  <span className="text-lg bg-main text-white px-3 py-1 rounded-full">
                    {categoryProducts.length}
                  </span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="px-0 pb-0">
                <div className="p-6 bg-zinc-950/50">
                  <div className="grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-5">
                    {categoryProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        category={product.category}
                        quality={product.quality}
                        name={product.name}
                        image={product.image}
                      />
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* Empty State */}
      {categories.every(
        (category) =>
          !productsByCategory[category] ||
          productsByCategory[category].length === 0,
      ) && (
        <div className="text-center text-white text-xl py-20">
          Товари не знайдено
        </div>
      )}
    </section>
  );
};
