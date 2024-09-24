import WebsiteHero from "@/components/WebsiteHero";
import AcademicsFeatures from "./layout/AcademicsFeaturesSection";
import StudentsLearnSection from "./layout/StudentsLearnSection";

export default function AcademicsPage() {
  return (
    <main>
      <WebsiteHero
        message="Academics"
        title="Nurturing Young Minds for Success"
        paragraph="Welcome to our Academics page, where we take pride in providing a
        comprehensive and stimulating educational experience for your child. Our
        kindergarten school's academic program is thoughtfully designed to
        foster a love for learning while building a strong foundation of
        essential skills and knowledge. From language arts and mathematics to
        science and social studies, our curriculum is carefully crafted to spark
        curiosity and encourage active exploration."
      />
      <AcademicsFeatures />
      <StudentsLearnSection />
    </main>
  );
}
