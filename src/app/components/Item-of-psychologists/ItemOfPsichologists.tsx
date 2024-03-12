"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Therapist } from "../List-of-psychologists/ListOfPsichologists";
import Image from "next/image";
import Reviewers from "../Reviewers/Reviewers";
import clsx from "clsx";
import PresenceHeight from "../PresenceHeight/PresenceHeight";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

type Props = {
  item: Therapist;
  i: number;
};
export default function ItemOfPsichologists({ item, i }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setisFavorite] = useState(false);

  return (
    <AnimatePresence>
      <motion.li
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -400, opacity: 0 }}
        transition={{ delay: 0.1 * i }}
      >
        <div>
          <div className="relative flex items-center justify-center w-[120px] h-[120px] rounded-[30px] border-solid border-2 border-[#54be9633] ">
            <Image
              width="96"
              height="96"
              src={item.avatar_url}
              alt={item.name}
              className="rounded-[15px]"
            />
            <div className="absolute top-2 right-3.5 w-[14px] h-[14px] flex items-center justify-center bg-white rounded-full">
              <span className="block w-[9px] h-[9px] bg-[#38CD3E] rounded-full"></span>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex justify-between">
            <p className="mb-1 font-medium text-base text-white06 dark:text-gray-400">
              Psychologist
            </p>
            <div className="flex items-center">
              <IoIosStar className=" w-4 h-4 text-yellow mr-2" />
              <p className="mr-4 text-black dark:text-gray-50">
                Rating:&nbsp;{item.rating}
              </p>
              <p className="mr-7 text-black dark:text-gray-50">
                Price / 1 hour:&nbsp;
                <span className="text-[#38cd3e]">{item.price_per_hour}$</span>
              </p>
              <button
                onClick={() => setisFavorite((pS) => !pS)}
                type="button"
                className={clsx(
                  `hover:text-activeGreen hover:scale-125 transition-all duration-300 `,
                  isFavorite ? `text-green` : `text-black dark:text-gray-200`
                )}
              >
                {isFavorite ? (
                  <FaHeart className="w-[26px] h-[26px]" />
                ) : (
                  <FaRegHeart className="w-[26px] h-[26px]" />
                )}
              </button>
            </div>
          </div>
          <h3 className="mb-6 font-medium text-2xl text-black dark:text-gray-50">
            {item.name}
          </h3>
          <ul className="max-w-[870px] mb-6 flex flex-wrap gap-x-1 gap-y-2">
            <li>
              <p className="px-4 py-2  bg-[#f3f3f3] dark:bg-gray-700 dark:text-gray-400 rounded-3xl text-white06 font-medium text-base">
                Experience:&nbsp;
                <span className="text-black dark:text-gray-50">
                  {item.experience}
                </span>
              </p>
            </li>
            <li>
              <p className="px-4 py-2  bg-[#f3f3f3] dark:bg-gray-700 dark:text-gray-400 rounded-3xl text-white06 font-medium text-base">
                License:&nbsp;
                <span className=" text-black dark:text-gray-50">
                  {item.license}
                </span>
              </p>
            </li>
            <li>
              <p className="px-4 py-2  bg-[#f3f3f3] dark:bg-gray-700 dark:text-gray-400 rounded-3xl text-white06 font-medium text-base">
                Specialization:&nbsp;
                <span className=" text-black dark:text-gray-50">
                  {item.specialization}
                </span>
              </p>
            </li>
            <li>
              <p className="px-4 py-2  bg-[#f3f3f3] dark:bg-gray-700 dark:text-gray-400 rounded-3xl text-white06 font-medium text-base">
                Initial_consultation:&nbsp;
                <span className=" text-black dark:text-gray-50">
                  {item.initial_consultation}
                </span>
              </p>
            </li>
          </ul>
          <p className=" mb-3.5 text-sm text-white06 dark:text-gray-400  font-normal">
            {item.about}
          </p>
          <button
            onClick={() => setIsOpen((pS) => !pS)}
            className="mb-3.5 flex items-end gap-x-1 text-black dark:text-gray-50 hover:text-activeGreen animateColor font-medium after:block underline underline-offset-[3px]"
            type="button"
          >
            <span>Read more</span>
            {isOpen ? (
              <IoIosArrowUp className=" w-[20px] h-[20px]" />
            ) : (
              <IoIosArrowDown className=" w-[20px] h-[20px]" />
            )}
          </button>
          <PresenceHeight isOpen={isOpen}>
            <Reviewers
              reviews={item.reviews}
              name={item.name}
              image={item.avatar_url}
            />
          </PresenceHeight>
        </div>
      </motion.li>
    </AnimatePresence>
  );
}
