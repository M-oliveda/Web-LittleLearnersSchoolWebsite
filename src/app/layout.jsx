import "./globals.css";
import { Raleway, Outfit } from "next/font/google";

const ralewayFont = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const outfitFont = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "LittleLearners | Web Development Project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-CA"
      className={`${ralewayFont.variable} ${outfitFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
