"use client";
import { FC } from "react";
import ListPsychologists from "../components/Psychologists/ListPsychologists/ListOfPsychologists";
import { GetFavoritePsychologists } from "@/firebase/db/getFavoritePsychologists";
import { RotatingLines } from "react-loader-spinner";

const Favorites: FC = () => {
  const { data, loader } = GetFavoritePsychologists();

  return (
    <>
      {loader && (
        <div className=" h-screen flex items-center justify-center">
          <RotatingLines
            visible={true}
            width="124"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      )}
      {data.length !== 0 && <ListPsychologists data={data} />}
      {data.length === 0 && <h2>Here is empty</h2>}
    </>
  );
};

export default Favorites;
