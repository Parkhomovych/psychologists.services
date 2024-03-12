import React from "react";
import Navigations from "../Navigaiton/Navigations";
import Logo from "../Logo/Logo";
import AuthBtn from "../AuthBtn/AuthBtn";

export default function Header() {
  return (
    <header className="border-b border-b-black01 dark:border-b-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 container ">
        <Logo />
        <Navigations />
        <AuthBtn />
      </div>
    </header>
  );
}
