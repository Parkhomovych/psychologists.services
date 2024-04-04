import { getPsychologists } from "@/firebase/db/getPsychologists";
import ListPsychologists from "../components/ListPsychologists/ListOfPsychologists";
import { FC } from "react";

const Psychologists: FC = async () => {
  const data = await getPsychologists();

  return <ListPsychologists data={data} />;
};
export default Psychologists;
