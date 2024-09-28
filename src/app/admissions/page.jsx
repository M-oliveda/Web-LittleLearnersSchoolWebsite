import WebsiteHero from "@/components/WebsiteHero";
import WebsiteSection from "@/components/WebsiteSection";
import AdmissionSteps from "./components/AdmissionSteps";
import FeesSection from "./layout/FeesSection";

export default function AdmissionsPage() {
  return (
    <main>
      <WebsiteHero
        message="Admission"
        title="Join Our Family of Young Learners"
        paragraph="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />
      <WebsiteSection
        id="steps"
        message="Process"
        title="Admission Process"
        paragraph="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
      >
        <AdmissionSteps />
      </WebsiteSection>
      <WebsiteSection
        id="fees"
        message="Our Features"
        title="Fee Structure"
        paragraph="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
      >
        <FeesSection />
      </WebsiteSection>
    </main>
  );
}
