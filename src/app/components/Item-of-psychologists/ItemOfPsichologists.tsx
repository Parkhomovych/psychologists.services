"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Therapist } from "../List-of-psychologists/ListOfPsichologists";
import Image from "next/image";
import Reviewers from "../Reviewers/Reviewers";
import clsx from "clsx";

type Props = {
  item: Therapist;
};
export default function ItemOfPsichologists({ item }: Props) {
  const [readMore, setReadMore] = useState(false);
  const [isFavorite, setisFavorite] = useState(false);

  return (
    <li className="flex gap-x-6 p-6 w-[1184px] relative bg-white rounded-3xl">
      <div className="flex items-center absolute top-6 right-6">
        <IoIosStar className=" w-4 h-4 text-yellow mr-2" />
        <p className="mr-4">Rating:&nbsp;{item.rating}</p>
        <p className="mr-7">
          Price / 1 hour:&nbsp;
          <span className="text-[#38cd3e]">{item.price_per_hour}$</span>
        </p>
        <button
          onClick={() => setisFavorite((pS) => !pS)}
          type="button"
          className={clsx(
            `hover:text-activeGreen animateColor`,
            isFavorite ? `text-green` : `text-black`
          )}
        >
          {isFavorite ? (
            <FaHeart className="w-[26px] h-[26px]" />
          ) : (
            <FaRegHeart className="w-[26px] h-[26px]" />
          )}
        </button>
      </div>
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
        <p className="mb-1 font-medium text-base text-white06">Psychologist</p>
        <h3 className="mb-6 font-medium text-2xl">{item.name}</h3>
        <ul className="max-w-[870px] mb-6 flex flex-wrap gap-x-1 gap-y-2">
          <li className="">
            <p className="px-4 py-2  bg-[#f3f3f3] rounded-3xl text-white06 font-medium text-base">
              Experience:&nbsp;
              <span className=" text-black">{item.experience}</span>
            </p>
          </li>
          <li className="">
            <p className="px-4 py-2  bg-[#f3f3f3] rounded-3xl text-white06 font-medium text-base">
              License:&nbsp;
              <span className=" text-black">{item.license}</span>
            </p>
          </li>
          <li className="">
            <p className="px-4 py-2  bg-[#f3f3f3] rounded-3xl text-white06 font-medium text-base">
              Specialization:&nbsp;
              <span className=" text-black">{item.specialization}</span>
            </p>
          </li>
          <li className="">
            <p className="px-4 py-2  bg-[#f3f3f3] rounded-3xl text-white06 font-medium text-base">
              Initial_consultation:&nbsp;
              <span className=" text-black">{item.initial_consultation}</span>
            </p>
          </li>
        </ul>
        <p className=" mb-3.5 text-sm text-white06  font-normal">
          {item.about}
        </p>
        <button
          onClick={() => setReadMore((pS) => !pS)}
          className="mb-3.5 text-black font-medium after:block underline underline-offset-[3px]"
          type="button"
        >
          Read more
        </button>
        {readMore && <Reviewers review={item.reviews} />}
      </div>
    </li>
  );
}
