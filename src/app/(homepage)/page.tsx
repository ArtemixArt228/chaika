import { ContactRequest } from "@/components/shared/contact-request";

import { HeroSection } from "@/app/(homepage)/hero-section/hero-section";
import { DescriptionSection } from "@/app/(homepage)/description-section/description-section";
import { ActivitySection } from "@/app/(homepage)/activity-section/activity-section";
import { BannerSection } from "@/app/(homepage)/banner-section/banner-section";
import { OurProductsSection } from "@/app/(homepage)/our-products-section/our-products-section";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <HeroSection />

      <DescriptionSection />

      <ActivitySection />

      <BannerSection />

      {/*<OurProductsSection />*/}

      {/*<ContactRequest />*/}
    </main>
  );
}
