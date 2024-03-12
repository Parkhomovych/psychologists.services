import React from "react";
import NavLink from "./NavLink";

export interface NavigationsProps {
  children?: React.ReactNode;
}

export default function Navigations({ children }: NavigationsProps) {
  return (
    <nav>
      <ul className="flex gap-x-10">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/psychologists">Psychologists</NavLink>
        </li>
      </ul>
    </nav>
  );
}
