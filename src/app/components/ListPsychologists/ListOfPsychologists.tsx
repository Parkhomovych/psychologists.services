"use client";

import ItemOfPsychologists from "./ItemPsychologists/ItemOfPsychologists";
import Filters from "./ItemPsychologists/Filter/Filters";
import { Therapist } from "@/Types/Therapist";
import { useFilter } from "@/hooks/Filters/useFilter";

export default function ListOfPsychologists({ data }: any) {
  const cards = useFilter(data);

  return (
    <>
      <Filters />
      <ul className="mb-16 flex flex-col gap-y-8  items-center">
        {cards.map((item: Therapist) => {
          return <ItemOfPsychologists key={item.id} item={item} />;
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
}
