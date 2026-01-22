import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

import FadeUp from "../Animations/Fadeup.jsx";

import ClientReviwRow from "../FeatureRow/ClientReviwRow.jsx";
import ClientReviwSlider from "../Slider/ClientReviewSlider.jsx";

const Tstimonials = () => {
  return (
    <div className="py-10  lg:py-20 bg-[#FFFFF]">
      <ResponsiveContainer>
        <FadeUp>
          <SectionHeader
            className="text-[#22282B] lg:max-w-[906px] m-auto pb-14"
            section="Client Tstimonials"
            SNClassName="justify-center font-lato font-semibold"
            Title="Results That Speak for Themselves"
            TitleClassName=" w-full  leading-[100%] py-5 md:py-6"
            subtitle="From startups to enterprises, our clients share how Devniq helped them achieve smooth, scalable digital growth."
            SubClassName="md:max-w-[642px] m-auto  font-semibold leading-[150%]  px-5 md:px-0 opacity-80"
          />
        </FadeUp>

        <ClientReviwRow />
        <ClientReviwSlider />
      </ResponsiveContainer>
    </div>
  );
};

export default Tstimonials;
