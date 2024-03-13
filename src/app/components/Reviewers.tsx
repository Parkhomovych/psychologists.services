"use client";
import { useState } from "react";
import { Review } from "./ListOfPsichologists";
import { IoIosStar } from "react-icons/io";
import MakeModal from "./MakeModal";
import PresenceModal from "./PresenceModal";

export type ReviewersProps = {
  reviews: Review[];
  name: string;
  image: string;
};
export default function Reviewers({ reviews, name, image }: ReviewersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen((pS:boolean) => !pS);
  };
  return (
    <>
      <ul className="mb-10 flex flex-col gap-y-6">
        {reviews.map((item) => (
          <li className="" key={item.reviewer}>
            <div className="flex gap-x-3 mb-4">
              <div className="w-11 h-11 flex items-center justify-center bg-[#54be9633] rounded-full">
                <span className="text-green text-xl">{item.reviewer[0]}</span>
              </div>
              <div>
                <h4 className="font-medium text-black text-base dark:text-gray-50">
                  {item.reviewer}
                </h4>
                <p className="flex gap-y-2 items-center">
                  <IoIosStar className=" w-4 h-4 text-yellow mr-2" />
                  <span className=" font-medium text-black dark:text-gray-50">{item.rating}</span>
                </p>
              </div>
            </div>
            <p className=" text-base text-white06 dark:text-gray-">{item.comment}</p>
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
        <MakeModal closeModal={handleModal} name={name} image={image} />
      </PresenceModal>
    </>
  );
}
