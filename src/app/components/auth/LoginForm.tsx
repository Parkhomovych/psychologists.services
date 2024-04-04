"use client";

import { FC, useState } from "react";
import Eye from "./Eye";
import { useUserAuth } from "@/app/context/AuthContext";

const LoginForm: FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerEye = () => {
    setShowPass((pS) => !pS);
  };
  const { signIn } = useUserAuth();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn(email, password);
      }}
      className="flex flex-wrap mb-7 "
    >
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
      <button
        type="submit"
        className=" w-[438px] h-[52px] flex items-center justify-center bg-green  rounded-[30px] hover:bg-activeGreen animateColor font-medium text-base text-white"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
