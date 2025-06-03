import React from "react";

import { HeroSection } from "@/app/about/hero-section/hero-section";
import { OurValuesSection } from "@/app/about/our-values-section/our-values-section";

export default function About() {
  return (
    <main className="min-h-dvh">
      <HeroSection />

      <OurValuesSection />
    </main>
  );
}
