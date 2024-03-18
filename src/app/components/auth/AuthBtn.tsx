"use client";

import { useState } from "react";
import RegModal from "./RegModal";
import PresencePosition from "../Animate/PresencePosition";
import LogModal from "./LogModal";
import { auth } from "../../../../firebase/config";
import Image from "next/image";

export default function AuthBtn() {
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);

  const handlerOpenLog = () => {
    setIsOpenLog((pS) => !pS);
  };
  const handlerOpenReg = () => {
    setIsOpenReg((pS) => !pS);
  };

  return (
    <>
      {auth.currentUser ? (
        <div className="flex gap-x-4 items-center">
          <Image
            src={auth.currentUser?.photoURL || "/svg/user.svg"}
            alt="photo"
            width={40}
            height={40}
          />
          <p>{auth.currentUser?.displayName}</p>
          <button
            className="w-30 h-12 mr-3.5 py-3 px-9 text-black dark:text-gray-50 leading-5 border-white02 dark:border-gray-600 border rounded-full text-base font-medium  hover:text-activeGreen active:text-activeGree hover:border-activeGreen active:border-activeGreen animateColor "
            type="button"
          >
            Log Out
          </button>
        </div>
      ) : (
        <>
          <div>
            <button
              onClick={handlerOpenLog}
              className="w-30 h-12 mr-3.5 py-3 px-9 text-black dark:text-gray-50 leading-5 border-white02 dark:border-gray-600 border rounded-full text-base font-medium  hover:text-activeGreen active:text-activeGree hover:border-activeGreen active:border-activeGreen animateColor "
            >
              <span>Log In</span>
            </button>
            <button
              onClick={handlerOpenReg}
              className="w-42 h-12 py-3 px-10  bg-green rounded-full text-white hover:bg-activeGreen animateColor"
            >
              <span className="text-base font-medium leading-5">
                Registration
              </span>
            </button>
            <PresencePosition pos="fixed" isOpen={isOpenLog}>
              <LogModal closeModal={handlerOpenLog} />
            </PresencePosition>
            <PresencePosition pos="fixed" isOpen={isOpenReg}>
              <RegModal closeModal={handlerOpenReg} />
            </PresencePosition>
          </div>
        </>
      )}
    </>
  );
}
