"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function QuestionAnswerItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  function detailsToggleHandler(e) {
    setIsOpen(e.target.open);
  }

  return (
    <details
      className={`rounded-[10px] border-2 border-grey-15 px-6 py-5 ${isOpen ? "bg-white" : "bg-orange-95"} mb-6 inline-block cursor-pointer hover:opacity-75 xl:w-[550px] 2xl:w-[650px]`}
      onToggle={detailsToggleHandler}
    >
      <summary className="flex items-center justify-between text-lg font-semibold text-grey-15 xl:gap-7 2xl:text-[22px]">
        <span>{props.question}</span>
        <button
          type="button"
          className="border-2 border-grey-15 bg-orange-97 p-[6px]"
        >
          {isOpen ? (
            <MinusIcon className="h-5 w-5" />
          ) : (
            <PlusIcon className="h-5 w-5" />
          )}
        </button>
      </summary>
      <p className="mt-6 font-medium text-grey-20 2xl:text-xl">
        {props.answer}
      </p>
    </details>
  );
}
