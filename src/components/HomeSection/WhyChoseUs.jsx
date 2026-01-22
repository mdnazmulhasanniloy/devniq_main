"use client";
import { useState } from "react";
import FadeLeft from "../Animations/FadeLeft.jsx";
import FadeRight from "../Animations/FadeRight.jsx";
import AboutWork from "../FeatureRow/AboutWork.jsx";
import FeatureRow from "../FeatureRow/FeatureRow.jsx";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

const WhyChoseUs = () => {
  const [active, setActive] = useState(0);

  const features = [
    "Human-Centered Design",
    "End-to-End Expertise",
    "Reliable Post-Launch Support",
    "Scalable Engineering",
  ];

  return (
    <div className="py-13 md:py-16 lg:py-20 bg-[#FFFFFF]">
      <ResponsiveContainer>
        <div className="md:flex flex-wrap items-center justify-between">
          {/* Right side */}
          <div className="md:max-w-[686px] space-y-12">
            <FadeLeft>
              <SectionHeader
                className={"text-[#22282B] "}
                section={"WHY CHOOSE US"}
                SNClassName={"font-lato  justify-center md:justify-start"}
                Title={"Why Choose Us"}
                TitleClassName={" py-3.5 md:py-5 lg:text-start!"}
                subtitle={
                  "We combine clarity, craftsmanship, and technical precision to deliver digital products that simply work — and work beautifully."
                }
                SubClassName={
                  "md:max-w-[558px] md:text-[16px] font-semibold md:text-start! px-5 md:px-0 opacity-80"
                }
              />
            </FadeLeft>

            {/* Feature Row List */}
            <div className="w-full space-y-3 md:space-y-4">
              {features.map((item, index) => (
                <FadeLeft key={item}> 
                  <FeatureRow
                    title={item}
                    isActive={active === index}
                    onClick={() => setActive(index)}
                  />
                </FadeLeft>
              ))}
            </div>
          </div>

          {/* Left side */}
          <FadeRight>
            <AboutWork title={features[active]} />
          </FadeRight>
        </div>
        
      </ResponsiveContainer>
    </div>
  );
};

export default WhyChoseUs;
