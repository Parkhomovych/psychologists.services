"use client";

import { FC, FormEvent, useState } from "react";
import Eye from "../Header/Eye";
import { useUserAuth } from "@/app/context/AuthContext";

const RegForm: FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useUserAuth();

  const handlerEye = () => {
    setShowPass((pS) => !pS);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    signUp(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap mb-7">
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
