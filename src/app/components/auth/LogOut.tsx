"use client";
import { logout } from "@/firebase/auth/email-pass";
import { useRouter } from "next/navigation";

export default function LogOut() {
  const router = useRouter();

  function handleLogout(e: any) {
    logout();
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
}
