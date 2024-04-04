import { FC } from "react";
import HeroImage from "./components/Hero/HeroImage";
import HeroInfo from "./components/Hero/HeroInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
const Home: FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between py-20">
      <HeroInfo />
      <HeroImage />
    </div>
  );
};

export default Home;
