"use client";

import { FC } from "react";
import { useUserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const LogOut: FC = () => {
  const router = useRouter();
  const { logOut } = useUserAuth();
  function handleLogout(e: any) {
    logOut();
    router.push("/");
  }
  return (
    <button
      onClick={handleLogout}
      className="w-30 h-12  py-3 px-9 text-black dark:text-gray-50 leading-5 border-white02 dark:border-gray-600 border rounded-full text-base font-medium  hover:text-activeGreen active:text-activeGree hover:border-activeGreen active:border-activeGreen animateColor "
    >
      Log Out
    </button>
  );
};

export default LogOut;
