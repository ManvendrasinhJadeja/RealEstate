import React from "react";
import { CapsuleHeading } from "../components/CapsuleHeading";
import { SecondoryHeadingText } from "../components/SecondoryHeadingText";

export const SecondoryHeadings = ({text1, text2}) => {
  return (
    <>
      <div className="text-center mb-[40px]  flex flex-col gap-4 items-center">
        <CapsuleHeading text={text1} />
        <SecondoryHeadingText text={text2} />
      </div>
    </>
  );
};
