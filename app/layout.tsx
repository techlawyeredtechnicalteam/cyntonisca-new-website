import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyntonisca | Legal Technology Solutions",
  description:  "Cyntonisca combines law and technology to deliver innovative solutions that make legal services more accessible, efficient, and effective.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
  <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <GetInTouch />
        <Footer />
      </body>
    </html>
  );
}
