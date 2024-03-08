import Header from "../components/Header/Header";
import ListOfPsichologists from "../components/List-of-psychologists/ListOfPsichologists";

export default function Psyhologists() {
  return (
    <>
      <Header />
      <main className=" px-32 py-16 bg-[#f3f3f3]">
        <ListOfPsichologists />
      </main>
    </>
  );
}
