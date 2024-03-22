import ListOfPsichologists from "@/app/components/ListPychologysts/ListOfPsichologists";
import { getPshichologists } from "@/firebase/database/getAll";

export default async function Page() {
  const data = await getPshichologists();

  return (
    <>
      <ListOfPsichologists data={data} />
    </>
  );
}
