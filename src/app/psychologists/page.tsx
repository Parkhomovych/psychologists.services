import Header from "../components/Header/Header";
import ListOfPsichologists from "../components/List-of-psychologists/ListOfPsichologists";

export default function Psyhologists() {
  return (
    <>
      <main className=" px-32 py-16 bg-[#f3f3f3] dark:bg-gray-900">
        <ListOfPsichologists />
      </main>
    </>
  );
}
