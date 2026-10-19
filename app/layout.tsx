import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Cyntonisca | Legal Technology Solutions",
  description:  "Cyntonisca combines law and technology to deliver innovative solutions that make legal services more accessible, efficient, and effective.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
  <html lang="en">
      <body>
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <GetInTouch />
        <Footer />
      </body>
    </html>
  );
}
