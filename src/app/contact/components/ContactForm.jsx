"use client";

import { useState, useRef } from "react";
import { sendMail } from "../actions/actions";
import FormInput from "./FormInput";
import FormMessage from "./FormMessage";
import FormSelect from "./FormSelect";

export default function ContactForm() {
  const formRef = useRef(null);
  const [openConfirmationMessage, setOpenConfirmationMessage] = useState(false);

  async function formSubmittionHandler(formData) {
    if (!formRef.current.checkValidity()) {
      return;
    }

    sendMail(formData).then((result) => {
      console.log(result);
      if (result) {
        formRef.current.reset();
        setOpenConfirmationMessage(true);
        setTimeout(() => {
          setOpenConfirmationMessage(false);
        }, 2000);
      }
    });
  }

  return (
    <form
      className="mt-[43px] space-y-[30px] xl:mt-[60px] xl:grid xl:grid-cols-2 xl:gap-[40px] xl:space-y-0 2xl:mt-[80px]"
      action={formSubmittionHandler}
      ref={formRef}
      noValidate={true}
      id="contactform"
    >
      <FormInput
        label="Parent Name"
        inputid="parentName"
        name="parentname"
        type="text"
        placeholder="Enter Parent Name"
        validate={true}
      />
      <FormInput
        label="Email Address"
        inputid="email"
        name="email"
        type="email"
        inputmode="email"
        placeholder="Enter Email Address"
        validate={true}
      />
      <FormInput
        label="Phone Number"
        inputid="phoneNumber"
        name="phonenumber"
        type="text"
        inputmode="tel"
        placeholder="Enter Phone Number"
        validate={true}
      />
      <FormInput
        label="Student Name"
        inputid="studentName"
        name="studentname"
        type="text"
        placeholder="Enter Student Name"
        validate={true}
      />
      <FormInput
        label="Student Age"
        inputid="studentAge"
        name="studentage"
        type="number"
        inputmode="numeric"
        placeholder="Enter Student Age"
        min={6}
        max={18}
        validate={true}
      />
      <FormSelect
        label="Program of Interest"
        inputid="program"
        name="selectedprogram"
        validate={true}
      >
        <option value="" disabled={true} hidden={true}>
          Program of Interest
        </option>
        <option value="science">Science Program</option>
        <option value="mathematics">Mathematics Program</option>
        <option value="literature">Literature Program</option>
        <option value="history">History Program</option>
        <option value="art">Art Program</option>
      </FormSelect>
      <FormMessage
        label="Message"
        textid="message"
        name="message"
        validate={true}
      />

      <button
        type="submit"
        className="block w-full rounded-lg border-2 border-grey-15 bg-orange-75 px-[34px] py-4 text-lg font-medium text-grey-15 transition-colors hover:text-white focus:border-none focus:ring-0 xl:col-span-2 xl:text-xl 2xl:text-[24px]"
      >
        Submit
      </button>
      <p
        className={`font-headings text-xl font-bold text-grey-20 ${openConfirmationMessage ? "block" : "hidden"}`}
      >
        Thank you, your message was sent!
      </p>
    </form>
  );
}
