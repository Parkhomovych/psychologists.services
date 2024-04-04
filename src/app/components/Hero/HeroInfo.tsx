import { FC } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const HeroInfo: FC = () => {
  return (
    <div className=" w-[595px]">
      <h1 className="mb-5 text-7xl font-semibold text-black dark:text-gray-50 leading-none">
        The road to the <span className="text-green italic">depths</span> of the
        human soul
      </h1>
      <p className="mb-10 text-lg text-black dark:text-gray-50">
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our <br /> experienced
        psychologists.
      </p>

      <Link
        href="/psychologists"
        className=" w-56 h-14 flex justify-center items-center gap-x-1 rounded-full bg-green hover:bg-activeGreen animateColor text-white"
      >
        Get started
        <GoArrowUpRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default HeroInfo;
