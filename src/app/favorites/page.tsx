"use client";
import { FC } from "react";
import ListPsychologists from "../components/Psychologists/ListPsychologists/ListOfPsychologists";
import { GetFavoritePsychologists } from "@/firebase/db/getFavoritePsychologists";
import { RotatingLines } from "react-loader-spinner";

const Favorites: FC = () => {
  const data = GetFavoritePsychologists();

  return (
    <>
      {data.length ? (
        <ListPsychologists data={data} />
      ) : (
        <div className=" h-screen flex items-center justify-center">
          <RotatingLines
            visible={true}
            width="124"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      )}
    </>
  );
};

export default Favorites;
