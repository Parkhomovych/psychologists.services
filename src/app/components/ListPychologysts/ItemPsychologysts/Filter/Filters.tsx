"use client";
import { useState } from "react";
import FiltersList from "./FiltersList";
import IoIosArrow from "../../../IoIosArrow";
import PresencePosition from "../../../Animate/PresencePosition";

type TagName = "INPUT" | "A" | "LI" | "svg" | "path";

export default function Filters({ filter }: { filter: string }) {
  const [isOpen, setisOpen] = useState(false);

  const hendleOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tag: TagName[] = ["INPUT", "A", "LI", "svg", "path"];
    if (tag.includes((event.target as HTMLElement).tagName as TagName)) {
      setisOpen((pS) => !pS);
    }
  };

  let filt;
  switch (filter) {
    case "a-to-z":
      filt = "A to Z";
      break;
    case "z-to-a":
      filt = "Z to A";
      break;
    case "less-than-10%24":
      filt = "Less than 10$";
      break;
    case "greater-than-10%24":
      filt = "Greater than 10$";
      break;
    case "popular":
      filt = "Popular";
      break;
    case "not-popular":
      filt = "Not popular";
      break;
    default:
      filt = "Show all";
      break;
  }

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
          value={filt}
        />
        <IoIosArrow
          isOpen={isOpen}
          style="absolute top-3.5 left-[186px] w-[20px] h-[20px] text-white"
        />
        <PresencePosition isOpen={isOpen} pos="absolute">
          <FiltersList />
        </PresencePosition>
      </div>
    </div>
  );
}
