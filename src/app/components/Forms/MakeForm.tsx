import { FC } from "react";
import { LuClock4 } from "react-icons/lu";
import PresencePosition from "../Animate/PresencePosition";
import useMakeForm from "@/hooks/Modal/useMakeForm";

const MakeForm: FC = () => {
  const { isOpen, time, changeIsOpen, changeTime, markUpTime } = useMakeForm();

  return (
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
        <div onClick={changeIsOpen} className=" relative ">
          <input
            className="input grow cursor-pointer outline-0"
            type="text"
            name="time"
            placeholder="00:00"
            value={time}
            readOnly
            required
          />
          <LuClock4 className=" absolute top-[18px] right-[18px] cursor-pointer" />
          <PresencePosition isOpen={isOpen} pos="absolute">
            <div className=" absolute top-2 left-[68px] w-[151px] h-[179px] p-4 bg-[#fff] dark:bg-gray-800 rounded-xl">
              <p className="mb-4 text-center">Meeting time</p>
              <ul
                onClick={changeTime}
                className=" w-[119px] h-[110px] flex flex-col items-center overflow-y-auto"
              >
                {markUpTime()}
              </ul>
            </div>
          </PresencePosition>
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
  );
};

export default MakeForm;
