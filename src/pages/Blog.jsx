import React from "react";
import { HeroPrimaryHeading } from "../layouts/HeroPrimaryHeading";
import { Navbar } from "../layouts/Navbar";

export const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col py-[100px]">
        <HeroPrimaryHeading text1={"all articles"} text2={"blogs"} />
      </div>
    </>
  );
};
