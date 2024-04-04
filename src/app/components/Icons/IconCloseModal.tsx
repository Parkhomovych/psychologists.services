import { FC } from "react";
import { IconCloseModalProps } from "@/Types/ComponentProps";
import { IoClose } from "react-icons/io5";

const IconCloseModal: FC<IconCloseModalProps> = ({ close }) => {
  return (
    <button onClick={close} className="w-8 h-8 absolute top-5 right-5">
      <IoClose className="w-8 h-8 text-black dark:text-gray-50 animateCloseBtn " />
    </button>
  );
};

export default IconCloseModal;
