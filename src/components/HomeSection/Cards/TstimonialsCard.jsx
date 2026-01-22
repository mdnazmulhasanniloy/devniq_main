"use client";
import { motion } from "framer-motion";

const TstimonialsCard = ({
  className,
  ClientName,
  Position,
  DescriptionClassName,
  disableHover = false,
  isActive = false,
ClientClass
}) => {
  return (
  <motion.div
  layout="position"
  animate={{
    flexGrow: isActive ? 2 : 1,
    scaleX: isActive ? 1.035 : 1,
  }}
  whileHover={
    disableHover
      ? undefined
      : {
          flexGrow: 2,
          scaleX: 1.07,
          zIndex: 20,
        }
  }
  transition={{
    type: "spring",
    stiffness: 90,     
    damping: 28,       
    mass: 1.2,         
    restDelta: 0.001,  
  }}
  style={{ transformOrigin: "center center" }}
  className={`relative bg-no-repeat bg-cover group cursor-pointer 
    rounded-lg lg:h-[568px] 
    pt-[250px] lg:pt-[345px] pb-6 lg:mx-4 
    flex flex-col
    min-w-[260px]
    ${className}`}

>
      {/* Description */}
      <p
        className={`lg:text-xl font-manrope text-[#FFFFFF]/80 md:text-[#FFFFFF]
        lg:opacity-0 translate-y-4
        transition-all duration-700
        ${isActive ? "lg:opacity-100 lg:translate-y-0" : ""}
        ${
          !disableHover
            ? "group-hover:opacity-100 group-hover:translate-y-0 "
            : ""
        }
        ${DescriptionClassName}`}
      >
        Working with Devniq was one of the smoothest experiences we’ve had with
        a tech partner. They understood our goals immediately and built a
        scalable dashboard that our customers love.
      </p>

      {/* Always Bottom */}
      <div className={`mt-auto pt-3 lg:pt-0 `}>
        <h3 className={`font-bold font-bdogrotesk text-[18px] duration-300 
          text-[#FF7A08] lg:text-[#FFFFFF] group-hover:text-[#FF7A08] pt-3 pb-1 ${ClientClass}`}>
          {ClientName}
        </h3>

        <span className="text-[#D4D4D8] font-manrope">
          {Position}
        </span>
      </div>
    </motion.div>
  );
};

export default TstimonialsCard;
