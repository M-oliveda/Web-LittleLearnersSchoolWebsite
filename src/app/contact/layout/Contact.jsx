import Image from "next/image";
import facebookImage from "@/../public/img/facebook.svg";
import xImage from "@/../public/img/twitter.svg";
import linkedinImage from "@/../public/img/linkedin.svg";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="rounded-[10px] border-2 border-grey-15 bg-white px-[30px] py-20 drop-shadow-customone xl:px-20 xl:py-[100px] xl:drop-shadow-customonexl 2xl:px-[120px] 2xl:py-[150px] 2xl:drop-shadow-customone2xl">
      <div className="-mt-[100px] flex items-center justify-center gap-5 xl:-mt-[130px] 2xl:-mt-[180px]">
        <div className="rounded-md border-2 border-grey-15 bg-orange-90 px-6 py-4 xl:px-[50px] 2xl:rounded-lg 2xl:px-[60px] 2xl:py-5">
          <Image src={facebookImage} alt="Facebook image." />
        </div>
        <div className="rounded-md border-2 border-grey-15 bg-orange-90 px-6 py-4 xl:px-[50px] 2xl:rounded-lg 2xl:px-[60px] 2xl:py-5">
          <Image src={xImage} alt="Facebook image." />
        </div>
        <div className="rounded-md border-2 border-grey-15 bg-orange-90 px-6 py-4 xl:px-[50px] 2xl:rounded-lg 2xl:px-[60px] 2xl:py-5">
          <Image src={linkedinImage} alt="Facebook image." />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
