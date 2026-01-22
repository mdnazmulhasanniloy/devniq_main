import FadeUp from "../Animations/Fadeup.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import Ticker from "../Slider/Ticker.jsx";
const Service = () => {
  return (
    <>
  

      <div className="py-6  md:py-8 lg:py-10 bg-white">
        <div className="bg-[url(/ServiceBG.svg)] bg-no-repeat bg-center bg-cover py-8 md:py-10 lg:py-12">
        <FadeUp>
          <SectionHeader
            className={"m-auto md:max-w-[906px]"}
            section={"SERVICES"}
            SNClassName={"font-lato justify-center text-[#FFFFFF] "}
            Title={"From Idea to Powerful Digital Product"}
            TitleClassName={" text-[#FFFFFF] leading-[100%] py-3  md:py-6"}
            subtitle={
              "We build smart, scalable, and user-focused digital products — from idea to launch and beyond."
            }
            SubClassName={
              "text-[#FFFFFF] max-w-[526px] opacity-80 m-auto leading-[150%] px-5 md:px-0 pb-7 md:pb-9 lg:pb-11"
            }
          />
</FadeUp>
          <Ticker/>
        </div>
      </div>
      
    </>
  );
};

export default Service;
