"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";
import PresenceModal from "./PresenceModal";
import { useSession, signOut } from "next-auth/react";

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
  const session = useSession();

  return (
    <>
      {session?.data ? (
        <div className="flex items-center gap-x-4">
          <Image
            src={session.data.user?.image || ""}
            alt={session.data.user?.name || "name"}
            width={`40`}
            height={`40`}
            className=" rounded-[10px]"
          />
          <p>{session.data.user?.name}</p>
          <button
            className="w-31 h-12 mr-3.5 py-3 px-9 text-black dark:text-gray-50 leading-5 border-white02 dark:border-gray-600 border rounded-full text-base font-medium  hover:text-activeGreen active:text-activeGree hover:border-activeGreen active:border-activeGreen animateColor"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={handlerOpenLog}
            className="w-31 h-12 mr-3.5 py-3 px-9 text-black dark:text-gray-50 leading-5 border-white02 dark:border-gray-600 border rounded-full text-base font-medium  hover:text-activeGreen active:text-activeGree hover:border-activeGreen active:border-activeGreen animateColor "
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
          <PresenceModal isOpen={isOpenLog}>
            <AuthModal
              closeModal={handlerOpenLog}
              h2="Log In"
              p=" Welcome back! Please enter your credentials to access your account
       and continue your search for a psychologist."
            />
          </PresenceModal>
          <PresenceModal isOpen={isOpenReg}>
            <AuthModal
              closeModal={handlerOpenReg}
              h2="Registration"
              p="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
            />
          </PresenceModal>
        </div>
      )}
    </>
  );
}
