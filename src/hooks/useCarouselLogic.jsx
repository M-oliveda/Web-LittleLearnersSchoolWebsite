import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";

export default function useCarouselLogic() {
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

  return {
    emblaRef,
    emblaApi,
    canScrollPrev,
    setCanScrollPrev,
    canScrollNext,
    setCanScrollNext,
    scrollPrev,
    scrollNext,
  };
}
