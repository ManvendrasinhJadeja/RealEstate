import React from "react";
import { Navbar } from "../layouts/Navbar";

import { HeroPrimaryHeading } from "../layouts/HeroPrimaryHeading";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col py-[100px]">
        <HeroPrimaryHeading
          text1={"buy & sell your dream"}
          text2={"Real-estate"}
        />
      </div>
    </>
  );
};
