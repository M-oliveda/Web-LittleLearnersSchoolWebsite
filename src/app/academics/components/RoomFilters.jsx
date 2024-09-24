"use client";
import { useState } from "react";
import useCarouselLogic from "@/hooks/useCarouselLogic";

export default function RoomFilters(props) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { emblaRef } = useCarouselLogic();

  const filters = [
    "All",
    "Classrooms",
    "Library",
    "Computer Lab",
    "Garden and Nature Area",
  ];

  return (
    <div className="space-x-[10px]">
      <div
        className="overflow-hidden xl:flex xl:flex-nowrap xl:justify-center"
        ref={emblaRef}
      >
        <div className="flex items-start space-x-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={`text-nowrap rounded-md border-2 border-grey-20 px-4 py-[10px] font-semibold text-grey-10 ${item.toLowerCase() === selectedFilter.toLowerCase() ? "bg-orange-65" : "bg-white"}`}
              onClick={() => {
                props.filterRoomsBy(item);
                setSelectedFilter(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
