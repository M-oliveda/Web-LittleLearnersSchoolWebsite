import abstractDesign4 from "@/../public/img/abstract-design-4.svg";
import Image from "next/image";

export default function HistoryChart() {
  return (
    <div className="rounded-xl border-2 border-grey-15 bg-white py-[50px] pl-[10px] pr-[20px] drop-shadow-customone xl:p-[100px] 2xl:p-[150px] 2xl:drop-shadow-customonexl">
      {historyData.map((item) => (
        <div
          className="group relative flex gap-x-3 rounded-lg"
          key={item.title}
        >
          {/*  <!-- Icon --> */}
          <div className="relative bg-orange-80 after:absolute after:bottom-0 after:start-3.5 after:top-0 after:w-[2px] after:-translate-x-[0.5px] after:bg-black last:after:hidden">
            <div className="relative top-[100px] z-10 flex size-7 items-center justify-center">
              <div className="size-5 rounded-full border-2 border-grey-15 bg-white"></div>
            </div>
          </div>
          {/* <!-- End Icon --> */}
          <HistoryItem
            year={item.year}
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
}

function HistoryItem(props) {
  return (
    <div className="inline-flex items-start py-14">
      <div className="relative -left-[14px] top-[44px] w-[44px] bg-orange-80 after:absolute after:-left-2 after:right-3 after:top-1/2 after:h-[2px] after:translate-y-[-50%] after:bg-black last:after:hidden">
        <div className="relative -right-[15px] z-10 flex size-7 w-[30px] items-center justify-center xl:-right-[30px]">
          <div className="size-5 rounded-full border-2 border-grey-15 bg-white"></div>
        </div>
      </div>

      <div className="-ml-[14px]">
        <div className="relative mb-[30px] inline-flex items-center gap-5 rounded-[10px] border-2 border-grey-15 bg-white px-6 py-5 drop-shadow-customone">
          <Image
            src={abstractDesign4}
            alt="History item icon."
            className="w-[50px]"
          />
          <p className="font-headings text-[38px] font-bold text-grey-10 xl:text-[48px] 2xl:text-[68px]">
            {props.year}
          </p>
        </div>
        <div>
          <p className="font-headings text-[22px] font-bold xl:text-[24px] 2xl:text-[28px]">
            {props.title}
          </p>
          <p className="max-w-[800px] font-medium 2xl:text-xl">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const historyData = [
  {
    year: 2023,
    title: "Resilience and Future Horizons",
    description:
      "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    year: 2017,
    title: "Innovation and Technology",
    description:
      "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    year: 2012,
    title: "Expansion and Recognition",
    description:
      "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    year: 2005,
    title: "Inception and Growth",
    description:
      "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];
