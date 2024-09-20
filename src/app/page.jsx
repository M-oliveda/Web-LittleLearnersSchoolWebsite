import Banner from "@/components/Banner";
import WebsiteHeader from "@/components/WebsiteHeader";
import HeroSection from "./layout/HeroSection";

export default function HomePage() {
  return (
    <>
      <Banner text="Admission is Open, Grab your seat now" />
      <WebsiteHeader />
      <HeroSection />
    </>
  );
}
