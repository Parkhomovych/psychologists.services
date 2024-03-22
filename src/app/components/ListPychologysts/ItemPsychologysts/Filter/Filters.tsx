"use client";
import { useState } from "react";
import FiltersList from "./FiltersList";
import IoIosArrow from "../../../IoIosArrow";
import PresencePosition from "../../../Animate/PresencePosition";
import { useParams, usePathname } from "next/navigation";

type TagName = "INPUT" | "A" | "LI" | "svg" | "path";

export default function Filters() {
  const [isOpen, setisOpen] = useState(false);
  const hendleOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tag: TagName[] = ["INPUT", "A", "LI", "svg", "path"];
    if (tag.includes((event.target as HTMLElement).tagName as TagName)) {
      setisOpen((pS) => !pS);
    }
  };
  const pathname = usePathname();
  const valueFilt = () => {
    switch (pathname) {
      case "/psychologists/a-to-z":
        return "A to Z";
      case "/psychologists/z-to-a":
        return "Z to A";
      case "/psychologists/less-than-10$":
        return "Less than 10$";
      case "/psychologists/greater-than-10$":
        return "Greater than 10$";
      case "/psychologists/popular":
        return "Popular";
      case "/psychologists/not-popular":
        return "Not popular";
      default:
        return "Show all";
    }
  };
  return (
    <div className="mb-8">
      <p className="mb-2 font-medium text-black06 dark:text-gray-500">
        Filters
      </p>
      <div
        onClick={hendleOpen}
        className="relative max-w-[220px] cursor-pointer "
      >
        <input
          className="px-[18px] py-[12px] text-white bg-green hover:bg-activeGreen animateColor rounded-[14px] cursor-pointer outline-none"
          type="text"
          readOnly
          value={valueFilt()}
        />
        <IoIosArrow
          isOpen={isOpen}
          style="absolute top-3.5 left-[186px] w-[20px] h-[20px] text-white"
        />
        <PresencePosition isOpen={isOpen} pos="absolute">
          <FiltersList filter={valueFilt()} />
        </PresencePosition>
      </div>
    </div>
  );
}
