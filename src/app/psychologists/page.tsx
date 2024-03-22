import { getPshichologists } from "@/firebase/database/getAll";
import Filters from "../components/ListPychologysts/ItemPsychologysts/Filter/Filters";
import ListOfPsichologists from "../components/ListPychologysts/ListOfPsichologists";
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
export default async function Psyhologists() {
  const data = await getPshichologists();

  return (
    <>
      <ListOfPsichologists data={data} />
    </>
  );
}
