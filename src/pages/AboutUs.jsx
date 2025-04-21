import React from "react";
import { Navbar } from "../layouts/Navbar";
import { HeroPrimaryHeading } from "../layouts/HeroPrimaryHeading";

import { Accordian } from "../layouts/Accordian";
import { Footer } from "../layouts/Footer";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col py-[100px]">
        <HeroPrimaryHeading text1={"Who we are"} text2={"About us"} />
      </div>
        <div className="w-full h-auto flex flex-col  px-[5vw] lg:px-[5vw] xl:px-[16vw]">
          <Accordian/>
          </div>
      <Footer />
    </>
  );
};
