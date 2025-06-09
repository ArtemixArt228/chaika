import { HeroSlider } from "@/app/(homepage)/hero-section/components/hero-slider";
import { HeroAdvantagesCards } from "@/app/(homepage)/hero-section/components/hero-advantages-cards";

export const HeroSection = () => {
  return (
    <section className="min-h-dvh relative mb-24 lg:mb-52">
      <HeroSlider />
      <HeroAdvantagesCards />
    </section>
  );
};
