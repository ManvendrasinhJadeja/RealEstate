import React from 'react'

export const HeroCapsuleHeading = ({text}) => {
  return (
    <>
    <div className=" w-auto inline-flex items-center justify-center uppercase bg-[#f7f7f7] border-[2px] border-[#e8e8e8] rounded-[28px] h-[40px] mb-[16px] Inter500 text-[12px] md:text-[14px] lg:text-[16px] text-[#0c0407] pt-[12px] pr-[18px] pb-[12px] pl-[18px]">
    <i className="ri-home-5-line text-[20px] flex justify-center items-center"></i>  {text}
</div>  
    </>
  )
}
