"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import React from "react";

export interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}
export default function NavLink({ href, children }: NavLinkProps) {
  const path: string = usePathname();
  return (
    <Link
      className={clsx(
        "relative text-black dark:text-white text-base hover:text-activeGreen hover:scale-125 transition-all duration-300  ",
        path === href &&
          "after:absolute after:left-[50%] after:translate-x-[-50%] after:block after:w-2 after:h-2 after:rounded-full after:bg-green"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
