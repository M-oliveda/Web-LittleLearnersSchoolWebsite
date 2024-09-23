import MessageCard from "@/components/MessageCard";

export default function HeroSection() {
  return (
    <article className="mb-20 mt-10 space-y-5 rounded-[10px] border-2 border-grey-15 bg-white bg-[url(/img/abstract-design-3.svg)] bg-[length:100px_100px] bg-left-top bg-no-repeat px-[30px] py-[50px] drop-shadow-customone xl:mx-auto xl:mb-[150px] xl:flex xl:w-11/12 xl:items-center xl:justify-center xl:bg-[length:137px_137px] xl:px-20 xl:py-[100px] xl:drop-shadow-customonexl 2xl:mb-[200px] 2xl:w-full 2xl:rounded-[12px] 2xl:bg-[length:200px_200px] 2xl:px-[120px] 2xl:py-[150px] 2xl:drop-shadow-customone2xl">
      <div className="flex flex-col items-center xl:items-start">
        <MessageCard>Overview</MessageCard>
        <h1 className="mt-[10px] max-w-[765px] text-center font-headings text-[28px] font-bold text-grey-10 xl:text-left xl:text-[38px] 2xl:text-[48px]">
          Welcome to Little Learners Academy
        </h1>
      </div>
      <p className="max-w-[765px] text-center font-medium text-grey-20 xl:text-left 2xl:text-xl">
        A leading kinder garden school dedicated to providing a nurturing and
        stimulating environment for young learners. With a commitment to
        excellence in early education, we believe in shaping curious minds and
        building a strong foundation for a lifelong love of learning. Our
        holistic approach fosters intellectual, social, emotional, and physical
        development, ensuring that each child reaches their full potential.
      </p>
    </article>
  );
}
