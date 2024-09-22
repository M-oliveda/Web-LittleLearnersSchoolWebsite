import * as motion from "framer-motion/client";

export default function PagesCardBanner() {
  return (
    <motion.svg
      width="282"
      height="24"
      viewBox="0 0 282 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileInView={{ scale: 1.3 }}
      transition={{ duration: 1 }}
      className="w-[90%]"
    >
      <rect
        width="21"
        height="12"
        transform="translate(242 6)"
        fill="#FFBE99"
      />
      <line x1="242" y1="11" x2="257" y2="11" stroke="black" strokeWidth="2" />
      <circle
        cx="270"
        cy="12"
        r="11"
        fill="white"
        stroke="#262626"
        strokeWidth="2"
      />
      <rect
        width="38"
        height="12"
        transform="translate(194 6)"
        fill="#FFBE99"
      />
      <line x1="194" y1="11" x2="226" y2="11" stroke="black" strokeWidth="2" />
      <rect
        width="38"
        height="12"
        transform="translate(146 6)"
        fill="#FFBE99"
      />
      <line x1="146" y1="11" x2="178" y2="11" stroke="black" strokeWidth="2" />
      <rect width="38" height="12" transform="translate(98 6)" fill="#FFBE99" />
      <line x1="98" y1="11" x2="130" y2="11" stroke="black" strokeWidth="2" />
      <rect width="38" height="12" transform="translate(50 6)" fill="#FFBE99" />
      <line x1="50" y1="11" x2="82" y2="11" stroke="black" strokeWidth="2" />
      <rect width="24" height="12" transform="translate(16 6)" fill="#FFBE99" />
      <line x1="16" y1="11" x2="34" y2="11" stroke="black" strokeWidth="2" />
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="white"
        stroke="#262626"
        strokeWidth="2"
      />
    </motion.svg>
  );
}
