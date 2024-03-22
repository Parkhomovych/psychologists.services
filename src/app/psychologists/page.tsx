import Filters from "../components/ListPychologysts/ItemPsychologysts/Filter/Filters";
import ListOfPsichologists from "../components/ListPychologysts/ListOfPsichologists";

export default function Psyhologists() {
  return (
    <div className=" py-6">
      <Filters filter="Shaw all" />
      <ListOfPsichologists filter="all" />
    </div>
  );
}
