import LoginForm from "./LoginForm";
import Modal from "../Modal";

interface ModalProps {
  closeModal: () => void;
}

export default function LogModal({ closeModal }: ModalProps) {
  return (
    <Modal closeModal={closeModal} style="w-[566px]  flex flex-col gap-y-10">
      <div>
        <div className="mb-5 flex items-center justify-between gap-x-3">
          <h2 className="font-medium text-4xl text-black dark:text-gray-50">
            Log In
          </h2>
        </div>
        <p className="mb-10 font-normal text-base text-white06  dark:text-gray-500">
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
        <LoginForm />
      </div>
    </Modal>
  );
}
