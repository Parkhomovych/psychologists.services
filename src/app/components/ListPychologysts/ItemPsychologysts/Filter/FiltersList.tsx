import clsx from "clsx";
import Link from "next/link";

export default function FiltersList() {
  return (
    <ul className=" w-[220px] absolute top-2 z-50 py-4 px-[18px] bg-[#fff] dark:bg-gray-700 rounded-[14px]">
      <li>
        <Link
          href="/psychologists/a-to-z"
          className={clsx(
            " dark:text-gray-400 dark:hover:text-gray-50 animateColor block"
          )}
        >
          A to Z
        </Link>
      </li>
      <li>
        <Link
          href="/psychologists/z-to-a"
          className={clsx(
            "dark:text-gray-400 dark:hover:text-gray-50 animateColor block"
          )}
        >
          Z to A
        </Link>
      </li>
      <li>
        <Link
          href="/psychologists/less-than-10$"
          className={clsx(
            "dark:text-gray-400 dark:hover:text-gray-50 animateColor block"
          )}
        >
          Less than 10$
        </Link>
      </li>
      <li>
        <Link
          href="/psychologists/greater-than-10$"
          className={clsx(
            "dark:text-gray-400 dark:hover:text-gray-50 animateColor block"
          )}
        >
          Greater than 10$
        </Link>
      </li>
      <li>
        <Link
          href="/psychologists/popular"
          className={clsx(
            "dark:text-gray-400 dark:hover:text-gray-50 animateColor block"
          )}
        >
          Popular
        </Link>
      </li>
      <li>
        <Link
          href="/psychologists/not-popular"
          className={clsx(
            "dark:text-gray-400 dark:hover:text-gray-50 animateColor block"
          )}
        >
          Not popular
        </Link>
      </li>
      <li>
        <Link
          href="/psychologists"
          className={clsx(
            "dark:text-gray-400 dark:hover:text-gray-50 animateColor block"
          )}
        >
          Show all
        </Link>
      </li>
    </ul>
  );
}
