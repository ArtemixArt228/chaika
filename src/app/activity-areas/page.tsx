import React from "react";

import { HeroSection } from "@/app/activity-areas/hero-section/hero-section";
import { BusinessSection } from "@/app/activity-areas/business-section/business-section";

const ActivityAreasPage = () => {
  return (
    <main className="min-h-dvh">
      <HeroSection />

      <BusinessSection />
    </main>
  );
};

export default ActivityAreasPage;
