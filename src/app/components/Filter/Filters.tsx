"use client";

import { FC, MouseEvent, useState } from "react";
import FiltersList from "./FiltersList";
import IoIosArrow from "../Icons/IoIosArrow";
import PresencePosition from "../Animate/PresencePosition";
import useValueFilter from "@/hooks/Filters/useValueFilter";

const Filters: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerOpen = (event: MouseEvent<HTMLDivElement>) => {
    const tag = ["INPUT", "A", "LI", "svg", "path"];

    if (tag.includes((event.target as HTMLElement).tagName)) {
      setIsOpen((pS) => !pS);
    }
  };
  const valueFilter = useValueFilter();

  return (
    <div className="mb-8">
      <p className="mb-2 font-medium text-black06 dark:text-gray-500">
        Filters
      </p>
      <div
        onClick={handlerOpen}
        className="relative max-w-[220px] cursor-pointer "
      >
        <input
          className="px-[18px] py-[12px] text-white bg-green hover:bg-activeGreen animateColor rounded-[14px] cursor-pointer outline-none"
          type="text"
          readOnly
          value={valueFilter}
        />
        <IoIosArrow
          isOpen={isOpen}
          style="absolute top-3.5 left-[186px] w-[20px] h-[20px] text-white"
        />
        <PresencePosition isOpen={isOpen} pos="absolute">
          <FiltersList filter={valueFilter} />
        </PresencePosition>
      </div>
    </div>
  );
};

export default Filters;
