import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

import FadeUp from "../Animations/Fadeup.jsx";
import ProjectTicker from "../Slider/ProjectTicker.jsx";

const Projects = () => {
  return (
    <>
      <div className="py-10 md:py-15 lg:py-20 bg-[#FFFCFA]">
        <ResponsiveContainer>
          <FadeUp>
            <SectionHeader
              className={"text-[#22282B] pb-8 md:pb-[43px]"}
              section={"CASE STUDIES"}
              SNClassName={"font-lato justify-center lg:justify-start font-semibold"}
              Title={"Projects That Speak for Themselves"}
              TitleClassName={
                "lg:max-w-[906px] w-full mx-auto lg:mx-0 px-3 md:px-0   leading-[100%] py-3  md:py-5 lg:text-start!"
              }
              subtitle={
                "Explore the products we’ve crafted — each built with clarity, scalability, and a human-first experience."
              }
              SubClassName={
                "leading-[150%] md:max-w-[642px] lg:text-start! font-semibold px-5 md:px-0  opacity-80"
              }
            />
          </FadeUp>
        </ResponsiveContainer>
        <ProjectTicker />
      </div>
    </>
  );
};

export default Projects;
