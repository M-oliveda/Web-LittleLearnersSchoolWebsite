import {
  AcademicCapIcon,
  FaceSmileIcon,
  FlagIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import BenefitCard from "./components/BenefitCard";

export default function BenefitsSection() {
  return (
    <section className="my-20 space-y-12 xl:my-[150px] xl:space-y-20 2xl:my-[200px] 2xl:space-y-[100px]">
      <div className="flex flex-col items-center gap-[10px] xl:gap-[14px] 2xl:gap-[19px]">
        <p className="rounded-md border-2 border-black bg-white px-[14px] py-2 text-sm font-medium text-grey-20 xl:text-base 2xl:px-5 2xl:py-[10px] 2xl:text-lg">
          Children Deserve Bright Future
        </p>
        <h2 className="font-headings text-[38px] font-bold text-grey-10 xl:text-[48px] 2xl:text-[58px]">
          Our Benefits
        </h2>
        <p className="text-center text-grey-20 2xl:max-w-[990px] 2xl:text-xl">
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child`&apos`s future.
        </p>
      </div>
      <div className="flex flex-col gap-10 xl:mx-auto xl:grid xl:w-[80%] xl:grid-cols-3 2xl:gap-[50px]">
        {benefitsList.map((item) => (
          <BenefitCard
            title={item.title}
            key={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}

const benefitsList = [
  {
    icon: <AcademicCapIcon type="solid" className="h-6 w-6" />,
    title: "Holistic Learning Approach",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    icon: <ShieldExclamationIcon type="solid" width={24} />,
    title: "Experienced Educators",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    icon: <FaceSmileIcon type="solid" width={24} />,
    title: "Nurturing Environment",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    icon: <FlagIcon type="solid" width={24} />,
    title: "Play-Based Learning",
    description:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    icon: <UserIcon type="solid" width={24} />,
    title: "Individualized Attention",
    description:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    icon: <UserGroupIcon type="solid" width={24} height={24} />,
    title: "Parent Involvement",
    description:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];
