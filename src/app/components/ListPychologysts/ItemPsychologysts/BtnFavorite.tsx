"use client";
import { useState } from "react";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import clsx from "clsx";

export default function BtnFavorite({ item }: any) {
  const [isFavorite, setisFavorite] = useState(false);

  const handleFavorite = () => {
    if (!isFavorite) {
      setisFavorite((pS) => !pS);
      // localStorage.setItem("favorite", JSON.stringify(item));
    }
    if (isFavorite) {
      setisFavorite((pS) => !pS);
      // localStorage.setItem("favorite", item);
    }
  };

  return (
    <button
      onClick={handleFavorite}
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
