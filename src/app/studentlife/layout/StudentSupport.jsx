import TextCard from "@/components/TextCard";
import {
  BookOpenIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

export default function StudentSupport() {
  return (
    <div className="place-items-stretch justify-items-stretch space-y-[60px] xl:grid xl:grid-cols-3 xl:gap-10 xl:space-y-[0px]">
      {studentsSupportDAta.map((item) => (
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

const studentsSupportDAta = [
  {
    icon: <LightBulbIcon type="solid" className="size-5" />,
    title: "Counseling",
    description:
      "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
  },
  {
    icon: <BookOpenIcon type="solid" className="size-5" />,
    title: "Learning Support",
    description:
      "Our educators provide additional assistance to students who may require extra support in their academic journey.",
  },
  {
    icon: <UserGroupIcon type="solid" className="size-5" />,
    title: "Parent-Teacher Collaboration",
    description:
      "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
  },
];
