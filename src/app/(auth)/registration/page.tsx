import { FC } from "react";
import { Metadata } from "next";
import RegForm from "@/app/components/Forms/RegForm";

export const metadata: Metadata = {
  title: "Registration",
};
const Registration: FC = () => {
  return (
    <div className="w-[566px] m-auto p-16 flex flex-col">
      <h2 className="mb-5 font-medium text-4xl text-black dark:text-gray-50">
        Registration
      </h2>
      <p className="mb-10 font-normal text-base text-white06  dark:text-gray-500">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <RegForm />
    </div>
  );
};

export default Registration;
