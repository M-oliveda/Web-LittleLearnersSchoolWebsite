import PagesCardBanner from "./PagesCardBanner";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function PageCard(props) {
  return (
    <article className="flex basis-5/12 flex-col items-center rounded-[10px] border-2 border-grey-15 bg-white p-10 drop-shadow-customonexl">
      <h3 className="mb-5 font-headings text-[28px] text-grey-10 xl:text-[34px] 2xl:text-[48px]">
        {props.title}
      </h3>
      <PagesCardBanner />
      <p className="mb-[40px] mt-[30px] text-center font-medium text-grey-30 2xl:text-xl">
        {props.description}
      </p>
      <Link
        href={props.path}
        className="flex min-w-[278px] items-center justify-center rounded-md border-2 border-grey-15 bg-orange-90 py-4 drop-shadow-customone"
      >
        <span>Learn More</span>
        <ArrowRightIcon className="ml-[13px] h-5 w-5" />
      </Link>
    </article>
  );
}
