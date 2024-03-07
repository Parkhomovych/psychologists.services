"use client";
import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  styleBtn?: string;
}
export default function NavLink({ href, children, styleBtn }: NavLinkProps) {
  const path = usePathname();


  return (
    <Link
      className={clsx(
        "text-black hover:text-activeGreen animateColor",
        styleBtn,
        path === href && " text-activeGreen"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
