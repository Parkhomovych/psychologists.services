import React from "react";
import NavLink from "./NavLink";
import { cookies } from "next/headers";

export default function Navigation() {
  const token = cookies().get("token")?.value;

  return (
    <nav>
      <ul className="flex gap-x-10">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/psychologists">Psychologists</NavLink>
        </li>
        {token && <NavLink href="/favorites">Favorites</NavLink>}
      </ul>
    </nav>
  );
}
