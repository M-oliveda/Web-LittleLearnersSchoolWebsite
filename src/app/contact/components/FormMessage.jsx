"use client";

import { useState } from "react";

export default function FormMessage(props) {
  const [validInput, setValidInput] = useState(true);

  return (
    <div className="flex flex-col space-y-[10px] xl:col-span-2">
      <label
        className="text-xl font-semibold text-grey-30 2xl:text-[22px]"
        htmlFor={props.textid}
      >
        {props.label}
      </label>
      <textarea
        id={props.textid}
        name={props.name}
        placeholder={props.placeholder}
        className={`resize-none rounded-md border-2 border-grey-15 bg-orange-99 p-5 focus:border-orange-65 focus:ring-0 ${props.validate && !validInput && "border-red-400 text-red-400"}`}
        required={props.validate}
        onInvalid={() => setValidInput(false)}
        onBlur={(e) => setValidInput(e.target.checkValidity())}
      ></textarea>
      {props.validate && !validInput && (
        <p className="text-sm font-medium text-red-400">
          Please, write a valid data.
        </p>
      )}
    </div>
  );
}
