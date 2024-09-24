export default function TextCard(props) {
  return (
    <article className="mx-3 my-7 max-w-[504px] flex-grow rounded-[10px] border-2 border-grey-15 bg-white pb-[30px] pl-[30px] pr-[40px] drop-shadow-customone 2xl:drop-shadow-customonexl">
      <div className="-mt-6 inline-block rounded-lg border-2 border-grey-15 bg-orange-90 p-4">
        {props.icon}
      </div>
      <h3 className="mb-4 font-headings text-[22px] font-bold text-grey-10 xl:text-[24px] 2xl:mb-5 2xl:text-[28px]">
        {props.title}
      </h3>
      <p className="font-medium text-grey-30 2xl:text-xl">
        {props.description}
      </p>
    </article>
  );
}
