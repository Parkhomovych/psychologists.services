import Header from "./components/Header/Header";
import HeroImg from "./components/HeroImg/Heroimg";
import HeroInfo from "./components/HeroInfo/HeroInfo";
export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto flex items-center justify-between py-20 container">
        <HeroInfo />
        <HeroImg />
      </main>
    </>
  );
}
