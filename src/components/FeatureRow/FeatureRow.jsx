import { memo } from "react";
import { FaArrowRight } from "react-icons/fa6";

const FeatureRow = ({ title, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className="
        w-full flex items-center justify-between 
       py-3 md:py-6 border-b max-h-[67px]
        font-manrope cursor-pointer text-left
        transition-colors duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6000]
      "
    >
      {/*  Text */}
      <h3
        className={`md:text-xl font-medium transition-colors duration-300 ${
          isActive ? "text-[#FB6000]" : "text-[#020617]"
        }`}
      >
        {title}
      </h3>

      {/*  Arrow */}
      <span
        className={`
          transition-transform duration-300 
          motion-reduce:transition-none
          ${isActive ? "translate-x-2 text-[#FB6000]" : "text-[#808080]"}
        `}
        aria-hidden="true"
      >
        <FaArrowRight
          
          className={` text-[14px] md:text-xl ${isActive ? "lg:rotate-320 rotate-90 " : "rotate-0"}`}
        />
      </span>
    </button>
  );
};

export default memo(FeatureRow);
