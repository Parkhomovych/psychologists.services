
import ItemOfPsichologists from "./ItemPsychologysts/ItemOfPsichologists";
import { getPshichologists } from "@/firebase/database/getAll";
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

export default async function ListOfPsichologists() {
  const data = await getPshichologists();
  return (
    <>
      <ul className="mb-16 flex flex-col gap-y-8  items-center">
        {data.map((item: Therapist) => {
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
