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
  let filt;

  switch (pathname) {
    case "/psychologists":
      filt = "Show all";
      break;

    default:
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
