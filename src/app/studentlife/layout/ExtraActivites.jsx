import TextCard from "@/components/TextCard";
import {
  BeakerIcon,
  BoltIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";

export default function ExtraActivities() {
  return (
    <div className="space-y-[60px] xl:grid xl:grid-cols-3 xl:gap-10 xl:space-y-0">
      {extraActitiesData.map((item) => (
        <TextCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

const extraActitiesData = [
  {
    icon: <BoltIcon type="solid" className="size-5" />,
    title: "Sports and Athletics",
    description:
      "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
  },
  {
    icon: <PaintBrushIcon type="solid" className="size-5" />,
    title: "Art and Creativity",
    description:
      "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
  },
  {
    icon: <MusicalNoteIcon type="solid" className="size-5" />,
    title: "Music and Performing Arts",
    description:
      "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
  },
  {
    icon: <PuzzlePieceIcon type="solid" className="size-5" />,
    title: "Language Clubs",
    description:
      "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
  },
  {
    icon: <BeakerIcon type="solid" className="size-5" />,
    title: "Science Club",
    description:
      "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
  },
  {
    icon: <SparklesIcon type="solid" className="size-5" />,
    title: "Cooking and Culinary Arts",
    description:
      "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
  },
];
