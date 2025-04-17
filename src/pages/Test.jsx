import React from "react";
import { Navbar } from "../layouts/Navbar";
import { CapsuleHeading } from "../components/CapsuleHeading";

export const Test = () => {
  return (
    <>
    <Navbar/>
    <div className="h-screen w-full flex justify-center items-center">

    <CapsuleHeading text="home"/>
    </div>
    </>
  );
};
