import React from "react";
import {BsArrowRight} from "react-icons/bs";

type ButtonDirectionProps = {
  title: string;
};
function ButtonDirection({title}: ButtonDirectionProps) {
  return (
    <button className="px-2 py-2 flex items-center gap-2 text-brand-primary whitespace-nowrap">
      <span className="text-[20px] leading-7 font-semibold">{title}</span>
      <span>
        <BsArrowRight size={24} />
      </span>
    </button>
  );
}

export default ButtonDirection;
