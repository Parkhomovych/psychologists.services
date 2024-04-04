"use client";

import { FC } from "react";
import { NavLinkProps } from "@/Types/ComponentProps";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  const path = usePathname();

  return (
    <Link
      className={clsx(
        "relative text-black dark:text-white text-base hover:text-activeGreen duration-300",
        path === href &&
          "after:absolute after:left-[50%] after:translate-x-[-50%] after:block after:w-2 after:h-2 after:rounded-full after:bg-green",
        path.startsWith("/psychologists") &&
          href === "/psychologists" &&
          "after:absolute after:left-[50%] after:translate-x-[-50%] after:block after:w-2 after:h-2 after:rounded-full after:bg-green"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
