import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import LogOut from "./LogOut";

export default function AuthBtn() {
  const name = cookies().get("name")?.value;
  const avatar = cookies().get("avatar")?.value;

  return (
    <div>
      {name ? (
        <div className=" flex items-center gap-x-10">
          <Image
            width={`40`}
            height={`40`}
            alt=""
            src={avatar || "/svg/user.svg"}
          />
          <p>{name}</p>
          <LogOut />
        </div>
      ) : (
        <div className=" flex items-center gap-x-3">
          <Link
            href={`/login`}
            className="w-30 h-12  py-3 px-9 text-black dark:text-gray-50 leading-5 border-white02 dark:border-gray-600 border rounded-full text-base font-medium  hover:text-activeGreen active:text-activeGree hover:border-activeGreen active:border-activeGreen animateColor "
          >
            <span>Log In</span>
          </Link>
          <Link
            href={`/registration`}
            className="w-42 h-12 py-3 px-10  bg-green rounded-full text-white hover:bg-activeGreen animateColor"
          >
            <span className="text-base font-medium leading-5">
              Registration
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
