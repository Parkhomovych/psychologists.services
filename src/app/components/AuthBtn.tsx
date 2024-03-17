"use client";

import { useState } from "react";
import RegModal from "./RegModal";
import PresenceModal from "./PresenceModal";
import LogModal from "./LogModal";
import { auth } from "../../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthBtn() {
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);
  const [currentUser, setcurrentUser] = useState(null);

  const handlerOpenLog = () => {
    setIsOpenLog((pS) => !pS);
  };
  const handlerOpenReg = () => {
    setIsOpenReg((pS) => !pS);
  };
  onAuthStateChanged(auth, (user: any) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      setcurrentUser(user);
      console.log(currentUser);
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <>
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
          <span className="text-base font-medium leading-5">Registration</span>
        </button>
        <PresenceModal isOpen={isOpenLog}>
          <LogModal closeModal={handlerOpenLog} />
        </PresenceModal>
        <PresenceModal isOpen={isOpenReg}>
          <RegModal closeModal={handlerOpenReg} />
        </PresenceModal>
      </div>
    </>
  );
}
