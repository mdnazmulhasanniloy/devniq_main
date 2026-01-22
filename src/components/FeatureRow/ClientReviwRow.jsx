"use client";
import { useState } from "react";
import FadeLeft from "../Animations/FadeLeft.jsx";
import FadeRight from "../Animations/FadeRight.jsx";
import FadeUp from "../Animations/Fadeup.jsx";
import TstimonialsCard from "../HomeSection/Cards/TstimonialsCard.jsx";

const ClientReviwRow = ({ClientClass}) => {
  const [active, setActive] = useState("middle");

  return (
    <div className="hidden lg:block">
    <div className="flex  items-stretch  justify-evenly w-full">

      {/*  LEFT */}
      <div
        onMouseEnter={() => setActive("left")}
        onMouseLeave={() => setActive("middle")}
      >
        <FadeLeft>
          <TstimonialsCard
            isActive={active === "left"}
            className={`bg-[url(/Co-Founder.svg)] bg-center pl-6 min-w-[316px] max-w-[583px] h-[568px] `}
            DescriptionClassName="lg:hidden group-hover:block"
            ClientName="Leslie Alexander"
            Position="Co-Founder of Womenia"
          />
        </FadeLeft>
      </div>

      {/*  MIDDLE (DEFAULT BIG, NEVER HOVER) */}
      <FadeUp>
        <TstimonialsCard
          isActive={active === "middle"}
          disableHover
          className={`bg-[url(/Founder.svg)] bg-center pl-10  rounded-[20px] min-w-[316px] max-w-[583px]   `}
          DescriptionClassName="max-w-[503px] "
          ClientClass={ClientClass}
          ClientName="Albert Flores"
          Position="Founder of GearUp"
        />
      </FadeUp>

      {/*  RIGHT */}
      <div
        onMouseEnter={() => setActive("right")}
        onMouseLeave={() => setActive("middle")}
      >
        <FadeRight>
          <TstimonialsCard
            isActive={active === "right"}
            className={`bg-[url(/LeslieAlexander.svg)] bg-center pl-6 min-w-[316px] max-w-[583px] h-[568px]`}
            DescriptionClassName="lg:hidden group-hover:block"
            ClientName="Leslie Alexander"
            Position="Co-Founder of Womenia"
          />
        </FadeRight>
      </div>

    </div>
    </div>
  );
};

export default ClientReviwRow;
