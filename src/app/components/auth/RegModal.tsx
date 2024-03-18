import Modal from "../Modal";
import { FcGoogle } from "react-icons/fc";
import RegForm from "./RegForm";
import { googleAuth } from "../../../../firebase/config";

interface ModalProps {
  closeModal: () => void;
}
export default function RegModal({ closeModal }: ModalProps) {
  return (
    <Modal closeModal={closeModal} style="w-[566px]  flex flex-col gap-y-10">
      <div>
        <div className="mb-5 flex items-center justify-between gap-x-3">
          <h2 className="font-medium text-4xl text-black dark:text-gray-50">
            Registration
          </h2>
          <div className="lineGoogle"></div>
          <button
            onClick={googleAuth}
            type="button"
            className=" hover:scale-[1.25] transition-all "
          >
            <FcGoogle className="w-8 h-8" />
          </button>
        </div>
        <p className="mb-10 font-normal text-base text-white06  dark:text-gray-500">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <RegForm />
      </div>
    </Modal>
  );
}
