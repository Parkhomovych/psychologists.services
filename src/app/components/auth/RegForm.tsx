"use client";

import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";

export default function RegForm() {
  const [showPass, setshowPass] = useState(false);
  return (
    <>
      <form className="flex flex-wrap ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input w-[438px] mb-4"
          required
        />
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
            onClick={() => {
              setshowPass((pS) => !pS);
            }}
          >
            {showPass ? (
              <LuEye className=" w-5 h-5 " />
            ) : (
              <LuEyeOff className=" w-5 h-5 " />
            )}
          </button>
        </div>
        <button className=" w-[438px] h-[52px] flex items-center justify-center bg-green  rounded-[30px] hover:bg-activeGreen animateColor">
          <span className=" font-medium text-base text-white">
            Registration
          </span>
        </button>
      </form>
    </>
  );
}
