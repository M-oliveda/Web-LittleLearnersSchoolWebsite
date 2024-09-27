import WebsiteSection from "@/components/WebsiteSection";
import Hero from "./layout/Hero";
import Contact from "./layout/Contact";

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <WebsiteSection
        id="message"
        message="Contact Form"
        title="Student Information"
        paragraph="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
      >
        <Contact />
      </WebsiteSection>
    </main>
  );
}
