export default function HeroStatisticItem(props) {
  return (
    <div className="flex flex-col items-center border-b-2 border-b-grey-15 pb-5 xl:items-start xl:border-b-0 xl:border-b-transparent">
      <p className="text-[34px] font-extrabold text-grey-15 2xl:text-[44px]">
        +{props.number}
      </p>
      <p className="font-medium text-grey-15 2xl:text-lg">{props.text}</p>
    </div>
  );
}
