import React from 'react'

const SectionHeader = ({className,section,SNClassName,TitleClassName,Title,subtitle,SubClassName}) => {
  return (
    <>
    <div className={`${className}`}>
        <div className={`flex items-center text-center font-semibold  gap-x-1.5 ${SNClassName}`}>
            <div className="bg-[#FF7A08] w-2 h-2 rounded-full"></div>
            <h3 >{section}</h3>
            
        </div>

        <h2 className={`font-bdogrotesk text-center font-bold text-[24px] md:text-[30px] lg:text-[56px] xl:text-[72px] ${TitleClassName}`} >{Title}</h2>  
        <p className={`font-manrope text-[12px]  md:text-[16px] text-center ${SubClassName}`}>{subtitle}</p> 
    </div>
    </>
  )
}

export default SectionHeader