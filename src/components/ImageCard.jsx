import Image from "next/image";

export default function ImageCard(props) {
  return (
    <article className="flex flex-col items-center rounded-[10px] border-2 border-grey-15 bg-white bg-[url(/img/image-card-shape.svg)] bg-[length:125px_125px] bg-center bg-no-repeat p-[30px] drop-shadow-customone xl:p-[40px] 2xl:rounded-[12px] 2xl:p-[50px] 2xl:drop-shadow-customonexl">
      <Image
        src={props.image}
        alt={`${props.title} image.`}
        className="mb-[50px]"
      />
      <h3 className="mb-[10px] text-center font-headings text-[22px] font-bold text-grey-10 xl:text-[24px] 2xl:text-[28px]">
        {props.title}
      </h3>
      <p className="text-center font-medium text-grey-30 2xl:text-[20px]">
        {props.description}
      </p>
    </article>
  );
}
