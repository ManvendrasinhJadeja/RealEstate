import React from "react";
import { CapsuleHeading } from "../components/CapsuleHeading";
import { PrimaryBlackBtn } from "../components/PrimaryBlackBtn";
import { SecondoryHeadingText } from "../components/SecondoryHeadingText";

export const TextImageSection = ({ text1, text2, text3, text4, imgSrc ,flexType}) => {
  return (
    <>
      <div className={`${flexType} min-h-[500px] flex-wrap flex`}>
        <div className="flex flex-col justify-around min-w-[300px] md:w-[50%] px-[30px]">
          <div className="flex flex-col gap-4 items-start text-start">
            <CapsuleHeading text={text1} />
            <h2 className="text-[30px] md:text-[40px] lg:text-[48px] text-[#000000] Inter600   leading-[112%]">
              {text2}
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="text-[14px] Inter300 text-balance">{text3}</p>
            <PrimaryBlackBtn text={text4} />
          </div>
        </div>
        <div className="md:w-[50%] p-[30px] min-w-[300px] ">
          <img src={imgSrc} alt="" className="m-5 rounded-3xl w-full" />
        </div>
      </div>
    </>
  );
};
