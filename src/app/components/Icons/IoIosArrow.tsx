import { FC } from "react";
import { IoIosArrowProps } from "@/Types/ComponentProps";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const IoIosArrow: FC<IoIosArrowProps> = ({ isOpen, style }) => {
  return (
    <>
      {isOpen ? (
        <IoIosArrowUp className={style} />
      ) : (
        <IoIosArrowDown className={style} />
      )}
    </>
  );
};

export default IoIosArrow;
