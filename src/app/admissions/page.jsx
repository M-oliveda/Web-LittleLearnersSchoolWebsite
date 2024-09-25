import WebsiteHero from "@/components/WebsiteHero";
import WebsiteSection from "@/components/WebsiteSection";
import AdmissionSteps from "./components/AdmissionSteps";

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
    </main>
  );
}
