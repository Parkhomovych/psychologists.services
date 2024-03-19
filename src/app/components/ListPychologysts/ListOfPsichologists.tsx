import info from "@/app/psychologists.json";
import ItemOfPsichologists from "./ItemPsychologysts/ItemOfPsichologists";

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

export default function ListOfPsichologists({ filter }: {filter: string}) {
  let cards;

  switch (filter) {
    case "a-to-z":
      cards = [...info].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "z-to-a":
      cards = [...info].sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "less-than-10$":
      cards = [...info].sort((a, b) => a.price_per_hour - b.price_per_hour);
      break;
    case "greater-than-10$":
      cards = [...info].sort((a, b) => a.price_per_hour - b.price_per_hour);
      break;
    case "popular":
      cards = [...info].sort((a, b) => b.rating - a.rating);
      break;
    case "not-popular":
      cards = [...info].sort((a, b) => a.rating - b.rating);
      break;
    default:
      cards = info;
      break;
  }

  return (
    <>
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
