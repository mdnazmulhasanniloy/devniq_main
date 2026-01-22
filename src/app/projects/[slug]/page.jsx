"use client";
import FadeLeft from "@/components/Animations/FadeLeft";
import FadeRight from "@/components/Animations/FadeRight";
import FadeUp from "@/components/Animations/Fadeup";
import ClientReviwRow from "@/components/FeatureRow/ClientReviwRow";
import BlogCard from "@/components/HomeSection/Cards/BlogCard";
import ProjectCard from "@/components/HomeSection/Cards/ProjectCard";
import Contact from "@/components/HomeSection/Contact";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import BlogCardSlider from "@/components/Slider/BlogCardSlider";
import ClientReviwSlider from "@/components/Slider/ClientReviewSlider";
import { useParams } from "next/navigation";
import { useState } from "react";
import CustomDropdown from "../../../components/CustomDropDown/CustomDropdown.jsx";
import ProjectContext from "./ProjectContext/ProjectContext.jsx";

export default function ProjectDetails() {
  const [activeSection, setActiveSection] = useState("Project Overview");
  const params = useParams();
  const slug = params.slug;

  //project data
  const projectData = {
    "employee-dashboard": {
      title: "Employee Management Dashboard",
      description: "A complete dashboard to manage employee performance.",
      details:
        "This dashboard helps managers track employee performance, attendance, and productivity metrics.",
      bgImage: "bg-[url(/EmplyeeProject.svg)]",
    },
    "habit-app": {
      title: "Habit Building App For Working Individuals",
      description: "A habit tracking app for working professionals.",
      details:
        "Track your daily habits, build streaks, and improve your productivity with smart reminders.",
      bgImage: "bg-[url(/HabitProject.svg)]",
    },
  };

  const projectOptions = [
    { label: "Project Overview", value: "Project Overview" },
    { label: "Client Reviews", value: "Client Reviews" },
    { label: "Project UI", value: "Project UI" },
  ];

  // Get the project based on slug
  const project = projectData[slug];

  // Display project details
  return (
    <>
      <div className="min-h-screen  pt-[121px]">
        <ScrollToTop />
        <ResponsiveContainer>
          <ProjectCard
            className={`${project.bgImage} bg-cover bg-center rounded-xl shadow-md max-w-full! `}
            ProjectName={project.title}
            TitleClassName={
              "text-[20px] md:text-[30px] lg:text-[64px] max-w-[320px] md:max-w-[784px]"
            }
            disableNavigation={true}
          />
          <FadeRight>
            <div className="py-9 md:py-12 text-[#22282B] flex justify-evenly lg:justify-end md:gap-x-8 lg:gap-x-16">
              <div>
                <h3 className="font-bold text-xl md:text-2xl lg:text-[40px] font-bdogrotesk">
                  2 Months
                </h3>
                <h4 className="font-semibold font-manrope lg:text-[16px] opacity-80 pt-3 md:pt-4">
                  Project Duration
                </h4>
              </div>

              <div>
                <h3 className="font-bold text-xl md:text-2xl lg:text-[40px] font-bdogrotesk">
                  Mobile App
                </h3>
                <h4 className="font-semibold font-manrope lg:text-[16px] opacity-80 pt-3 md:pt-4">
                  Project Scope
                </h4>
              </div>

              <div>
                <h3 className="font-bold text-xl md:text-2xl lg:text-[40px] font-bdogrotesk">
                  2025
                </h3>
                <h4 className="font-semibold font-manrope lg:text-[16px] opacity-80 pt-3 md:pt-4">
                  Year
                </h4>
              </div>
            </div>
          </FadeRight>
          <div className="p-3 md:p-6 lg:p-10 border border-[#ECEDF2] rounded-2xl">
            {/* Project description */}
            <div className="flex items-center  justify-between gap-x-2.5 lg:gap-0">
              <FadeLeft>
                <h3 className="max-w-[585px]  text-[#020617] font-bold text-[20px] lg:text-[48px] leading-[106%] font-bdogrotesk">
                  {project.title}
                </h3>
              </FadeLeft>
              {/* Dropdown */}
              <FadeRight>
                <CustomDropdown
                  options={projectOptions}
                  placeholder="Project Overview"
                  onChange={(value) => setActiveSection(value)}
                />
              </FadeRight>
            </div>
            <FadeLeft>
              <p className="pt-4 md:pt-6 text-[#22282B] text-[13px] md:text-[16px] opacity-80 font-manrope">
                {project.title} is a web-based platform designed to help
                organizations efficiently manage their workforce. The dashboard
                provides administrators and managers with tools to monitor
                employee details, track attendance, manage leaves, and generate
                reports — all through a clean, intuitive, and scalable
                interface.
              </p>
            </FadeLeft>

            {/* default Description */}
            {activeSection === "Project Overview" && (
              <div className="pt-8  md:pt-10 space-y-8 md:space-y-10">
                <FadeLeft>
                  <ProjectContext
                    PointName="Introduction"
                    Details="Managing employees manually or across multiple disconnected systems can lead to inefficiencies, errors, and delays in decision-making. Organizations need a centralized solution that simplifies employee management while providing actionable insights."
                  />
                </FadeLeft>

                <FadeLeft>
                  <ProjectContext
                    PointName="Problem Statement"
                    Details="Managing employees manually or across multiple disconnected systems can lead to inefficiencies, errors, and delays in decision-making. Organizations need a centralized solution that simplifies employee management while providing actionable insights."
                  />
                </FadeLeft>

                <FadeLeft>
                  <ProjectContext
                    PointName="Solution Procedure"
                    Details="Managing employees manually or across multiple disconnected systems can lead to inefficiencies, errors, and delays in decision-making. Organizations need a centralized solution that simplifies employee management while providing actionable insights."
                  />
                </FadeLeft>
              </div>
            )}

            {/* if option is select Client Reviews */}
            {activeSection === "Client Reviews" && (
              <>
                {/* Dekstop Client Reviwe slider  */}
                <div className="pt-10">
                  <ClientReviwRow ClientClass={"pt-0!"} />
                </div>
                {/* Mobile Client Reviwe slider  */}
                <ClientReviwSlider className={"pt-5"} />
              </>
            )}

            {/* if option is select Project UI */}
            {activeSection === "Project UI" && (
              <>
                {/* Dekstop Blog slider  */}
                <div className="hidden lg:block">
                  <div className="flex items-center  justify-between pt-10">
                    <FadeLeft>
                      <BlogCard
                        src={"/smooth-user-experience.svg"}
                        PostTitle={
                          "How to Build a Smooth User Experience in 2026?"
                        }
                      />
                    </FadeLeft>
                    <FadeUp>
                      <BlogCard
                        src={"/MVP-faster.svg"}
                        PostTitle={
                          "The Startup Guide to Launching an MVP Faster?"
                        }
                      />
                    </FadeUp>
                    <FadeRight>
                      <BlogCard
                        src={"/Front-End.svg"}
                        PostTitle={
                          "Top Front-End Development Trends You Should Know"
                        }
                      />
                    </FadeRight>
                  </div>
                </div>
                {/* Mobile Blog slider  */}
                <BlogCardSlider className={"pt-5"} />
              </>
            )}
          </div>
        </ResponsiveContainer>
      </div>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
