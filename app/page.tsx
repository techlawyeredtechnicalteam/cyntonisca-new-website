import Image from "next/image";
import { Code2, Smartphone, Scale, Mail, ArrowRight } from "lucide-react";
import Whatwedo from "./components/whatwedo";
import Whoweare from "./components/whoweare";
import { HomeHero } from "./components/HomeHero";
import TechStack from "./components/TechStack";
import OurAdvantage from "./components/OurAdvantage";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <TechStack />
      <Whoweare />
      <Whatwedo />
      <OurAdvantage />
    </div>
  );
}