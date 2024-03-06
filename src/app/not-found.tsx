"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [time, setTime] = useState(10);
  const router = useRouter();
  
  useEffect(() => {
    const idTimeout = setInterval(() => {
      setTime((pS) => pS - 1);
    }, 1000);

    const idItnetval = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => {
      clearInterval(idItnetval);
      clearTimeout(idTimeout);
    };
  }, [router]);

  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className=" text-5xl font-semibold text-green">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-black">
          You will be redirected to home page after{" "}
          <span className=" text-green">{time}</span> seconds
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-hoverGreen focus:bg-hoverGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hoverGreen"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
