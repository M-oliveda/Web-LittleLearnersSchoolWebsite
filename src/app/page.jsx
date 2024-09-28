import HeroSection from "./layout/HeroSection";
import BenefitsSection from "./layout/BenefitsSection";
import TestimonialsSection from "./layout/TestimonialsSection";
import FAQSection from "./layout/FAQSection";
import PagesSection from "./layout/PagesSection";

export default function HomePage() {
  return (
    <>
      <main className="mx-auto xl:w-[80%]">
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <PagesSection />
      </main>
    </>
  );
}
