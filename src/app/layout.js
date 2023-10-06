import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "Koovs",
  description: "Online Shopping for Women & Men's Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen max-w-screen-2xl mx-auto`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
