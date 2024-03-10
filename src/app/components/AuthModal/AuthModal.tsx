"use client";

import React from "react";
import { useState } from "react";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

import Modal from "../Modal/Modal";

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
    <Modal
      closeModal={closeModal}
      style="w-[566px] min-h-[510px] flex flex-col gap-y-10"
    >
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
            className="input w-[438px] h-[52px] "
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input w-[438px] h-[52px] "
        />
        <div className=" relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input w-[438px] h-[52px] "
          />

          <button
            type="button"
            className=" w-5 h-5 absolute top-4 right-[18px]"
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
        <span className=" font-medium text-base text-white">{h2}</span>
      </button>
    </Modal>
  );
}
