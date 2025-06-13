import React from "react";

import { ContactRequest } from "@/components/shared/contact-request";

import { HeroSection } from "@/app/products/hero-section/hero-section";
import { ProductionStagesSection } from "@/app/products/production-stages-section/production-stages-section";
import { OurStoresSection } from "@/app/products/our-stores-section/our-stores-section";
import { ProductsSection } from "@/app/products/products-section/products-section";

const ProductsPage = () => {
  return (
    <main className="min-h-dvh">
      <HeroSection />

      <ProductsSection />

      <ProductionStagesSection />

      <OurStoresSection />

      <ContactRequest />
    </main>
  );
};

export default ProductsPage;
