"use client";

import { useUserAuth } from "@/app/context/AuthContext";
import { FcGoogle } from "react-icons/fc";

const  BtnGoogle =() => {
  const { googleSingIn } = useUserAuth();

  return (
    <div onClick={googleSingIn} className="flex items-center gap-2.5">
      <div className="w-[100%] h-[2px] rounded-sm bg-black01 dark:bg-gray-700"></div>
      <button
        type="button"
        className="mx-auto hover:scale-125 transition-all duration-300"
      >
        <FcGoogle className="w-12 h-12" />
      </button>
      <div className="w-[100%] h-[2px] rounded-sm bg-black01 dark:bg-gray-700"></div>
    </div>
  );
}


export default BtnGoogle