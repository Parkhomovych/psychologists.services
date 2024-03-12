"use client";
import IconCloseModal from "./IconCloseModal";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  style: string;
  closeModal: () => void;
};
export default function Modal({ children, style, closeModal }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
  return (
    <div
      className="backdrop overflow-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className={`modal ${style}`}>
        <IconCloseModal close={closeModal} />
        {children}
      </div>
    </div>
  );
}
