import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Banner(props) {
  return (
    <div className="relative overflow-hidden rounded-md border-2 border-grey-15 bg-orange-90 py-3">
      <span className="absolute -top-2 left-1 z-10 h-8 w-8 bg-[url(/img/abstract-design-1.svg)] bg-cover xl:left-1/4 xl:h-9 xl:w-9" />
      <span className="absolute -bottom-4 -right-1 z-10 h-8 w-8 bg-[url(/img/abstract-design-1.svg)] bg-cover xl:right-1/3" />
      <span className="absolute left-0 top-0 h-[50px] w-[50px] bg-[url(/img/abstract-design-2.svg)] bg-cover opacity-50 xl:w-[150px] xl:bg-[url(/img/abstract-design-2-xl.svg)]" />
      <span className="absolute right-0 top-0 h-[50px] w-[50px] -scale-100 bg-[url(/img/abstract-design-2.svg)] bg-cover opacity-50 xl:w-[150px] xl:scale-100 xl:bg-[url(/img/abstract-design-2-xl.svg)]" />
      <p className="group relative z-10 text-sm font-medium text-grey-15">
        <Link
          href="/admission"
          className="flex items-center justify-center gap-[10px]"
        >
          <span>{props.text}</span>
          <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-2" />
        </Link>
      </p>
    </div>
  );
}
