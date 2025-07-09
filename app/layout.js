import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import "./globals.css";
import "./fonts.css";
import localFont from "next/font/local";
import "animate.css";
import "./local_animations.css";
import CustomCursor from "./components/CustomCursor";
import AppLayout from "./components/AppLayout";
import { CursorColorProvider } from "./context/CursorContext";
import { getFooterData } from "@/lib/footer";

export const metadata = {
  title: "Three Chimp Studios – Wild Ideas, Wilder Designs",
  description: "Wild Ideas, Wilder Designs",
};

const helveticaNeueMedium = localFont({
  src: "../public/fonts2/HelveticaNeue-Medium-11.ttf",
  weight: "normal", // specify the correct weight
  style: "normal", // specify the correct style
  variable: "--font-hv-medium",
});

const helveticaNeueRegular = localFont({
  src: "../public/fonts2/HelveticaNeue-01.ttf",
  weight: "normal", // specify the correct weight (e.g., "400")
  style: "normal", // specify the correct style
  variable: "--font-hv-regular",
});

const helveticaNeueBold = localFont({
  src: "../public/fonts2/HelveticaNeue-CondensedBold-05.ttf",
  weight: "bold", // specify the correct weight (e.g., "700")
  style: "normal", // specify the correct style
  variable: "--font-hv-bold",
});

const helveticaNeueExtraBold = localFont({
  src: "../public/fonts/HelveticaNeue-CondensedBlack-10.ttf",
  weight: "bold", // specify the correct weight (e.g., "700")
  style: "normal", // specify the correct style
  variable: "--font-hv-x-bold",
});

export default async function RootLayout({ children }) {
  const getfooter = await getFooterData();
  return (
    <html
      lang="en"
      className={`${helveticaNeueMedium.variable} ${helveticaNeueRegular.variable} ${helveticaNeueBold.variable} ${helveticaNeueExtraBold.variable}`}
    >
      <body className="font-helvetica-neue-medium overflow-x-hidden">
        <CursorColorProvider>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer data={getfooter?.footer} />
        </CursorColorProvider>
      </body>
    </html>
  );
}
