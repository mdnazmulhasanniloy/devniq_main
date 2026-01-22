import React from 'react'
import { FiBox } from "react-icons/fi";

const AboutWork = ({title}) => {
  return (
    <>
    <div className="max-w-fit md:max-w-[578px] bg-[url(/work.svg)] bg-no-repeat bg-center  bg-cover rounded-2xl mt-5 md:mt-7 lg:mt-0 pt-60 lg:pt-80  pb-8 px-8">
<FiBox className= ' text-[32px] text-[#FFFFFF] pb-3.5'/>
<h3 className='md:max-w-[358px] font-bold text-2xl lg:text-[42px] text-[#FFFFFF] font-bdogrotesk pb-4'>{title}</h3>
<p className='font-manrope text-[12px] md:text-[14px] text-[#FFFFFF]'>Every product we build starts with the user. We create clean, intuitive experiences that feel effortless and meaningful to interact with.</p>
</div>
    </>
  )
}

export default AboutWork