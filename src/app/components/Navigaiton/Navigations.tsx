import Link from "next/link";
import React from "react";

export interface NavigationsProps {
  children?: React.ReactNode;
}

export default function Navigations({ children }: NavigationsProps) {
  return (
    <nav>
      <ul className="flex gap-x-10">
        <li>
          <Link
            className="text-black hover:text-hoverGreen transition-color duration-300"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-black hover:text-hoverGreen transition-color duration-300"
            href="/psychologists"
          >
            Psychologists
          </Link>
        </li>
      </ul>
    </nav>
  );
}
