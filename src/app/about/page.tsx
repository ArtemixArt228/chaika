import React from "react";

import { HeroSection } from "@/app/about/hero-section/hero-section";
import { OurValuesSection } from "@/app/about/our-values-section/our-values-section";
import { HistorySection } from "@/app/about/history-section/history-section";
import { OurTeamSection } from "@/app/about/our-team-section/our-team-section";

export default function About() {
  return (
    <main className="min-h-dvh">
      <HeroSection />

      <OurValuesSection />

      <HistorySection />

      <OurTeamSection />
    </main>
  );
}
