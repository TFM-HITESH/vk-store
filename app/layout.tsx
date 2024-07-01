import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import Salebar from "@/components/salebar";
import { Hero } from "@/components/hero";
import Faqsection from "@/components/faqsection";
import { Fashion } from "@/components/fashion";
import Marquee from "@/components/marquee";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" !scroll-smooth">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Salebar />
        <Navbar />
        <Marquee />

        <Hero />

        {children}
        <Fashion />
        <Faqsection />
        <Footer />
      </body>
    </html>
  );
}
