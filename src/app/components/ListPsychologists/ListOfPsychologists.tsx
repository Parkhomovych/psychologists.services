"use client";

import { FC } from "react";
import { ListPsychologistsProps } from "@/Types/ComponentProps";
import { Therapist } from "@/Types/Therapist";
import ItemPsychologists from "../ItemPsychologists/ItemPsychologists";
import Filters from "../Filter/Filters";
import { useFilter } from "@/hooks/Filters/useFilter";

const ListPsychologists: FC<ListPsychologistsProps> = ({ data }) => {
  const cards = useFilter(data);

  return (
    <>
      <Filters />
      <ul className="mb-16 flex flex-col gap-y-8  items-center">
        {cards.map((item: Therapist) => {
          return <ItemPsychologists key={item.id} item={item} />;
        })}
      </ul>
      <button
        type="button"
        className=" block mb-3.5 mx-auto py-3 px-12 text-white bg-green hover:bg-activeGreen animateColor rounded-[30px]"
      >
        Load more
      </button>
    </>
  );
};

export default ListPsychologists;
