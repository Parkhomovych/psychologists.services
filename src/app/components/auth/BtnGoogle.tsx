import { FcGoogle } from "react-icons/fc";

export default function BtnGoogle() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-[100%] h-[2px] rounded-sm bg-black01 dark:bg-gray-700"></div>
      <button
        type="button"
        className="mx-auto hover:scale-125 transition-all duration-300"
      >
        <FcGoogle className="w-12 h-12" />
      </button>
      <div className="w-[100%] h-[2px] rounded-sm bg-black01 dark:bg-gray-700"></div>
    </div>
  );
}
// background-image: linear-gradient(to right, #4285F4, #34A853, #FBBC05, #EA4335);
