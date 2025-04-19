import React from "react";

export const PrimaryBlackBtn = ({ text }) => {
  return (
    <>
      <div className=" py-[14px] px-[22px] lg:py-[16px] lg:px-[28px] bg-[#000000] text-[#ffffff] rounded-[16px] text-[16px] Inter700 flex justify-center items-center ">
        <div className="h-[16px]  flex justify-center items-center text-[#ffffff] text-[16px] Inter500 ">
          {text}
        </div>
      </div>
    </>
  );
};
