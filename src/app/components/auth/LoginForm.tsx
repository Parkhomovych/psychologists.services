"use client";

import { FormEvent, useState } from "react";
import Eye from "./Eye";
import { login } from "@/firebase/auth/email-pass";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const handlerEye = () => {
    setShowPass((pS) => !pS);
  };

  const router = useRouter();
  function handleLog(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
    const passwordInput = form.elements.namedItem("password") as HTMLInputElement | null;
  
    if (emailInput && passwordInput) {
      console.log(emailInput.value);
      console.log(passwordInput.value);
    }
  }
  return (
    <>
      <Toaster />
      <form onSubmit={handleLog} className="flex flex-wrap mb-7 ">
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
