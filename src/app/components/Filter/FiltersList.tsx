import { FC } from "react";
import { FiltersListProps } from "@/Types/ComponentProps";
import { FILTERS } from "@/CONSTANTS/filters";
import clsx from "clsx";
import Link from "next/link";

const FiltersList: FC<FiltersListProps> = ({ filter }) => {


  return (
    <ul className=" w-[220px] absolute top-2 z-50 py-4 px-[18px] bg-[#fff] dark:bg-gray-700 rounded-[14px]">
      {FILTERS.map((i) => (
        <li key={i.value}>
          <Link
            href={`/psychologists/${i.path}`}
            className={clsx(
              "dark:text-gray-400 dark:hover:text-gray-50 animateColor block",
              filter === i.value && " text-black dark:text-gray-50"
            )}
          >
            {i.value}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FiltersList;
