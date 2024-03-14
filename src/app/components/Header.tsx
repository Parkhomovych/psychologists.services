import React from "react";
import Navigations from "./Navigations";
import Logo from "./Logo";
import AuthBtn from "./AuthBtn";
import { app } from "../../../firebase/config";
import { getAuth } from "firebase/auth";

export default function Header() {
  const auth = getAuth(app);
  const user = auth.currentUser;
  return (
    <header className="border-b border-b-black01 dark:border-b-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 container ">
        <Logo />
        <Navigations />

        {user !== null ? <>{user.displayName}</> : <AuthBtn />}
      </div>
    </header>
  );
}
