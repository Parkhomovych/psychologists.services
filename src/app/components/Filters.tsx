import clsx from "clsx";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
const arr = [
  "A to Z",
  "Z to A",
  "Less than 10$",
  "Greater than 10$",
  "Popular",
  "Not popular",
  "Show all",
];
type Props = {
  filter: string;
  hendleFilter: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
type TagName = "INPUT" | "P" | "LI";
export default function Filters({ filter, hendleFilter }: Props) {
  const [isOpen, setisOpen] = useState(false);
  const hendleOpen = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tag: TagName[] = ["INPUT", "P", "LI"];
    if (tag.includes((event.target as HTMLElement).tagName as TagName)) {
      setisOpen((pS) => !pS);
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
          className=" px-[18px] py-[12px] text-white bg-green hover:bg-activeGreen animateColor rounded-[14px] cursor-pointer outline-none "
          type="text"
          value={filter}
          readOnly
        />
        {isOpen ? (
          <IoIosArrowUp className=" absolute top-3.5 left-[186px] w-[20px] h-[20px] text-white" />
        ) : (
          <IoIosArrowDown className=" absolute top-3.5 left-[186px] w-[20px] h-[20px] text-white" />
        )}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, position: "absolute", zIndex: 99 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" w-[220px] absolute top-14 z-50 py-4 px-[18px] bg-[#fff] dark:bg-gray-700 rounded-[14px]"
            >
              <ul onClick={hendleFilter}>
                {arr.map((i) => {
                  return (
                    <li key={i}>
                      <p
                        className={clsx(
                          " dark:hover:text-gray-50 animateColor",
                          i === filter
                            ? "text-black dark:text-gray-50"
                            : "text-black06 dark:text-gray-500"
                        )}
                      >
                        {i}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
