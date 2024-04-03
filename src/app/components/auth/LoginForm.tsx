"use client";

import { useState } from "react";
import Eye from "./Eye";
import toast, { Toaster } from "react-hot-toast";
import { useUserAuth } from "@/app/context/AuthContext";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const handlerEye = () => {
    setShowPass((pS) => !pS);
  };
  const { signIn } = useUserAuth();
  return (
    <>
      <Toaster />
      <form onSubmit={signIn} className="flex flex-wrap mb-7 ">
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
          <Eye handlerEye={handlerEye} showPass={showPass} />
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
