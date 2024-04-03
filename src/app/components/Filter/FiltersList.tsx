import clsx from "clsx";
import Link from "next/link";

const FILTERS = [
  { value: "A to Z", path: "a-to-z" },
  { value: "Z to A", path: "z-to-a" },
  { value: "Less than 10$", path: "less-than-10$" },
  { value: "Greater than 10$", path: "greater-than-10$" },
  { value: "Popular", path: "popular" },
  { value: "Not popular", path: "not-popular" },
  { value: "Show all", path: "show-all" },
];
type Props = { filter: string };

export default function FiltersList({ filter }: Props) {
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
}
