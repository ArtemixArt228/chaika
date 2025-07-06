"use client";

import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useMediaQuery } from "@/hooks/use-media-query";

import { ProductCard } from "@/app/products/products-section/components/product-card";
import productsData from "@/app/products/products-section/product-cards.json";

export const ProductsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("усі");

  const isSmallDevice = useMediaQuery("only screen and (max-width : 640px)");

  const itemsPerPage = isSmallDevice ? 3 : 9;

  const categories = [
    "усі",
    "сирокопчені",
    "варені",
    "вітчина",
    "копчено-варені",
    "печені",
    "салямі",
  ];

  // Filter products based on a selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "усі") {
      return productsData.products;
    }

    return productsData.products.filter(
      (product) => product.category === selectedCategory,
    );
  }, [selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start < maxVisiblePages - 1) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <section className="container mx-auto mb-16 sm:mb-20 lg:mb-24 xl:mb-36 px-4 sm:px-6 lg:px-8">
      <h4 className="text-2xl md:text-4xl uppercase text-center text-white mb-16">
        Наша продукція
      </h4>

      {/* Category Filter */}
      <div className="hidden lg:flex items-center gap-10 text-white text-2xl mb-10 uppercase flex-wrap">
        {categories.map((category) => (
          <span
            key={category}
            className={`cursor-pointer transition-colors duration-200 ${
              selectedCategory === category
                ? "text-main border-b-2 border-main"
                : "hover:text-orange-300"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Mobile Category Filter */}
      <div className="lg:hidden mb-8">
        <Select
          value={selectedCategory}
          onValueChange={(value) => handleCategoryChange(value)}
        >
          <SelectTrigger className="w-full py-4 px-5 bg-zinc-900 text-white text-xl uppercase border border-zinc-700 rounded-xl focus:ring-0 focus:outline-none hover:border-main transition">
            <SelectValue placeholder="Усі" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border border-zinc-700 text-white text-xl uppercase rounded-xl shadow-xl">
            {categories.map((category) => (
              <SelectItem
                key={`mobile-${category}`}
                value={category}
                className="uppercase hover:text-orange-300 focus:bg-main focus:text-white"
              >
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-5 mb-20 min-h-[400px]">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              category={product.category}
              quality={product.quality}
              name={product.name}
              image={product.image}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-white text-xl py-20">
            Товари не знайдено
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent className="flex items-center justify-center gap-4 text-2xl">
            <PaginationItem
              className="cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ChevronLeft className="size-8 text-white hover:text-orange-300" />
            </PaginationItem>

            {getPageNumbers().map((pageNum) => (
              <PaginationItem
                key={pageNum}
                className={`cursor-pointer size-9 grid place-items-center rounded ${
                  currentPage === pageNum
                    ? "bg-main text-white"
                    : "text-white hover:bg-orange-300"
                }`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </PaginationItem>
            ))}

            <PaginationItem
              className="cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ChevronRight className="size-8 text-white hover:text-orange-300" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
};
