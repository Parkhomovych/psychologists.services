"use client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "@/firebase/config";

export default function BtnGoogle() {
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  async function google() {
    try {
      const auth = getAuth(app);
      const data = await signInWithPopup(auth, provider);
      const token = await data.user.getIdToken();
      const avatar = data.user.photoURL;
      const name = data.user.displayName;

      if (token && name) {
        document.cookie = `token=${token}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
        document.cookie = `avatar=${avatar}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
        document.cookie = `name=${name}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
      }

      router.push("/psychologists");
    } catch (error: any) {
      console.error(error?.code);
      console.error(error?.message);
      router.push("/");
    }
  }

  return (
    <div onClick={google} className="flex items-center gap-2.5">
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

