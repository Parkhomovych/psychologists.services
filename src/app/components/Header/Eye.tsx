import { FC } from "react";
import { EyeProps } from "@/Types/ComponentProps";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Eye: FC<EyeProps> = ({ handlerEye, showPass }) => {
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
};

export default Eye;
