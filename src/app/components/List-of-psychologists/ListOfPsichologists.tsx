import info from "@/app/psychologists.json";
import ItemOfPsichologists from "../Item-of-psychologists/ItemOfPsichologists";

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

export default function ListOfPsichologists() {
  return (
    <>
      <ul className=" flex flex-col gap-y-8  items-center">
        {info.map((item) => (
          <ItemOfPsichologists key={item.name} item={item} />
        ))}
      </ul>
      <div id="modal-box"></div>
    </>
  );
}
