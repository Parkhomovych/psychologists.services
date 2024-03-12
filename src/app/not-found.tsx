import Link from "next/link";
import RedirectToHome from "./components/RedirectToHome";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className=" text-5xl font-semibold text-green">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-black dark:text-gray-50 sm:text-5xl">
          Page not found
        </h1>
        <RedirectToHome />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-activeGreen focus:bg-activeGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-activeGreen animateColor"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
