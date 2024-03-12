import { IoClose } from "react-icons/io5";
type Props = {
  close: () => void;
};
export default function IconCloseModal({ close }: Props) {
  return (
    <button onClick={close} className="w-8 h-8 absolute top-5 right-5">
      <IoClose className="w-8 h-8 text-black dark:text-gray-50 animateCloseBtn " />
    </button>
  );
}
