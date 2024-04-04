import ListPsychologists from "@/app/components/ListPsychologists/ListOfPsychologists";
import { getPsychologists } from "@/firebase/db/getPsychologists";
import { FC } from "react";

const Filters: FC = async () => {
  const data = await getPsychologists();

  return <ListPsychologists data={data} />;
};

export default Filters;
