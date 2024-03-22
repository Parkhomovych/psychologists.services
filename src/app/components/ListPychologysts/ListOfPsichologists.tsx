"use client";

import { usePathname } from "next/navigation";
import ItemOfPsichologists from "./ItemPsychologysts/ItemOfPsichologists";
import Filters from "./ItemPsychologysts/Filter/Filters";
export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}
export interface Therapist {
  name: string;
  avatar_url: string;
  experience: string;
  reviews: Review[];
  price_per_hour: number;
  rating: number;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
}

export default function ListOfPsichologists({ data }: any) {
  const pathname = usePathname();

  let cards: any = data;

  if (pathname === "/psychologists/a-to-z") {
    cards = [...data].sort((a, b) => a.name.localeCompare(b.name));
  }
  if (pathname === "/psychologists/z-to-a") {
    cards = [...data].sort((a, b) => b.name.localeCompare(a.name));
  }
  if (pathname === "/psychologists/less-than-10$") {
    cards = [...data].sort((a, b) => a.price_per_hour - b.price_per_hour);
  }
  if (pathname === "/psychologists/greater-than-10$") {
    cards = [...data].sort((a, b) => b.price_per_hour - a.price_per_hour);
  }
  if (pathname === "/psychologists/popular") {
    cards = [...data].sort((a, b) => b.rating - a.rating);
  }
  if (pathname === "/psychologists/not-popular") {
    cards = [...data].sort((a, b) => a.rating - b.rating);
  }
  return (
    <>
      <Filters />
      <ul className="mb-16 flex flex-col gap-y-8  items-center">
        {cards.map((item: Therapist) => {
          return <ItemOfPsichologists key={item.name} item={item} />;
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
