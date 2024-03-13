"use client";

import React from "react";
import NavLink from "./NavLink";
import { useSession } from "next-auth/react";

export default function Navigations() {
  const session = useSession();
  // console.log(session);

  return (
    <nav>
      <ul className="flex gap-x-10">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/psychologists">Psychologists</NavLink>
        </li>
        {session?.data && (
          <li>
            <NavLink href="/favorites">Favorites</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
