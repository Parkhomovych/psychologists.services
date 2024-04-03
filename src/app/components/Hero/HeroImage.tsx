import Image from "next/image";

import { FaQuestion } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";

export default function HeroImage() {
  return (
    <div className="relative">
      <Image
        className="rounded-xl"
        src='/image/hero.jpeg'
        alt="Psychologist"
        width={`464`}
        height={`526`}
        priority={true}
      />
      <div className="w-10 h-10 flex items-center justify-center absolute top-[185px] -left-8 -rotate-15 bg-purple rounded-[10px]">
        <FaQuestion className="w-5 h-5 fill-white" />
      </div>
      <div
        className="w-10 h-10 bg-yellow flex items-center justify-center absolute top-12 -right-8
         rounded-[10px] rotate-15"
      >
        <IoMdPeople className="w-5 h-5 fill-white" />
      </div>
      <div className="flex items-center gap-x-4 w-80 h-28 bg-green px-8 absolute bottom-16 -left-28 rounded-[20px]">
        <div className=" w-14 h-14 bg-white rounded-xl flex items-center justify-center">
          <BsCheckLg className="text-green w-8 h-8" />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm font-normal text-white05">
            Experienced psychologists
          </p>
          <p className="text-white text-2xl font-bold">15,000</p>
        </div>
      </div>
    </div>
  );
}
