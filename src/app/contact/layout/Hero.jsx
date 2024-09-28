import MessageCard from "@/components/MessageCard";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <article className="mb-20 mt-10 space-y-5 rounded-[10px] border-2 border-grey-15 bg-white bg-[url(/img/abstract-design-3.svg)] bg-[length:100px_100px] bg-left-top bg-no-repeat px-[30px] py-[50px] drop-shadow-customone xl:mx-auto xl:mb-[150px] xl:flex xl:w-11/12 xl:items-center xl:justify-center xl:gap-[50px] xl:bg-[length:137px_137px] xl:px-20 xl:py-[100px] xl:drop-shadow-customonexl 2xl:mb-[200px] 2xl:w-full 2xl:rounded-[12px] 2xl:bg-[length:200px_200px] 2xl:px-[120px] 2xl:py-[150px] 2xl:drop-shadow-customone2xl">
      <div className="flex flex-col items-center xl:items-start">
        <MessageCard>Contact Us</MessageCard>
        <h1 className="mt-[10px] max-w-[600px] text-center font-headings text-[28px] font-bold text-grey-10 xl:text-left xl:text-[38px] 2xl:text-[48px]">
          Feel Free To Connect With Us
        </h1>
      </div>
      <div>
        <p className="max-w-[765px] text-center font-medium text-grey-20 xl:text-left 2xl:text-xl">
          We value open communication and are eager to assist you with any
          inquiries. Feel free to reach out to us through any of the following
          contact methods
        </p>
        <div className="xl:gap-[20[x] mt-[30px] space-y-5 xl:grid xl:grid-cols-2 xl:place-items-stretch xl:space-y-0 2xl:mt-[50px] 2xl:gap-[24px]">
          {contactsItemsData.map((item) => (
            <ContactItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </article>
  );
}

function ContactItem(props) {
  return (
    <div className="flex items-center gap-2 rounded-[10px] border-2 border-grey-15 bg-orange-99 p-4 2xl:rounded-xl 2xl:p-5">
      <div className="rounded-[4px] border-2 border-grey-15 bg-orange-97 p-[6px] 2xl:rounded-[6px] 2xl:p-[8px]">
        {props.icon}
      </div>
      <p className="font-medium text-grey-15 2xl:text-xl">{props.text}</p>
    </div>
  );
}

const contactsItemsData = [
  {
    icon: <EnvelopeIcon type="solid" className="size-5" />,
    text: "hello@littlelearners.com",
  },
  {
    icon: <PhoneIcon type="solid" className="size-5" />,
    text: "+91 91813 23 2309",
  },
  {
    icon: <MapPinIcon type="solid" className="size-5" />,
    text: "Somewhere in the World",
  },
  {
    icon: <ClockIcon type="solid" className="size-5" />,
    text: "Office Hours - 9am - 6 pm",
  },
];
