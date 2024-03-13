"use client";
import { useState } from "react";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import clsx from "clsx";

export default function BtnFavorite() {
  const [isFavorite, setisFavorite] = useState(false);

  return (
    <button
      onClick={() => setisFavorite((pS) => !pS)}
      type="button"
      className={clsx(
        `hover:text-activeGreen hover:scale-125 transition-all duration-300 `,
        isFavorite ? `text-green` : `text-black dark:text-gray-200`
      )}
    >
      {isFavorite ? (
        <FaHeart className="w-[26px] h-[26px]" />
      ) : (
        <FaRegHeart className="w-[26px] h-[26px]" />
      )}
    </button>
  );
}
