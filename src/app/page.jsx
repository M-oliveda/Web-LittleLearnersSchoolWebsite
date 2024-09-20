import Banner from "@/components/Banner";
import WebsiteHeader from "@/components/WebsiteHeader";
import HeroSection from "./layout/HeroSection";
import BenefitsSection from "./layout/BenefitsSection";

export default function HomePage() {
  return (
    <>
      <Banner text="Admission is Open, Grab your seat now" />
      <WebsiteHeader />
      <main className="mx-auto xl:w-[80%]">
        <HeroSection />
        <BenefitsSection />
      </main>
    </>
  );
}
