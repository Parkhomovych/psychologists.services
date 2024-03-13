"use client";

import { useState } from "react";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

import Modal from "./Modal";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

interface ModalProps {
  h2: string;
  p: string;
  closeModal: () => void;
}

export default function AuthModal({ h2, p, closeModal }: ModalProps) {
  const [showPass, setshowPass] = useState(false);

  const hendlePass = () => {
    setshowPass((pS) => !pS);
  };
  return (
    <Modal closeModal={closeModal} style="w-[566px]  flex flex-col gap-y-10">
      <div>
        <div className="mb-5 flex items-center justify-between gap-x-3">
          <h2 className="font-medium text-4xl text-black dark:text-gray-50">
            {h2}
          </h2>
          <div className="lineGoogle"></div>
          <Link href="/api/auth/signin" className=" hover:scale-[1.25] transition-all ">
            <FcGoogle className="w-8 h-8" />
          </Link>
        </div>
        <p className=" font-normal text-base text-white06  dark:text-gray-500">
          {p}
        </p>
      </div>
      <form className="flex flex-wrap ">
        {h2 === "Registration" && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input w-[438px] mb-4"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input w-[438px] mb-4"
        />
        <div className=" relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input w-[438px] mb-10"
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
    </Modal>
  );
}
