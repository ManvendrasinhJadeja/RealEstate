import React from "react";
import { HeroPrimaryHeading } from "../layouts/HeroPrimaryHeading";

import b2 from "../assets/Blog/B02.jpg";
import b3 from "../assets/Blog/B03.jpg";
import b4 from "../assets/Blog/B04.jpg";
import b5 from "../assets/Blog/B05.jpg";
import b6 from "../assets/Blog/B06.jpg";
import b7 from "../assets/Blog/B07.jpg";
import b8 from "../assets/Blog/B08.jpg";
import b9 from "../assets/Blog/B09.jpg";
import b10 from "../assets/Blog/B10.jpg";
import b11 from "../assets/Blog/B11.jpg";
import b12 from "../assets/Blog/B12.jpg";
import b13 from "../assets/Blog/B13.jpg";
import { Navbar } from "../layouts/Navbar";
import BlogCard from "../components/BlogCard";

const blogData = [
  { image: b2, readTime: "14 min read" },
  { image: b3, readTime: "20 min read" },
  { image: b4, readTime: "9 min read" },
  { image: b5, readTime: "7 min read" },
  { image: b6, readTime: "11 min read" },
  { image: b7, readTime: "2 min read" },
  { image: b8, readTime: "8 min read" },
  { image: b9, readTime: "6 min read" },
  { image: b10, readTime: "3 min read" },
  { image: b11, readTime: "7 min read" },
  { image: b12, readTime: "2 min read" },
  { image: b13, readTime: "4 min read" },
];
export const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col  px-[5vw] lg:px-[5vw] xl:px-[16vw]">
        <HeroPrimaryHeading text1={"all articles"} text2={"blogs"} />
        <div
          className="grid auto-rows-auto auto-cols-fr 
                gap-[41px] 
                md:gap-[40px] 
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3"
        >
          {blogData.map((item, index) => (
            <BlogCard key={index} image={item.image} readTime={item.readTime} />
          ))}
        </div>
      </div>
    </>
  );
};
