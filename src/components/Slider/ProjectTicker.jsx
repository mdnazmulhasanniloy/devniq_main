"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../HomeSection/Cards/ProjectCard.jsx";

const ProjectTicker = () => {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [fullWidth, setFullWidth] = useState(0);
  const animationRef = useRef(null);

  const projects = [
    {
      className: "bg-[url(/EmplyeeProject.svg)] bg-cover bg-center rounded-xl shadow-md",
      name: "Employee Management Dashboard",
      slug: "employee-dashboard",  
      
    },
    {
      className: "bg-[url(/HabitProject.svg)] bg-cover bg-center rounded-xl shadow-md",
      name: "Habit Building App For Working Individuals",
      slug: "habit-app",  
    },
  ];

  //  Triple duplication for infinite loop
  const items = [...projects, ...projects, ...projects];

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 3;
      setFullWidth(width);

      //  Start smooth infinite animation
      animationRef.current = animate(x, -width, {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      });
    }

    return () => animationRef.current?.stop();
  }, [x]);

  return (
    <div className="w-full overflow-hidden py-4">
      <motion.div
        ref={trackRef}
        className="flex gap-x-5 cursor-pointer"
        style={{ x }}
        onMouseEnter={() => animationRef.current?.pause()}
        onMouseLeave={() => animationRef.current?.play()}
      >
        {items.map((project, index) => (
          <div key={index} className="shrink-0">
            <ProjectCard
              className={project.className}
              ProjectName={project.name}
              slug={project.slug}  
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectTicker;