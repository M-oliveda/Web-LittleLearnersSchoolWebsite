"use client";

import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function TeamMemberCard(props) {
  function copyToClipboardHandler() {
    navigator.clipboard.writeText(props.email);
  }

  return (
    <article className="rounded-[10px] border-2 border-grey-15 bg-white p-[30px] drop-shadow-customone xl:basis-2/5 xl:p-[40px] 2xl:basis-[600px] 2xl:p-[50px]">
      <div className="mb-6 flex items-center">
        <Image
          src={props.profileImage}
          alt={`${props.fullname} profile image.`}
          className="size-16 object-cover"
        />
        <h3 className="ml-[10px] font-headings text-xl font-extrabold xl:text-2xl">
          {props.fullname}
        </h3>
        <button
          type="button"
          onClick={copyToClipboardHandler}
          className="ml-auto block rounded-md border-2 border-grey-15 bg-orange-90 p-[14px]"
        >
          <EnvelopeIcon type="solid" className="size-5" />
        </button>
      </div>
      <div className="rounded-[10px] border-2 border-grey-15 bg-orange-97 p-5 2xl:text-[30px]">
        <p className="mb-4 text-xl font-semibold text-grey-20 2xl:text-2xl">
          Qualification: {props.qualification}
        </p>
        <p className="font-medium text-grey-20 2xl:text-xl">{props.about}</p>
      </div>
    </article>
  );
}
