import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
type Props = {
  isOpen: boolean;
  style: string;
};
export default function IoIosArrow({ isOpen, style }: Props) {
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
