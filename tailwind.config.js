/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        orange: {
          65: "#FF8D4D",
          70: "#FF9E66",
          75: "#FFAE80",
          80: "#FFBE99",
          90: "#FFDECC",
          95: "#FFEFE5",
          97: "#FFEFE5",
          99: "#FFFCFA",
        },
        grey: {
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          30: "#4C4C4D",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          70: "#B3B3B3",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)"],
        headings: ["var(--font-raleway)"],
      },
      dropShadow: {
        customone: "4px 4px 1px #1E1E1E",
        customonexl: "6px 6px 1px #1E1E1E",
        customone2xl: "8px 8px 1px #1E1E1E",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
