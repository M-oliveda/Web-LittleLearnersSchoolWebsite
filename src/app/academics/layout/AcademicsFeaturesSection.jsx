import WebsiteSection from "@/components/WebsiteSection";
import TextCard from "@/components/TextCard";
import {
  BookOpenIcon,
  ChartBarIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  StarIcon,
  SunIcon,
} from "@heroicons/react/20/solid";

export default function AcademicsFeaturesSection() {
  return (
    <WebsiteSection
      id="specialfeatures"
      message="Our Features"
      title="Our Special Features"
      paragraph="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
    >
      <div className="place-items-stretch justify-items-stretch xl:grid xl:grid-cols-3 xl:gap-10">
        {academicsSpecialFeaturesData.map((item) => (
          <TextCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </WebsiteSection>
  );
}

const academicsSpecialFeaturesData = [
  {
    icon: <BookOpenIcon type="solid" className="size-6" />,
    title: "Thematic Learning",
    description:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    icon: <ChartBarIcon type="solid" className="size-6" />,
    title: "STEAM Education",
    description:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
  },
  {
    icon: <PuzzlePieceIcon type="solid" className="size-6" />,
    title: "Language Immersion",
    description:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
  },
  {
    icon: <PaintBrushIcon type="solid" className="size-6" />,
    title: "Art and Creativity",
    description:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
  },
  {
    icon: <SunIcon type="solid" className="size-6" />,
    title: "Outdoor Education",
    description:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
  },
  {
    icon: <StarIcon type="solid" className="size-6" />,
    title: "Play-Based Learning",
    description:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
  },
];
