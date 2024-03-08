"use client";
import { useRouter } from "next/navigation";
import IconCloseModal from "../IconCloseModal/IconCloseModal";
import { useEffect } from "react";

type Props = {
  style: string;
  children: any;
};
export default function RouteModal({ style, children }: Props) {
  const route = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        route.back();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [route]);
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          route.back();
        }
      }}
      className="backdrop"
    >
      <div className={`modal ${style}`}>
        <IconCloseModal close={() => route.back()} />
        {children}
      </div>
    </div>
  );
}
