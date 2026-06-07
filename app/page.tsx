import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import InclusionSection from "@/components/sections/InclusionSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <InclusionSection />
      <CTASection />
    </main>
  );
}