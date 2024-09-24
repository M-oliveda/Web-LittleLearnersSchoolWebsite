import Carousel from "./components/Carousel";
import MessageCard from "@/components/MessageCard";
import {
  BoltIcon,
  ChartBarIcon,
  ChartPieIcon,
} from "@heroicons/react/20/solid";
import AwardsCard from "./components/AwardsCard";

export default function AwardsSection() {
  return (
    <section
      className="mx-auto my-20 max-w-[1596px] space-y-[50px] xl:my-[154px] xl:space-y-20 2xl:my-[200px] 2xl:space-y-[100px]"
      id="awards"
    >
      <div className="flex flex-col items-center gap-[10px] xl:gap-[14px] 2xl:gap-[19px]">
        <MessageCard>Our Achievements</MessageCard>
        <h2 className="text-center font-headings text-[38px] font-bold text-grey-10 xl:text-[48px]">
          Our Awards and Recognitions
        </h2>
        <p className="max-w-[1196px] text-center text-lg text-grey-20 2xl:text-base">
          Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We are
          honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect our
          team&apos;s relentless efforts in creating an exceptional learning
          environment for our students.
        </p>
      </div>
      <div>
        <Carousel items={awardsList.length}>
          {awardsList.map((item) => (
            <div
              className="flex max-w-[425px] shrink-0 grow-0 basis-full flex-col"
              key={item.title}
            >
              <AwardsCard
                title={item.title}
                icon={item.icon}
                description={item.description}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

const awardsList = [
  {
    icon: <ChartPieIcon type="solid" className="h-6 w-6" />,
    title: "Outstanding Early Childhood Education Awar",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    icon: <ChartBarIcon type="solid" className="h-6 w-6" />,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    icon: <BoltIcon type="solid" className="h-6 w-6" />,
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
];
