import Banner from "@/components/Banner";
import "./globals.css";
import { Raleway, Outfit } from "next/font/google";
import WebsiteHeader from "@/components/WebsiteHeader";
import WebsiteFooter from "@/components/WebsiteFooter";

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
  icons: {
    favicon: "img/favicon.ico",
    icon: "img/icon.svg",
    apple: "img/apple-icon-180x180.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-CA"
      className={`${ralewayFont.variable} ${outfitFont.variable}`}
    >
      <body className="bg-orange-97 px-4 pb-5 pt-10">
        <Banner text="Admission is Open, Grab your seat now" />
        <WebsiteHeader />
        {children}
        <WebsiteFooter />
      </body>
    </html>
  );
}
