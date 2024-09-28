"use client";

import useCarouselLogic from "@/hooks/useCarouselLogic";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Room(props) {
  const { emblaRef, canScrollPrev, canScrollNext, scrollPrev, scrollNext } =
    useCarouselLogic();

  return (
    <article className="relative rounded-xl border-2 border-grey-15 bg-white p-[30px] pt-[120px] drop-shadow-customone">
      <div className="-mt-[200px] overflow-hidden" ref={emblaRef}>
        <div className="flex items-start space-x-2 xl:justify-evenly">
          {props.images.map((path, index) => (
            <Image
              key={`Room image ${index + 1}.`}
              src={path}
              alt={`${path} image.`}
              className="shrink-0 grow-0 basis-full xl:basis-[270px]"
            />
          ))}
        </div>
      </div>
      <div className="mt-[34px] flex flex-col items-center justify-center gap-[20px]">
        <div className="flex items-center justify-center gap-[20px]">
          <button
            type="button"
            onClick={scrollPrev}
            className="rounded-lg border-2 border-grey-20 bg-white p-3 disabled:opacity-70"
            disabled={!canScrollPrev}
          >
            <ArrowLeftIcon className="w-3" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="rounded-lg border-2 border-grey-20 bg-white p-3 disabled:opacity-70"
            disabled={!canScrollNext}
          >
            <ArrowRightIcon className="w-3" />
          </button>
        </div>
        <h3 className="font-headings text-[28px] font-bold text-grey-10 xl:text-[34px] 2xl:text-[40px]">
          {props.title}
        </h3>
      </div>
      <p className="text-center text-lg font-medium text-grey-30 xl:text-xl 2xl:text-[22px]">
        {props.description}
      </p>
    </article>
  );
}
