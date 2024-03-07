import Link from "next/link";

export default function AuthBtn() {
  return (
    <div>
      <Link
        href="/login"
        className="mr-3.5 w-31 h-12 py-3 px-9 border-solid border border-white02 hover:border-activeGreen active:border-activeGreen animateColor rounded-full "
      >
        <span className="text-base font-medium leading-5">Log In</span>
      </Link>
      <Link
        href="/registration"
        className="w-42 h-12 py-3 px-10 rounded-full bg-green hover:bg-activeGreen animateColor text-white"
      >
        <span className="text-base font-medium leading-5"> Registration</span>
      </Link>
    </div>
  );
}
