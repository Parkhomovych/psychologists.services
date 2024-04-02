import { LuEye, LuEyeOff } from "react-icons/lu";

type Props = {
    handlerEye: () => void;
  showPass: boolean;
};
export default function Eye({ handlerEye, showPass }: Props) {
  return (
    <button
      type="button"
      className="  absolute top-3.5 right-[18px] text-black dark:text-gray-50 hover:scale-125 hover:text-activeGreen active:text-activeGreen transition-all duration-300"
      onClick={handlerEye}
    >
      {showPass ? (
        <LuEye className=" w-6 h-6 " />
      ) : (
        <LuEyeOff className=" w-6 h-6 " />
      )}
    </button>
  );
}
