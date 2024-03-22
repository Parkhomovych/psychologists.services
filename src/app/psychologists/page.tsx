import { getPshichologists } from "@/firebase/database/getAll";
import ListOfPsichologists from "../components/ListPychologysts/ListOfPsichologists";

export default async function Psyhologists() {
  const data = await getPshichologists();

  return (
    <>
      <ListOfPsichologists data={data} />
    </>
  );
}
