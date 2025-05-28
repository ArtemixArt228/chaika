import { HeroSection } from "@/app/(homepage)/hero-section/hero-section";
import { DescriptionSection } from "@/app/(homepage)/description-section/description-section";
import { ActivitySection } from "@/app/(homepage)/activity-section/activity-section";
import { BannerSection } from "@/app/(homepage)/banner-section/banner-section";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <HeroSection />

      <DescriptionSection />

      <ActivitySection />

      <BannerSection />
    </main>
  );
}
