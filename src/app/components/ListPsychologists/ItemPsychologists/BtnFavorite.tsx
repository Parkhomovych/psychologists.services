"use client";

import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function BtnFavorite({ item }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  const AddFavorite = () => {
    setIsFavorite((pS) => !pS);
    // const data = () => {
    //   updateProfile(auth.currentUser, { displayName: "test" });
    // };
    // data();
  };
  const DeleteFavorite = () => {
    setIsFavorite((pS) => !pS);
  };

  return (
    <div>
      {isFavorite ? (
        <button
          onClick={DeleteFavorite}
          type="button"
          className={` text-green hover:text-activeGreen hover:scale-125 transition-all duration-300`}
        >
          <FaHeart className="w-[26px] h-[26px]" />
        </button>
      ) : (
        <button
          onClick={AddFavorite}
          type="button"
          className={`text-green  hover:text-activeGreen hover:scale-125 transition-all duration-300`}
        >
          <FaRegHeart className="w-[26px] h-[26px]" />
        </button>
      )}
    </div>
  );
}
