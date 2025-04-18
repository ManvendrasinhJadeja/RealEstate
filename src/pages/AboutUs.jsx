import React from "react";
import { Navbar } from "../layouts/Navbar";
import { HeroPrimaryHeading } from "../layouts/HeroPrimaryHeading";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col py-[100px]">
        <HeroPrimaryHeading text1={"Who we are"} text2={"About us"} />
      </div>
    </>
  );
};
