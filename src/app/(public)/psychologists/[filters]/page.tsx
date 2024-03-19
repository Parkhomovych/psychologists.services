import Filters from "@/app/components/ListPychologysts/ItemPsychologysts/Filter/Filters";
import ListOfPsichologists from "@/app/components/ListPychologysts/ListOfPsichologists";

export default function Page({ params }: { params: { filters: string } }) {
  return (
    <>
      <Filters filter={params.filters}/>
      <ListOfPsichologists filter={params.filters} />
    </>
  );
}
