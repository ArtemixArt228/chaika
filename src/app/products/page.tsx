import React from "react";

import { HeroSection } from "@/app/products/hero-section/hero-section";
import { ProductionStagesSection } from "@/app/products/production-stages-section/production-stages-section";

const ProductsPage = () => {
  return (
    <main className="min-h-dvh">
      <HeroSection />

      <ProductionStagesSection />
    </main>
  );
};

export default ProductsPage;
