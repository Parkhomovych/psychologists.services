"use client";

import { useState } from "react";
import Eye from "./Eye";
import { registration } from "@/firebase/actions";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function RegForm() {
  const [showPass, setshowPass] = useState(false);
  const hendleEye = () => {
    setshowPass((pS) => !pS);
  };

  const router = useRouter();
  async function handleReg(e: FormData) {
    const data = await registration(e);
    if (data === "success") router.push("/psychologists");

    if (data === "auth/email-already-in-use") {
      toast.error("Email already in use");
    }
    if (data === "auth/weak-password") {
      toast.error("Weak password");
    }
  }

  return (
    <>
      <Toaster />
      <form action={handleReg} className="flex flex-wrap mb-7">
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
          <Eye hendleEye={hendleEye} showPass={showPass} />
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
