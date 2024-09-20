import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function TestimonialCard(props) {
  return (
    <article className="mx-auto flex h-[95%] w-[90%] flex-col items-center gap-5 border-2 border-grey-15 bg-white p-[30px] drop-shadow-customone">
      <div className="inline-block rounded-full bg-orange-90 p-[10px]">
        <Image
          src={props.image}
          width={50}
          height={50}
          alt="Profile image."
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h3 className="text-xl font-semibold text-grey-20 2xl:text-2xl">
        {props.name}
      </h3>
      <div className="flex gap-1">
        {[...Array(props.stars)].map((star) => (
          <StarIcon
            key={star + Math.random()}
            className="h-5 w-5 text-orange-65 2xl:h-6 2xl:w-6"
          />
        ))}
      </div>
      <p className="text-center font-medium text-grey-20 2xl:text-xl">
        {props.testimony}
      </p>
    </article>
  );
}
