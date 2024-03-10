"use client";

import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import PresenceModal from "../PresenceModal/PresenceModal";

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
    <div>
      <button
        onClick={handlerOpenLog}
        className="mr-3.5 w-31 h-12 py-3 px-9 border-solid border border-white02 hover:border-activeGreen active:border-activeGreen animateColor rounded-full "
      >
        <span className="text-base font-medium leading-5">Log In</span>
      </button>
      <button
        onClick={handlerOpenReg}
        className="w-42 h-12 py-3 px-10  bg-green rounded-full text-white hover:bg-activeGreen animateColor"
      >
        <span className="text-base font-medium leading-5"> Registration</span>
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
  );
}
