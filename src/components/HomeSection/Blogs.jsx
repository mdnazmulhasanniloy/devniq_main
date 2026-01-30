import FadeLeft from "../Animations/FadeLeft.jsx";
import FadeRight from "../Animations/FadeRight.jsx";
import FadeUp from "../Animations/Fadeup.jsx";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer.jsx";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import BlogCardSlider from "../Slider/BlogCardSlider.jsx";
import BlogCard from "./Cards/BlogCard.jsx";


const Blogs = () => {
  return (
    <>
      <div className="py-10 bg-[#FFFCFA] ">
        <ResponsiveContainer>
          <FadeUp>
            <SectionHeader
              className={"text-[#22282B] pb-10 md:pb-14"}
              section={"Blogs & INSIGHTS"}
              SNClassName={"justify-center font-lato "}
              Title={"Learn From Our Experience"}
              TitleClassName={
                "md:max-w-[906px] w-full m-auto   leading-[100%] py-5 md:py-6"
              }
              subtitle={
                "Actionable guides and insights on UI/UX, development, branding, and product strategy."
              }
              SubClassName={
                "font-semibold opacity-80 max-w-[480px] px-3 md:px-0 m-auto leading-[150%]"
              }
            />
          </FadeUp>
          {/* Dekstop Blog   */}
          <div className="hidden lg:block">
          <div className="flex items-center flex-wrap gap-5 justify-evenly">
            <FadeLeft>
              <BlogCard
                src={"/smooth-user-experience.svg"}
                PostTitle={"How to Build a Smooth User Experience in 2026?"}
              />
            </FadeLeft>
            <FadeUp>
              <BlogCard
                src={"/MVP-faster.svg"}
                PostTitle={"The Startup Guide to Launching an MVP Faster?"}
              />
            </FadeUp>
            <FadeRight>
              <BlogCard
                src={"/Front-End.svg"}
                PostTitle={"Top Front-End Development Trends You Should Know"}
              />
            </FadeRight>
          </div>
          </div>
          {/* Mobile Blog Slider  */}
          <BlogCardSlider/>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Blogs;
