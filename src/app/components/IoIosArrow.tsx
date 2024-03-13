import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
type Porops = {
  isOpen: boolean;
  style: string;
};
export default function IoIosArrow({ isOpen, style }: Porops) {
  return (
    <>
      {isOpen ? (
        <IoIosArrowUp className={style} />
      ) : (
        <IoIosArrowDown className={style} />
      )}
    </>
  );
}
