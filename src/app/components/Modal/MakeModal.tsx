"use client";

import { FC } from "react";
import { MakeModalProps } from "@/Types/ComponentProps";
import Image from "next/image";
import Modal from "./Modal";
import MakeForm from "../Forms/MakeForm";

const MakeModal: FC<MakeModalProps> = ({ name, image, closeModal }) => {
  return (
    <Modal closeModal={closeModal} style="w-[600px]">
      <div className="flex flex-col gap-y-8">
        <div>
          <h2 className="mb-4 font-medium text-4xl ">
            Make an appointment with a psychologists
          </h2>
          <p className="font-normal text-base text-white06  dark:text-gray-400">
            You are on the verge of changing your life for the better. Fill out
            the short form below to book your personal appointment with a
            professional psychologist. We guarantee confidentiality and respect
            for your privacy.
          </p>
        </div>
        <div className="flex gap-x-[14px]">
          <Image
            src={image}
            alt={name}
            width="44"
            height="44"
            className=" rounded-[15px]"
          />
          <div>
            <p className="mb-1 font-medium text-xs text-white06 dark:text-gray-400">
              Your psychologists
            </p>
            <h4 className="font-medium text-base">{name}</h4>
          </div>
        </div>
        <MakeForm />
      </div>
    </Modal>
  );
};

export default MakeModal;
