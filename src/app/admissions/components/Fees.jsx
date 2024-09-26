"use client";

import FeesTable from "./FeesTable";
import { useEffect, useRef, useState } from "react";

export default function Fees(props) {
  const [xPosition, setXPosition] = useState(0);
  const elementRef = useRef(null);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      setMaxScrollLeft(
        elementRef.current.scrollWidth - elementRef.current.clientWidth,
      );
    }
  }, []);

  return (
    <div
      className="no-scrollbar overflow-auto"
      onScroll={(e) => setXPosition(e.target.scrollLeft)}
      ref={elementRef}
    >
      <div className="mx-auto w-[1000px] xl:w-[80%]">
        <div className="rounded-[10px] border-2 border-grey-15 bg-white p-[50px] drop-shadow-customone 2xl:drop-shadow-customonexl">
          <FeesTable theaddata={props.theaddata} tbodydata={props.tbodydata} />
          <div className="mt-[21px] xl:hidden">
            <progress
              value={xPosition}
              max={maxScrollLeft}
              className="progressbar block h-2 w-full cursor-pointer appearance-none rounded-lg bg-grey-15"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
