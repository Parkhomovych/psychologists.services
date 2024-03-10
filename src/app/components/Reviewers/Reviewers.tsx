"use client";
import { useState } from "react";
import { Review } from "../List-of-psychologists/ListOfPsichologists";
import { IoIosStar } from "react-icons/io";
import MakeModal from "../MakeModal/MakeModal";
import { AnimatePresence, motion } from "framer-motion";
import PresenceModal from "../PresenceModal/PresenceModal";

type ReviewersProps = {
  review: Review[];
  name?: string | undefined;
};
export default function Reviewers({ review, name }: ReviewersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen((pS) => !pS);
  };
  return (
    <>
      <ul className="mb-10 flex flex-col gap-y-6">
        {review.map((item) => (
          <li className="" key={item.reviewer}>
            <div className="flex gap-x-3 mb-4">
              <div className="w-11 h-11 flex items-center justify-center bg-[#54be9633] rounded-full">
                <span className="text-green text-xl">{item.reviewer[0]}</span>
              </div>
              <div>
                <h4 className="font-medium text-black text-base">
                  {item.reviewer}
                </h4>
                <p className="flex gap-y-2 items-center">
                  <IoIosStar className=" w-4 h-4 text-yellow mr-2" />
                  <span className=" font-medium text-black">{item.rating}</span>
                </p>
              </div>
            </div>
            <p className=" text-base text-white06">{item.comment}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 bg-green rounded-[30px] hover:bg-activeGreen animateColor text-white"
      >
        Make an appointment
      </button>
      <PresenceModal isOpen={isOpen}>
        <MakeModal closeModal={handleModal} name={name} />
      </PresenceModal>
    </>
  );
}
