"use client";

import { useState } from "react";
import RegModal from "./RegModal";
import LogModal from "./LogModal";
import Image from "next/image";
import { signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { auth, googleAuth } from "../../../../firebase/config";
import PresencePosition from "../Animate/PresencePosition";
import { FcGoogle } from "react-icons/fc";

export default function AuthBtn() {
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);

  const handlerOpenLog = () => {
    setIsOpenLog((pS) => !pS);
  };
  const handlerOpenReg = () => {
    setIsOpenReg((pS) => !pS);
  };
  // const LogOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       toast.success("Sign-out successful.");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  return (
    <div className=" flex items-center gap-x-3">
      <button
        onClick={googleAuth}
        type="button"
        className=" hover:scale-[1.25] transition-all "
      >
        <FcGoogle className="w-10 h-10" />
      </button>
      <button
        onClick={handlerOpenLog}
        className="w-30 h-12  py-3 px-9 text-black dark:text-gray-50 leading-5 border-white02 dark:border-gray-600 border rounded-full text-base font-medium  hover:text-activeGreen active:text-activeGree hover:border-activeGreen active:border-activeGreen animateColor "
      >
        <span>Log In</span>
      </button>
      <button
        onClick={handlerOpenReg}
        className="w-42 h-12 py-3 px-10  bg-green rounded-full text-white hover:bg-activeGreen animateColor"
      >
        <span className="text-base font-medium leading-5">Registration</span>
      </button>
      <PresencePosition pos="fixed" isOpen={isOpenLog}>
        <LogModal closeModal={handlerOpenLog} />
      </PresencePosition>
      <PresencePosition pos="fixed" isOpen={isOpenReg}>
        <RegModal closeModal={handlerOpenReg} />
      </PresencePosition>
    </div>
  );
}
