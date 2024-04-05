"use client";

import { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const RedirectToHome: FC = () => {
  const [time, setTime] = useState<number>(10);
  const router = useRouter();
  const idInterval = useRef<NodeJS.Timeout>();
  const idTimeout = useRef<NodeJS.Timeout>();
  useEffect(() => {
    idInterval.current = setInterval(() => {
      setTime((pS: number) => pS - 1);
    }, 1000);

    idTimeout.current = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => {
      clearInterval(idInterval.current);
      clearTimeout(idTimeout.current);
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
