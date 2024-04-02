import ListOfPsychologists from "@/app/components/ListPsychologists/ListOfPsychologists";
import { getPsychologists } from "@/firebase/database/getPsychologists";

export default async function Page() {
  const data = await getPsychologists();

  return (
    <>
      <ListOfPsychologists data={data} />
    </>
  );
}
