"use client";

import { useState } from "react";
import Eye from "./Eye";
import { login } from "@/firebase/auth/email-pass";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const [showPass, setshowPass] = useState(false);
  const hendleEye = () => {
    setshowPass((pS) => !pS);
  };

  const router = useRouter();
  async function handleLog(e: FormData) {
    const data = await login(e);
    if (data === "success") router.push("/psychologists");
    if (data === "auth/invalid-credential") {
      toast.error("Email or password is not valid");
    }
  }
  return (
    <>
      <Toaster />
      <form action={handleLog} className="flex flex-wrap mb-7 ">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input w-[438px] mb-4"
          required
        />
        <div className=" relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input w-[438px] mb-10"
            required
          />
          <Eye hendleEye={hendleEye} showPass={showPass} />
        </div>
        <button
          type="submit"
          className=" w-[438px] h-[52px] flex items-center justify-center bg-green  rounded-[30px] hover:bg-activeGreen animateColor font-medium text-base text-white"
        >
          Log In
        </button>
      </form>
    </>
  );
}
