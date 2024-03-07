"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
interface ModalProps {
  h2: string;
  p: string;
}
export default function AuthModal({ h2, p }: ModalProps) {
  const [showPass, setshowPass] = useState(false);
  const route = useRouter();

  const hendlePass = () => {
    setshowPass((pS) => !pS);
  };
  const closeToBackdrop = (e: any) => {
    if (e.target === e.currentTarget) route.push("/");
  };
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.code === "Escape") route.push("/");
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [route]);

  return (
    <div onClick={closeToBackdrop} className="backdrop">
      <div className="modal flex flex-col gap-y-10">
        <button
          onClick={() => route.push("/")}
          className=" absolute top-5 right-5 w-8 h-8"
        >
          <IoClose
            className="w-8 h-8 text-black 
      animateCloseBtn "
          />
        </button>
        <div>
          <h2 className="mb-5 font-medium text-4xl ">{h2}</h2>
          <p className=" font-normal text-base text-white06">{p}</p>
        </div>
        <form className="flex flex-wrap gap-y-[18px]">
          {h2 === "Registration" && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
          />
          <div className=" relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input relative"
            />

            <button
              type="button"
              className=" w-5 h-5  absolute top-4 right-[18px]"
              onClick={hendlePass}
            >
              {showPass ? (
                <LuEye className=" w-5 h-5 " />
              ) : (
                <LuEyeOff className=" w-5 h-5 " />
              )}
            </button>
          </div>
        </form>
        <button className=" w-[438px] h-[52px] flex items-center justify-center bg-green  rounded-[30px] hover:bg-activeGreen animateColor">
          <span className=" font-medium text-base text-white">Log In</span>
        </button>
      </div>
    </div>
  );
}
