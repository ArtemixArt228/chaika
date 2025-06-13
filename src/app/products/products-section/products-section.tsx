import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { ProductCard } from "@/app/products/products-section/components/product-card";

export const ProductsSection = () => {
  return (
    <section className="container mx-auto mb-20">
      <h4 className="text-center text-white uppercase text-4xl mb-8">
        Наша продукція
      </h4>

      <div className="flex items-center gap-10 text-white text-2xl text-center mb-16 uppercase">
        <span>Усі</span>
        <span>Сирокопчені</span>
        <span>Варені</span>
        <span>Вітчина</span>
        <span>Копчено-варені</span>
        <span>Печені</span>
        <span>Салямі</span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-5 px-3 md:px-0 mb-20">
        <ProductCard
          category="вітчина"
          quality="Вищий Ґатунок"
          name="Ковбаса Домашня"
          image="/products/products-section/sausage-homemade.png"
        />
        <ProductCard
          category="вітчина"
          quality="Вищий Ґатунок"
          name="Ковбаса Домашня"
          image="/products/products-section/sausage-homemade.png"
        />
        <ProductCard
          category="вітчина"
          quality="Вищий Ґатунок"
          name="Ковбаса Домашня"
          image="/products/products-section/sausage-homemade.png"
        />
      </div>

      <Pagination>
        <PaginationContent className="flex items-center gap-8 text-2xl">
          <PaginationItem>
            <ChevronLeft className="size-6 text-night-rider" />
          </PaginationItem>
          <PaginationItem className="text-white">1</PaginationItem>
          <PaginationItem className="text-white">2</PaginationItem>
          <PaginationItem className="text-white">3</PaginationItem>
          <PaginationItem>
            <ChevronRight className="size-6 text-night-rider" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};
