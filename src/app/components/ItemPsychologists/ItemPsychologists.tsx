import { IoIosStar } from "react-icons/io";

import Image from "next/image";
import BtnFavorite from "./BtnFavorite";
import BtnReadMore from "./BtnReadMore";
import { FC } from "react";
import { ItemPsychologistsProps } from "@/Types/ComponentProps";

const ItemPsychologists: FC<ItemPsychologistsProps> = ({ item }) => {
  return (
    <li className="flex gap-x-6 p-6 max-w-[1184px] bg-white dark:bg-gray-800 rounded-3xl">
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
        <div className=" flex justify-between items-center">
          <p className=" font-medium text-base text-white06 dark:text-gray-400">
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
            <BtnFavorite />
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
        <p className=" mb-3.5 text-sm text-white06 dark:text-gray-400  font-normal hidden md:block">
          {item.about}
        </p>
        <BtnReadMore
          reviews={item.reviews}
          name={item.name}
          image={item.avatar_url}
        />
      </div>
    </li>
  );
};

export default ItemPsychologists;
