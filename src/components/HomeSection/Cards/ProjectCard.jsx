import React from 'react'
import Link from 'next/link'

const ProjectCard = ({ className, ProjectName, slug,TitleClassName,disableNavigation  }) => {
  return (
     <Link
        href={`/projects/${slug}`}
        className="block"
        onClick={(e) => {
          if (disableNavigation) e.preventDefault(); // prevent navigation if disabled
        }}
      >
      <div className={` md:max-w-[583px] bg-no-repeat bg-center pt-[280px] lg:pt-[443px] pb-4.5 md:pb-6 px-8 md:px-10 ${className}`}>
        <h3 className={`font-manrope  lg:text-[32px]   text-[#FFFFFF]  pb-4 ${TitleClassName}`}>
          {ProjectName}
        </h3>
       
        <span
          className={`text-[#D4D4D8] cursor-pointer font-manrope md:text-[16px] `}
        >
          View Details
        </span>
      
      </div>
    </Link>
  )
}

export default ProjectCard