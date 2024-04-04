"use client";

import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RedirectToHome: FC = () => {
  const [time, setTime] = useState<number>(10);
  const router = useRouter();

  useEffect(() => {
    const idInterval: NodeJS.Timeout = setInterval(() => {
      setTime((pS: number) => pS - 1);
    }, 1000);

    const idTimeout: NodeJS.Timeout = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => {
      clearInterval(idInterval);
      clearTimeout(idTimeout);
    };
  }, [router]);
  return (
    <p className="mt-6 text-base leading-7 text-black dark:text-gray-200">
      You will be redirected to home page after
      <span className=" text-green">&nbsp;{time}&nbsp;</span>seconds
    </p>
  );
};

export default RedirectToHome;
