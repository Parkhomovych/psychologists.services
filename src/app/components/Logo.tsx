"use client";
import { addUser } from "../../../firebase/database/operations";

export default function Logo() {
  return (
    <p
      onClick={addUser}
      className="text-black dark:text-white text-xl font-semibold"
    >
      <span className="text-green font-bold">psychologists.</span>services
    </p>
  );
}
