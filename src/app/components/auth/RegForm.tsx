"use client";

import { FC, useState } from "react";
import Eye from "./Eye";
import { useUserAuth } from "@/app/context/AuthContext";

const RegForm: FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerEye = () => {
    setShowPass((pS) => !pS);
  };
  const { signUp } = useUserAuth();

  // const router = useRouter();
  // async function handleReg(e: FormData) {
  //   const data = await registration(e);
  //   if (data === "success") router.push("/psychologists");

  //   if (data === "auth/email-already-in-use") {
  //     toast.error("Email already in use");
  //   }
  //   if (data === "auth/weak-password") {
  //     toast.error("Weak password");
  //   }
  //   if (data === "auth/invalid-email") {
  //     toast.error("Email is not valid");
  //   }
  // }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signUp(name, email, password);
      }}
      className="flex flex-wrap mb-7"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input w-[438px] mb-4"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input w-[438px] mb-4"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div className=" relative">
        <input
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="input w-[438px] mb-10"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Eye handlerEye={handlerEye} showPass={showPass} />
      </div>
      <button className=" w-[438px] h-[52px] flex items-center justify-center bg-green  rounded-[30px] hover:bg-activeGreen animateColor">
        <span className=" font-medium text-base text-white">Registration</span>
      </button>
    </form>
  );
};

export default RegForm;
