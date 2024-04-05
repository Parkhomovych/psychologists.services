import { FC } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import AuthBtn from "./AuthBtn";

const Header: FC = () => {
  return (
    <header className="border-b border-b-black01 dark:border-b-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 container ">
        <Logo />
        <Navigation />
        <AuthBtn />
      </div>
    </header>
  );
};

export default Header;
