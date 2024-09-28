import WebsiteHero from "@/components/WebsiteHero";
import WebsiteSection from "@/components/WebsiteSection";
import ExtraActivities from "./layout/ExtraActivites";
import Events from "./layout/Events";
import StudentSupport from "./layout/StudentSupport";

export default function StudentLifePage() {
  return (
    <main>
      <WebsiteHero
        message="Enriching Student Life"
        title="Embracing Learning with Discovery and Joy"
        paragraph="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
      />
      <WebsiteSection
        id="extracurricularactivities"
        message="Our Features"
        title="Extracurricular Activities"
        paragraph="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
      >
        <ExtraActivities />
      </WebsiteSection>
      <WebsiteSection
        id="events"
        message="Our Features"
        title="Events & Celebrations"
        paragraph="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
      >
        <Events />
      </WebsiteSection>
      <WebsiteSection
        id="support"
        message="Our Achievements"
        title="Student Support"
        paragraph="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
      >
        <StudentSupport />
      </WebsiteSection>
    </main>
  );
}
