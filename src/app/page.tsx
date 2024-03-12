import HeroImg from "./components/Heroimg";
import HeroInfo from "./components/HeroInfo";
export default function Home() {
  return (
    <main className="max-w-7xl mx-auto flex items-center justify-between py-20 container">
      <HeroInfo />
      <HeroImg />
    </main>
  );
}
