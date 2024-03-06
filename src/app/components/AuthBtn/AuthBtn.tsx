"use client";
import { useState } from "react";

export default function AuthBtn() {
  const [isOpenLog, setisOpenLog] = useState(false);
  const [isOpenRegis, setisOpenRegis] = useState(false);
  const handleClick = () => {
    setisOpenLog((prevValue) => !prevValue);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="mr-3.5 w-31 h-12 py-3 px-9 border-solid border border-white02 hover:border-hoverGreen active:border-hoverGreen transition-color duration-300 rounded-full "
      >
        <span className="text-base font-medium leading-5">Log In</span>
      </button>
      <button
        onClick={() => setisOpenRegis((pS) => !pS)}
        className="w-42 h-12 py-3 px-10 rounded-full bg-green hover:bg-hoverGreen transition-color duration-300 text-white"
      >
        <span className="text-base font-medium leading-5"> Registration</span>
      </button>
    </div>
  );
}
