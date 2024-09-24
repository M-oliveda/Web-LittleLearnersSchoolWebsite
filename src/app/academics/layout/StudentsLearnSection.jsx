import WebsiteSection from "@/components/WebsiteSection";

import studentsLearnImage from "@/../public/img/students-learn.png";
import mathematicsImage from "@/../public/img/mathematics.png";
import scienceImage from "@/../public/img/science.png";
import socialStudiesImage from "@/../public/img/social-studies.png";
import artAndCraftsImage from "@/../public/img/art-and-crafts.png";
import phisicalEducationImage from "@/../public/img/phisical-education.png";
import ImageCard from "@/components/ImageCard";

export default function StudentsLearnSection() {
  return (
    <WebsiteSection
      id=""
      message="Our Features"
      title="What Students Learn"
      paragraph="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
    >
      <div className="place-items-stretch justify-items-stretch space-y-[40px] xl:grid xl:grid-cols-3 xl:gap-10 xl:space-y-0">
        {studentsLearnData.map((item) => (
          <ImageCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </WebsiteSection>
  );
}

const studentsLearnData = [
  {
    image: studentsLearnImage,
    title: "Language Arts",
    description: "Reading, writing, storytelling, and communication skills.",
  },
  {
    image: mathematicsImage,
    title: "Mathematics",
    description: "Number sense, basic operations, problem-solving, and logic.",
  },
  {
    image: scienceImage,
    title: "Science",
    description:
      "Exploring the natural world through hands-on experiments and investigations.",
  },
  {
    image: socialStudiesImage,
    title: "Social Studies",
    description:
      "Cultivating an understanding of diverse cultures and communities.",
  },
  {
    image: artAndCraftsImage,
    title: "Arts and Crafts",
    description: "Encouraging creativity through various art forms and crafts.",
  },
  {
    image: phisicalEducationImage,
    title: "Physical Education",
    description: "Promoting physical fitness, coordination, and teamwork.",
  },
];
