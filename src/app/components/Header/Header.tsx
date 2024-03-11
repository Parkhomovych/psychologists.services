import React from "react";
import Navigations from "../Navigaiton/Navigations";
import Logo from "../Logo/Logo";
import AuthBtn from "../AuthBtn/AuthBtn";

export interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="border-b border-b-white01 dark:border-b-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 container ">
        <Logo />
        <Navigations />
        <AuthBtn />
      </div>
    </header>
  );
}
