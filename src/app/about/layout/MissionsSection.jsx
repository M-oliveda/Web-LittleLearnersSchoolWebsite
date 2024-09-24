import MessageCard from "@/components/MessageCard";

import missionIcon from "@/../public/img/mission-icon.svg";
import visionIcon from "@/../public/img/vision-icon.svg";
import Image from "next/image";

function MissionCard(props) {
  return (
    <article className="space-y-10 rounded-[10px] border-2 border-grey-15 bg-white p-10 drop-shadow-customone xl:p-[50px] 2xl:p-[60px] 2xl:drop-shadow-customonexl">
      <div className="flex items-center justify-between">
        <h3 className="font-headings text-[30px] font-bold text-grey-10 xl:text-[38px] 2xl:text-[48px]">
          {props.title}
        </h3>
        <Image
          src={props.icon}
          alt={`${props.title} icon.`}
          className="xl:w-[60px] 2xl:w-[100px]"
        />
      </div>
      <p className="font-medium text-grey-20 2xl:text-xl">
        {props.description}
      </p>
    </article>
  );
}

export default function MissionsSection() {
  return (
    <section className="mx-auto my-20 space-y-[50px] xl:w-11/12">
      <div className="flex flex-col items-center gap-[10px] xl:gap-[14px] 2xl:gap-[19px]">
        <MessageCard>Mission & Visions</MessageCard>
        <h2 className="text-center font-headings text-[38px] font-bold text-grey-10 xl:text-[48px]">
          Our Mission & Visions
        </h2>
        <p className="text-center text-lg text-grey-20 2xl:text-base">
          We are here to provide a nurturing and inclusive environment where
          young minds can thrive, fostering a love for learning and personal
          growth.
        </p>
      </div>
      <div className="space-y-[30px] xl:flex xl:gap-10 xl:space-y-0">
        {missionsCardData.map((item) => (
          <MissionCard
            title={item.title}
            icon={item.icon}
            key={item.title}
            description={item.description}
            id={`our${title.toLowerCase()}`}
          />
        ))}
      </div>
    </section>
  );
}

const missionsCardData = [
  {
    title: "Mission",
    icon: missionIcon,
    description:
      "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
  },
  {
    title: "Vision",
    icon: visionIcon,
    description:
      "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
  },
];
