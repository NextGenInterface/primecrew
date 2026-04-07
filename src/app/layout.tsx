import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const lato = Lato({
   variable: "--font-Lato",
   weight: ["100", "300", "400", "700", "900"],
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Primecrew",
   description: "Moving & Logistics",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="bg-[#f7f7f7]">
         <body className={`${lato.className} text-[#262626] text-sm sm:text-md md:text-lg xl:text-xl antialiased`}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
