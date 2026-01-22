import Image from 'next/image'
import React from 'react'

const BlogCard = ({src,PostTitle}) => {
  return (
    <>
    <div className="   lg:max-w-[379px]">
        <Image src={src} alt={PostTitle} height={356} width={379} className={`rounded-2xl `}/>
 <h3 className='text-[#131517] text-[17px] md:text-[21px] font-semibold font-manrope pt-3 pb-1.5 md:pt-4 md:pb-3'>{PostTitle}</h3>
 <span className='text-[#FF7A08] font-medium text-[12px] md:text-[14px] cursor-pointer font-manrope'>View Details</span>
    </div>
    </>
  )
}

export default BlogCard