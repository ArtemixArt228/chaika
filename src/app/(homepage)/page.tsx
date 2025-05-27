import { HeroSection } from "@/app/(homepage)/hero-section/hero-section";
import { DescriptionSection } from "@/app/(homepage)/description-section/description-section";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <HeroSection />

      <DescriptionSection />
    </main>
  );
}
