"use client";

import { useState } from "react";
import IoIosArrow from "../Icons/IoIosArrow";
import PresenceHeight from "../Animate/PresenceHeight";
import Reviewers, { ReviewersProps } from "./Reviewers";

export default function BtnReadMore({ reviews, name, image }: ReviewersProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((pS) => !pS)}
        className="mb-3.5 flex items-end gap-x-1 text-black dark:text-gray-50 hover:text-activeGreen animateColor font-medium after:block underline underline-offset-[3px]"
        type="button"
      >
        <span>Read more</span>
        <IoIosArrow isOpen={isOpen} style="w=[20px] h-[20px]" />
      </button>
      <PresenceHeight isOpen={isOpen}>
        <Reviewers reviews={reviews} name={name} image={image} />
      </PresenceHeight>
    </>
  );
}
