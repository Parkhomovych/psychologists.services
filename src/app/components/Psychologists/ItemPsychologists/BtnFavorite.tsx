"use client";
import { BtnFavoriteProps } from "@/Types/ComponentProps";
import useFavoriteStatus from "@/hooks/useFavoriteStatus";
import { FC } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const BtnFavorite: FC<BtnFavoriteProps> = ({ item }) => {
  const [isFavorite, handleFavorite] = useFavoriteStatus(item);

  return (
    <div>
      {isFavorite ? (
        <button
          onClick={handleFavorite}
          type="button"
          className={` text-green hover:text-activeGreen hover:scale-125 transition-all duration-300`}
        >
          <FaHeart className="w-[26px] h-[26px]" />
        </button>
      ) : (
        <button
          onClick={handleFavorite}
          type="button"
          className={`text-green  hover:text-activeGreen hover:scale-125 transition-all duration-300`}
        >
          <FaRegHeart className="w-[26px] h-[26px]" />
        </button>
      )}
    </div>
  );
};

export default BtnFavorite;
