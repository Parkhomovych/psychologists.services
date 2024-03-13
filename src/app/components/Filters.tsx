"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FiltersList from "./FiltersList";
import IoIosArrow from "./IoIosArrow";

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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, position: "absolute", zIndex: 99 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" w-[220px] absolute top-14 z-50 py-4 px-[18px] bg-[#fff] dark:bg-gray-700 rounded-[14px]"
            >
              <FiltersList />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
