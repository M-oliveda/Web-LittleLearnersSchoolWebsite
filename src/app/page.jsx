import Banner from "@/components/Banner";
import WebsiteHeader from "@/components/WebsiteHeader";
import HeroSection from "./layout/HeroSection";
import BenefitsSection from "./layout/BenefitsSection";
import TestimonialsSection from "./layout/TestimonialsSection";
import FAQSection from "./layout/FAQSection";
import PagesSection from "./layout/PagesSection";

export default function HomePage() {
  return (
    <>
      <Banner text="Admission is Open, Grab your seat now" />
      <WebsiteHeader />
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
