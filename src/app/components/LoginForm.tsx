"use client";

import  { Toaster } from "react-hot-toast";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { LogIn } from "../../../firebase/providers/mail-and-pass";

export default function LoginForm({ h2 }: { h2: string }) {
  const [showPass, setshowPass] = useState(false);

  const hendlePass = () => {
    setshowPass((pS) => !pS);
  };

  return (
    <>
      <Toaster />
      <form onSubmit={LogIn} className="flex flex-wrap ">
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

          <button
            type="button"
            className=" w-5 h-5 absolute top-4 right-[18px] text-black dark:text-gray-50 hover:text-activeGreen active:text-activeGreen animateColor"
            onClick={hendlePass}
          >
            {showPass ? (
              <LuEye className=" w-5 h-5 " />
            ) : (
              <LuEyeOff className=" w-5 h-5 " />
            )}
          </button>
        </div>
        <button className=" w-[438px] h-[52px] flex items-center justify-center bg-green  rounded-[30px] hover:bg-activeGreen animateColor">
          <span className=" font-medium text-base text-white">{h2}</span>
        </button>
      </form>
    </>
  );
}
