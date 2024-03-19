import Modal from "../Modal";
import RegForm from "./RegForm";


interface ModalProps {
  closeModal: () => void;
}
export default function RegModal({ closeModal }: ModalProps) {
  return (
    <Modal closeModal={closeModal} style="w-[566px]  flex flex-col">
      <div>
        <div className="mb-5 flex items-center justify-between gap-x-3">
          <h2 className="font-medium text-4xl text-black dark:text-gray-50">
            Registration
          </h2>
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
