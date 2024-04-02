import { getPsychologists } from "@/firebase/database/getPsychologists";
import ListOfPsychologists from "../components/ListPsychologists/ListOfPsychologists";

export default async function Psychologists() {
  const data = await getPsychologists();

  return (
    <>
      <ListOfPsychologists data={data} />
    </>
  );
}
