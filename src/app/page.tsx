
import HeroImg from "./components/HeroImg";
import HeroInfo from "./components/HeroInfo";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between py-20">
      <HeroInfo />
      <HeroImg />
    </div>
  );
}
