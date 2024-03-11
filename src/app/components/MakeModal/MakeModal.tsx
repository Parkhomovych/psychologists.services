"use client";
import Modal from "../Modal/Modal";
import { LuClock4 } from "react-icons/lu";
import Image from "next/image";
import { useState } from "react";
import PresenceModal from "../PresenceModal/PresenceModal";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  name: string;
  image: string;
  closeModal: () => void;
};
export default function MakeModal({ name, image, closeModal }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("00:00");

  const changeIsOpen = () => {
    setIsOpen((pS) => !pS);
  };
  const changeTime = (e: any) => {
    if (e.target.tagName === "P") {
      const value = e.target.textContent.replace(/\s/g, "");
      setTime(value);
    }
  };

  const murkupTime = () => {
    const times = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = String(hour).padStart(2, "0");
        const formattedMinute = String(minute).padStart(2, "0");
        if (`${formattedHour}:${formattedMinute}` === time) {
          times.push(
            <li key={`${formattedHour}:${formattedMinute}`}>
              <p className="font-normal text-base text-black hover:text-black animateColor">
                {formattedHour} : {formattedMinute}
              </p>
            </li>
          );
          continue;
        }
        times.push(
          <li key={`${formattedHour}:${formattedMinute}`}>
            <p className="font-normal text-base text-white02 hover:text-black animateColor">
              {formattedHour} : {formattedMinute}
            </p>
          </li>
        );
      }
    }
    return times;
  };

  return (
    <Modal closeModal={closeModal} style="w-[600px]">
      <div className="flex flex-col gap-y-10">
        <div>
          <h2 className="mb-5 font-medium text-4xl">
            Make an appointment with a psychologists
          </h2>
          <p className="font-normal text-base text-white06">
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
            <p className="mb-1 font-medium text-xs text-white06">
              Your psychologists
            </p>
            <h4 className="font-medium text-base text-black">{name}</h4>
          </div>
        </div>
        <form className="flex flex-col">
          <input
            className="input mb-4"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <div className="flex gap-x-2 mb-4">
            <input
              className="input grow"
              type="number"
              name="phone"
              placeholder="+380"
              required
              pattern="[0-9]"
            />
            <div onClick={changeIsOpen} className=" relative cursor-pointer">
              <input
                className="input grow cursor-pointer outline-0"
                type="text"
                name="time"
                placeholder="00:00"
                value={time}
                readOnly
                required
              />
              <LuClock4 className=" absolute top-[18px] right-[18px]" />
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="  absolute top-[61.23px] right-[-1px] w-[151px] h-[179px] p-4 bg-[#fff] rounded-xl"
                  >
                    <p className="mb-4 text-center">Meeting time</p>
                    <ul
                      onClick={changeTime}
                      className=" w-[119px] h-[110px] flex flex-col items-center gap-y-1 overflow-y-auto"
                    >
                      {murkupTime()}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <input
            className="input mb-4 "
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="input resize-none min-h-[116px] mb-10"
            name=""
            placeholder="Comment"
          />
          <button className="w-[472px] h-[52px] flex items-center justify-center bg-green  rounded-[30px] hover:bg-activeGreen animateColor">
            <span className="font-medium text-base text-white">Send</span>
          </button>
        </form>
      </div>
    </Modal>
  );
}
