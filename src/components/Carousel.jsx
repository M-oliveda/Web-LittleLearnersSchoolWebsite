"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Carousel({ children, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const updateScrollState = () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };

      updateScrollState(); // Update state initially
      emblaApi.on("select", updateScrollState); // Update state on slide change

      return () => emblaApi.off("select", updateScrollState); // Cleanup listener
    }
  }, [emblaApi]);

  return (
    <article className="mx-auto w-[90%] xl:relative">
      <div
        className="overflow-hidden xl:flex xl:flex-nowrap xl:justify-center"
        ref={emblaRef}
      >
        <div className="flex space-x-2">{children}</div>
      </div>
      <div className="flex items-center justify-center gap-[20px]">
        <button
          type="button"
          onClick={scrollPrev}
          className="rounded-lg border-2 border-grey-20 bg-white p-3 disabled:opacity-70 xl:absolute xl:left-0 xl:top-1/2"
          disabled={!canScrollPrev}
        >
          <ArrowLeftIcon className="w-3" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="rounded-lg border-2 border-grey-20 bg-white p-3 disabled:opacity-70 xl:absolute xl:right-0 xl:top-1/2"
          disabled={!canScrollNext}
        >
          <ArrowRightIcon className="w-3" />
        </button>
      </div>
    </article>
  );
}
