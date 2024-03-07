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
  const path = usePathname();
  return (
    <Link
      className={clsx(
        "text-black hover:text-activeGreen animateColor",
        path === href && "text-green"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
