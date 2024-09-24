import MessageCard from "@/components/MessageCard";

export default function WebsiteSection(props) {
  return (
    <section
      className="mx-auto my-20 max-w-[1596px] space-y-[50px] xl:my-[154px] xl:space-y-20 2xl:my-[200px] 2xl:space-y-[100px]"
      id={props.id}
    >
      <div className="flex flex-col items-center gap-[10px] xl:gap-[14px] 2xl:gap-[19px]">
        <MessageCard>{props.message}</MessageCard>
        <h2 className="text-center font-headings text-[38px] font-bold text-grey-10 xl:text-[48px]">
          {props.title}
        </h2>
        <p className="max-w-[1196px] text-center text-lg text-grey-20 2xl:text-base">
          {props.paragraph}
        </p>
      </div>
      {props.children && <div>{props.children}</div>}
    </section>
  );
}
