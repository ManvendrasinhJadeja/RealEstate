import React from "react";
import { Navbar } from "../layouts/Navbar";
import { HeroPrimaryHeading } from "../layouts/HeroPrimaryHeading";

export const Agents = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col py-[100px]">
        <HeroPrimaryHeading text1={"our agents"} text2={"agents"} />
      </div>
    </>
  );
};
