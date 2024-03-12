"use client";
import info from "@/app/psychologists.json";
import ItemOfPsichologists from "./ItemOfPsichologists";
import Filters from "./Filters";
import { useState } from "react";
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

// я фільтрую масив всіх психологів а треба лише ту частину яку бачить користувач. Вирішити це на стороні бекенду
// типізувати функцію hendleFilter
export default function ListOfPsichologists() {
  const [filter, setFilter] = useState("Show all");

  const hendleFilter = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "P") {
      setFilter(target.textContent || "");
    }
  };

  let cards = info;
  if (filter === "A to Z") {
    cards = [...info].sort((a, b) => a.name.localeCompare(b.name));
  }
  if (filter === "Z to A") {
    cards = [...info].sort((a, b) => b.name.localeCompare(a.name));
  }
  if (filter === "Popular") {
    cards = [...info].sort((a, b) => b.rating - a.rating);
  }
  if (filter === "Not popular") {
    cards = [...info].sort((a, b) => a.rating - b.rating);
  }
  if (filter === "Less than 10$") {
    cards = [...info].sort((a, b) => a.price_per_hour - b.price_per_hour);
  }
  if (filter === "Greater than 10$") {
    cards = [...info].sort((a, b) => b.price_per_hour - a.price_per_hour);
  }

  return (
    <>
      <Filters filter={filter} hendleFilter={hendleFilter} />
      <ul className="mb-16 flex flex-col gap-y-8  items-center">
        {cards.map((item, i) => {
          return <ItemOfPsichologists key={item.name} i={i} item={item} />;
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
