import MessageCard from "@/components/MessageCard";

export default function HeroSection() {
  return (
    <article className="mb-20 mt-10 space-y-5 rounded-[10px] border-2 border-grey-15 bg-white bg-[url(/img/abstract-design-3.svg)] bg-[length:100px_100px] bg-left-top bg-no-repeat px-[30px] py-[50px] drop-shadow-customone xl:mx-auto xl:mb-[150px] xl:flex xl:w-11/12 xl:items-center xl:justify-center xl:bg-[length:137px_137px] xl:px-20 xl:py-[100px] xl:drop-shadow-customonexl 2xl:mb-[200px] 2xl:w-full 2xl:rounded-[12px] 2xl:bg-[length:200px_200px] 2xl:px-[120px] 2xl:py-[150px] 2xl:drop-shadow-customone2xl">
      <div className="flex flex-col items-center xl:items-start">
        <MessageCard>Academics</MessageCard>
        <h1 className="mt-[10px] max-w-[765px] text-center font-headings text-[28px] font-bold text-grey-10 xl:text-left xl:text-[38px] 2xl:text-[48px]">
          Nurturing Young Minds for Success
        </h1>
      </div>
      <p className="max-w-[765px] text-center font-medium text-grey-20 xl:text-left 2xl:text-xl">
        Welcome to our Academics page, where we take pride in providing a
        comprehensive and stimulating educational experience for your child. Our
        kindergarten school&apos;s academic program is thoughtfully designed to
        foster a love for learning while building a strong foundation of
        essential skills and knowledge. From language arts and mathematics to
        science and social studies, our curriculum is carefully crafted to spark
        curiosity and encourage active exploration.
      </p>
    </article>
  );
}
