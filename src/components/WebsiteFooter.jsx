import logo from "@/../public/img/logo.svg";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

import facebookIcon from "@/../public/img/facebook.svg";
import twitterIcon from "@/../public/img/twitter.svg";
import linkedinIcon from "@/../public/img/linkedin.svg";

function ContactComponent(props) {
  return (
    <div className="flex items-center space-x-2">
      <div className="inline-block rounded-[4px] border-2 border-grey-15 bg-orange-97 p-[6px]">
        {props.icon}
      </div>
      <p>{props.name}</p>
    </div>
  );
}

function LinkTree(props) {
  return (
    <ul className="flex flex-col gap-5">
      <li className="font-semibold text-grey-15 2xl:text-xl">
        <Link href={props.root.path}>{props.root.name}</Link>
      </li>
      {props.subpaths.map((item) => (
        <li
          className="max-w-[135px] font-medium text-grey-20 2xl:text-xl"
          key={item.subpath}
        >
          <Link href={`${props.root.path}#f${item.subpath}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function WebsiteFooter() {
  return (
    <footer className="xl:px-80px rounded-xl border-2 border-grey-15 bg-white pb-[30px] pl-[30px] pr-[30px] pt-[60px] drop-shadow-customone xl:mx-[50px] xl:pb-[40px] xl:pt-[80px] 2xl:px-[113px] 2xl:pb-[40px] 2xl:pt-[100px]">
      <div className="xl:flex xl:items-center xl:justify-between">
        <div>
          <div className="flex flex-col items-center xl:items-start">
            <Image src={logo} alt="Website logo." className="mb-4" />
            <p className="max-w-[400px] text-center font-medium text-grey-30 xl:text-left 2xl:text-xl">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className="my-10 space-y-5">
            <ContactComponent
              icon={<EnvelopeIcon className="h-5 w-5" type="solid" />}
              name="hello@littlelearners.com"
            />
            <ContactComponent
              icon={<PhoneIcon className="h-5 w-5" type="solid" />}
              name="+91 91813 23 2309"
            />
            <ContactComponent
              icon={<MapPinIcon className="h-5 w-5" type="solid" />}
              name="Somewhere in the World"
            />
          </div>
        </div>
        <div className="my-10 flex flex-wrap gap-[30px]">
          <LinkTree
            root={{ name: "Home", path: "/" }}
            subpaths={[
              { name: "Features", subpath: "features" },
              { name: "Our Testimonials", subpath: "testimonials" },
              { name: "FAQ", subpath: "faq" },
            ]}
          />
          <LinkTree
            root={{ name: "Academics", path: "/academics" }}
            subpaths={[
              { name: "Special Features", subpath: "specialfeatures" },
              { name: "Gallery", subpath: "gallery" },
            ]}
          />
          <LinkTree
            root={{ name: "About Us", path: "/about" }}
            subpaths={[
              { name: "Our Mission", subpath: "ourmission" },
              { name: "Our Vission", subpath: "ourvission" },
              { name: "Awards and Recognitions", subpath: "awards" },
              { name: "History", subpath: "history" },
              { name: "Teachers", subpath: "teachers" },
            ]}
          />
          <LinkTree
            root={{ name: "Contact Us", path: "/contact" }}
            subpaths={[
              { name: "Information", subpath: "information" },
              { name: "Map & Direction", subpath: "map" },
            ]}
          />
        </div>
      </div>
      <div className="space-x-[10px] border-b border-t border-b-grey-15 border-t-grey-15 py-4 xl:flex xl:items-center xl:justify-between">
        <p className="flex items-center">
          <span className="text-sm font-medium text-grey-20">
            Tearms of Service
          </span>
          <span className="px-4" />
          <span className="text-sm font-medium text-grey-20">
            Privacy Policy
          </span>
          <span className="px-4" />
          <span className="text-sm font-medium text-grey-20">
            Cookie Policy
          </span>
        </p>
        <div className="mt-5 flex justify-center gap-[14px] xl:ml-auto xl:mt-0">
          <Link
            href="#"
            className="rounded-md border-2 border-grey-15 bg-orange-90 p-3 xl:ml-auto"
          >
            <Image src={facebookIcon} alt="Facebook icon." />
          </Link>
          <Link
            href="#"
            className="rounded-md border-2 border-grey-15 bg-orange-90 p-3"
          >
            <Image src={twitterIcon} alt="Twitter icon." />
          </Link>
          <Link
            href="#"
            className="rounded-md border-2 border-grey-15 bg-orange-90 p-3"
          >
            <Image src={linkedinIcon} alt="Linkedin icon." />
          </Link>
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-grey-40 xl:mt-5 xl:text-base 2xl:mt-[30px] 2xl:text-lg">
        <small>
          Copyright ©2023 Little Learners Academy. All rights reserved.
        </small>
      </p>
    </footer>
  );
}
