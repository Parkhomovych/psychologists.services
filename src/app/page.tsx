import Link from "next/link";
import HeroImg from "./components/HeroImg/Heroimg";
import { GoArrowUpRight } from "react-icons/go";
export default function Home() {
  return (
    <main className="max-w-7xl mx-auto flex items-center justify-between py-20 px-28">
      <div className=" w-[595px]">
        <h1 className="mb-5 text-7xl font-semibold text-black leading-none">
          The road to the <span className="text-green italic">depths</span> of
          the human soul
        </h1>
        <p className="mb-10 text-lg text-black">
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our <br /> experienced
          psychologists.
        </p>
        <Link
          href="/psychologists"
          className=" w-56 h-14 flex justify-center items-center gap-x-1 rounded-full bg-green hover:bg-hoverGreen transition-color duration-300 text-white"
        >
          Get started
          <GoArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
      <HeroImg />
    </main>
  );
}
