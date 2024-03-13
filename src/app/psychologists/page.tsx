import Filters from "../components/Filters";
import ListOfPsichologists from "../components/ListOfPsichologists";

export default function Psyhologists() {
  return (
    <>
      <Filters filter="Shaw all" />
      <ListOfPsichologists filter="all" />
    </>
  );
}
