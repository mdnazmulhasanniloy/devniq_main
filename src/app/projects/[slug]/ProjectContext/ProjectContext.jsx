import React from 'react'

const ProjectContext = ({PointName,Details}) => {
  return (
    <>
    <div className="font-manrope ">
        <h3 className='text-[#000000] font-bold text-xl md:text-[24px] pb-4'>{PointName}</h3>
        <p className='font-medium leading-[150%]  text-[13px] md:text-[16px] opacity-80'>{Details}</p>
    </div>
    </>
  )
}

export default ProjectContext