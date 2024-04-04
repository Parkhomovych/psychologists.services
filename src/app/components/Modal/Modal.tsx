import { FC, useEffect } from "react";
import { ModalProps } from "@/Types/ComponentProps";
import IconCloseModal from "../Icons/IconCloseModal";

const Modal: FC<ModalProps> = ({ children, style, closeModal }) => {
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
};

export default Modal;
