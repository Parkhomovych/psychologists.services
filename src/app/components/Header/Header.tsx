import React from "react";
import Navigations from "../Navigaiton/Navigations";
import Logo from "../Logo/Logo";
import AuthBtn from "../AuthBtn/AuthBtn";

export interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="border-b border-solid border-white01">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-32 py-6  ">
        <Logo />
        <Navigations />
        <AuthBtn />
      </div>
    </header>
  );
}
