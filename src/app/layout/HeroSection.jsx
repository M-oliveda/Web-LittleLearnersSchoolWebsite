import Image from "next/image";
import HeroAbstractDesign from "./components/HeroAbstractDesign";
import HeroStatisticItem from "./components/HeroStatisticsItem";

import heroImage from "@/../public/img/hero-image.png";

export default function HeroSection() {
  return (
    <div className="mb-[80px] mt-[50px] space-y-10 xl:mt-[60px] xl:flex xl:items-center xl:justify-center xl:gap-[50px] 2xl:mt-20 2xl:gap-[60px]">
      <div className="relative bg-orange-80 bg-clip-padding p-2 xl:w-[615px]">
        <Image
          src={heroImage}
          alt="Two children hugging and smiling."
          style={{ width: "100%" }}
        />
        <HeroAbstractDesign />
      </div>
      <div>
        <div className="xl:gap[20px] flex max-w-[800px] flex-col gap-[18px] 2xl:gap-[30px]">
          <div>
            <h1 className="mb-[10px] text-center font-medium underline decoration-solid underline-offset-8 xl:mb-0 xl:text-left xl:text-lg 2xl:text-[22px]">
              Welcome to Little Learners Academy
            </h1>
            <p className="text-center font-headings text-[30px] font-extrabold leading-tight text-grey-10 xl:text-left xl:text-[40px] 2xl:text-[54px]">
              Where Young Minds Blossom and
              <span className="text-orange-65"> Dreams Take Flight.</span>
            </p>
          </div>
          <p className="text-center font-medium text-grey-20 xl:text-left 2xl:text-xl">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
          <div className="space-y-5 rounded-[10px] border-2 border-grey-15 bg-orange-95 p-10 drop-shadow-customone xl:flex xl:items-center xl:justify-between xl:space-y-0 xl:py-5 xl:drop-shadow-customonexl 2xl:drop-shadow-customone2xl">
            <HeroStatisticItem number={7000} text="Students Passed Out" />
            <HeroStatisticItem number={37} text="Awards & Recognitions" />
            <HeroStatisticItem number={15} text="Experience Educators" />
          </div>
        </div>
      </div>
    </div>
  );
}
