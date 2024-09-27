"use client";

import { useState } from "react";

export default function FormSelect(props) {
  const [validInput, setValidInput] = useState(true);

  return (
    <div className="flex flex-col space-y-[10px]">
      <label
        className="text-xl font-semibold text-grey-30 2xl:text-[22px]"
        htmlFor={props.inputid}
      >
        {props.label}
      </label>
      <select
        id={props.inputid}
        name={props.name}
        className={`rounded-md border-2 border-grey-15 bg-orange-99 p-5 font-medium text-grey-35 focus:border-orange-65 focus:ring-0 ${props.validate && !validInput && "border-red-400 text-red-400"}`}
        required={props.validate}
        defaultValue=""
        onInvalid={() => setValidInput(false)}
        onBlur={(e) => setValidInput(e.target.checkValidity())}
      >
        {props.children}
      </select>
      {props.validate && !validInput && (
        <p className="text-sm font-medium text-red-400">
          Please, write a valid data.
        </p>
      )}
    </div>
  );
}
