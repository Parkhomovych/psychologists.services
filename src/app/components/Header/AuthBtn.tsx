"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUserAuth } from "@/app/context/AuthContext";
import BtnGoogle from "./BtnGoogle";

const AuthBtn: FC = () => {
  const { user, logOut } = useUserAuth();
  // const [delay, setDelay] = useState<boolean>(true);
  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     setDelay(false);
  //   }, 350);
  //   return () => {
  //     clearTimeout(id);
  //   };
  // }, []);
  return (
    <div>
      {user ? (
        <div className=" flex items-center gap-x-6">
          <Image
            width={`40`}
            height={`40`}
            alt=""
            src={user.photoURL || "/svg/user.svg"}
            className=" rounded-[10px]"
          />
          <span className=" text-xs">{user.displayName}</span>
          <button
            onClick={logOut}
            className="w-30 h-12  py-3 px-9 text-black dark:text-gray-50 leading-5 border-white02 dark:border-gray-600 border rounded-full text-base font-medium  hover:text-activeGreen active:text-activeGree hover:border-activeGreen active:border-activeGreen animateColor "
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className=" flex items-center gap-x-3">
          <BtnGoogle />
          <Link
            href={`/login`}
            className="w-30 h-12  py-3 px-9 text-black dark:text-gray-50 leading-5 border-white02 dark:border-gray-600 border rounded-full text-base font-medium  hover:text-activeGreen active:text-activeGree hover:border-activeGreen active:border-activeGreen animateColor "
          >
            <span>Log In</span>
          </Link>
          <Link
            href={`/registration`}
            className="w-42 h-12 py-3 px-10  bg-green rounded-full text-white hover:bg-activeGreen animateColor"
          >
            <span className="text-base font-medium leading-5">
              Registration
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthBtn;
