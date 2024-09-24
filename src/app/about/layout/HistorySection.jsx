import MessageCard from "@/components/MessageCard";
import HistoryChart from "./components/HistoryChart";

export default function HistorySection() {
  return (
    <section
      className="mx-auto my-20 max-w-[1596px] space-y-[50px] xl:my-[154px] xl:space-y-20 2xl:my-[200px] 2xl:space-y-[100px]"
      id="history"
    >
      <div className="flex flex-col items-center gap-[10px] xl:gap-[14px] 2xl:gap-[19px]">
        <MessageCard>Our Progressive Journey</MessageCard>
        <h2 className="text-center font-headings text-[38px] font-bold text-grey-10 xl:text-[48px]">
          Our History
        </h2>
        <p className="max-w-[1196px] text-center text-lg text-grey-20 2xl:text-base">
          Founded with a passion for early education in 2005, our kindergarten
          school boasts a rich history of empowering young learners to reach
          their potential through innovative teaching methods and a supportive
          learning environment
        </p>
      </div>
      <HistoryChart />
    </section>
  );
}
