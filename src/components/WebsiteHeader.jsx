"use client";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import { useClickAway } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  "Home",
  "About Us",
  "Academics",
  "Admissions",
  "Student Life",
  "Contact",
];

function NavLinks() {
  return navLinks.map((linkItem) => (
    <li key={linkItem}>
      <Link
        href={
          linkItem.toLowerCase() === "home"
            ? "/"
            : linkItem.toLowerCase().split(" ").join("")
        }
        className={`block px-[30px] py-[21px] font-medium text-grey-15 transition-colors xl:border-l-2 xl:border-l-grey-15 ${linkItem.toLowerCase() !== "contact" && "hover:text-orange-70"} ${linkItem.toLowerCase() === "contact" && "text-orange-70 hover:text-white xl:bg-orange-70 xl:text-inherit"}`}
      >
        {linkItem[0].toUpperCase() + linkItem.substring(1)}
      </Link>
    </li>
  ));
}

function MobileNavigation() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const ref = useClickAway(() => {
    setOpenNavigation(false);
  });

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="border-l-2 border-l-grey-15 bg-orange-95 px-[30px] py-4 xl:hidden"
        onClick={() => setOpenNavigation(true)}
      >
        <Bars3BottomRightIcon className="h-7 w-7 text-grey-15" />
      </button>
      <div
        className={`fixed left-0 right-0 top-0 z-20 block h-screen bg-zinc-500/40 transition-opacity xl:static xl:h-auto xl:w-auto xl:bg-transparent ${openNavigation ? "w-full opacity-100" : "w-0 opacity-0"}`}
      >
        <nav
          className="absolute right-0 h-full w-[60vw] bg-orange-90 pt-20"
          ref={ref}
        >
          <ul className="flex flex-col items-end">
            <NavLinks />
          </ul>
        </nav>
      </div>
    </div>
  );
}

function DesktopNavigation() {
  return (
    <div className="hidden xl:block">
      <nav>
        <ul className="flex flex-row">
          <NavLinks />
        </ul>
      </nav>
    </div>
  );
}

export default function WebsiteHeader() {
  return (
    <header className="mt-[14px] flex items-stretch justify-between overflow-hidden rounded-lg border-2 border-grey-15 bg-white">
      <div className="border-r-2 border-r-grey-15 bg-orange-70 px-5 py-4">
        <Image
          src="/img/logo.svg"
          width={137}
          alt="LittleLearners logo."
          height={30}
        />
      </div>
      <MobileNavigation />
      <DesktopNavigation />
    </header>
  );
}
