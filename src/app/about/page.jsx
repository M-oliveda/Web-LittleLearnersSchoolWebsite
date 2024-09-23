import AwardsSection from "./layout/AwardsSection";
import HeroSection from "./layout/HeroSection";
import HistorySection from "./layout/HistorySection";
import MissionsSection from "./layout/MissionsSection";

export default function AboutUsPage() {
  return (
    <main>
      <HeroSection />
      <MissionsSection />
      <AwardsSection />
      <HistorySection />
    </main>
  );
}
