"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RedirectToHome() {
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
    <p className="mt-6 text-base leading-7 text-black dark:text-gray-200">
      You will be redirected to home page after
      <span className=" text-green">&nbsp;{time}&nbsp;</span>seconds
    </p>
  );
}
