"use client";

import { useState } from "react";

export default function FormInput(props) {
  const [validInput, setValidInput] = useState(true);

  return (
    <div className="flex flex-col space-y-[10px]">
      <label
        className="text-xl font-semibold text-grey-30 2xl:text-[22px]"
        htmlFor={props.inputid}
      >
        {props.label}
      </label>
      <input
        id={props.inputid}
        name={props.name}
        type={props.type}
        inputMode={props.inputmode ? props.inputmode : "text"}
        className={`group rounded-md border-2 border-grey-15 bg-orange-99 p-5 placeholder:font-medium placeholder:text-grey-35 focus:border-orange-65 focus:ring-0 ${props.validate && !validInput && "border-red-400 text-red-400"}`}
        required={props.validate}
        placeholder={props.placeholder}
        min={props.min && props.min}
        max={props.max && props.max}
        onInvalid={() => setValidInput(false)}
        onBlur={(e) => {
          if (e.target.value != "") {
            setValidInput(e.target.checkValidity());
          }
        }}
      />
      {props.validate && !validInput && (
        <p className="text-sm font-medium text-red-400">
          Please, write a valid data.
        </p>
      )}
    </div>
  );
}
