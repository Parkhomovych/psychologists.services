import React, { FC } from "react";
import NavLink from "./NavLink";
import { useUserAuth } from "@/app/context/AuthContext";

const Navigation: FC = () => {
  const { user } = useUserAuth();

  return (
    <nav>
      <ul className="flex gap-x-10">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/psychologists">Psychologists</NavLink>
        </li>
        {user && (
          <li>
            <NavLink href="/favorites">Favorites</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
