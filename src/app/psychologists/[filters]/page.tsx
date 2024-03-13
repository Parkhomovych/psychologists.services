import Filters from "@/app/components/Filters";
import ListOfPsichologists from "@/app/components/ListOfPsichologists";

export default function Page({ params }: { params: { filters: string } }) {
  return (
    <>
      <Filters filter={params.filters}/>
      <ListOfPsichologists filter={params.filters} />
    </>
  );
}
