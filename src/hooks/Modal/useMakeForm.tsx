import { useState } from "react";

const useMakeForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("00:00");

  const changeIsOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const arr = ["INPUT", "svg", "polyline", "circle"];
    const target = e.target as HTMLElement;
    if (arr.includes(target.tagName)) {
      setIsOpen((pS) => !pS);
    }
  };
  const changeTime = (e: React.MouseEvent<HTMLDListElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "P") {
      const value =
        (e.target as HTMLElement).textContent?.replace(/\s/g, "") || "";
      setTime(value);
      setIsOpen((pS) => !pS);
    }
  };

  const markUpTime = () => {
    const times = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = String(hour).padStart(2, "0");
        const formattedMinute = String(minute).padStart(2, "0");
        if (`${formattedHour}:${formattedMinute}` === time) {
          times.push(
            <li key={`${formattedHour}:${formattedMinute}`}>
              <p className=" p-[2px] font-normal text-base dark:text-gray-50 text-black cursor-pointer">
                {formattedHour} : {formattedMinute}
              </p>
            </li>
          );
          continue;
        }
        times.push(
          <li key={`${formattedHour}:${formattedMinute}`}>
            <p className=" p-[2px] font-normal text-base text-white02 hover:text-black dark:text-gray-400 dark:hover:text-gray-50 animateColor cursor-pointer">
              {formattedHour} : {formattedMinute}
            </p>
          </li>
        );
      }
    }
    return times;
  };
  return { isOpen, time, changeIsOpen, changeTime, markUpTime };
};

export default useMakeForm;
