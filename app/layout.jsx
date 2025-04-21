import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import Navbar from "./components/Navbar";

const albert = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${albert.className} ${montserrat.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
