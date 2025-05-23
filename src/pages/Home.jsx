import React from "react";
import { Navbar } from "../layouts/Navbar";
import HeroImg from "../assets/Home/H02.png";
import { HeroPrimaryHeading } from "../layouts/HeroPrimaryHeading";
import { SecondoryHeadings } from "../layouts/SecondoryHeadings";
import E3 from "../assets/Explore/E03.jpg";
import E4 from "../assets/Explore/E04.jpg";
import E5 from "../assets/Explore/E05.jpg";
import E6 from "../assets/Explore/E06.jpg";
import E7 from "../assets/Explore/E07.jpg";
import E8 from "../assets/Explore/E08.jpg";
import PropertyCard from "../components/PropertyCard";
import { PrimaryBlackBtn } from "../components/PrimaryBlackBtn";
import { TextImageSection } from "../layouts/TextImageSection";
import { TextImageSection2 } from "../layouts/TextImageSection2";
import splitImg1 from "../assets/Home/H09.jpg";
import splitImg2 from "../assets/Home/H13.jpg";
import { Footer } from "../layouts/Footer";
import { Accordian } from "../layouts/Accordian";
import { SecondoryHeadingText } from "../components/SecondoryHeadingText";
import b2 from "../assets/Blog/B02.jpg";
import b3 from "../assets/Blog/B03.jpg";
import b4 from "../assets/Blog/B04.jpg";

import BlogCard from "../components/BlogCard";
import { CapsuleHeading } from "../components/CapsuleHeading";

const blogData = [
  { image: b2, readTime: "14 min read" },
  { image: b3, readTime: "20 min read" },
  { image: b4, readTime: "9 min read" },
];
const properties = [
  {
    image: E3,
    type: "Rent",
    price: "400",
    priceUnit: "/ month",
    title: "Sunset luxury villa",
    location: "12273 Dream Avenue, New York",
    area: 1490,
    beds: 3,
    baths: 2,
    garages: 2,
  },
  {
    image: E4,
    type: "Sell",
    price: "50,000",
    priceUnit: "",
    title: "Parkview estates",
    location: "2972 Westheimer Rd. Santa Ana, Illinois",
    area: 2370,
    beds: 4,
    baths: 3,
    garages: 2,
  },
  {
    image: E5,
    type: "Rent",
    price: "200",
    priceUnit: "/ month",
    title: "Cedar grove residences",
    location: "8502 Preston Rd. Inglewood, Maine",
    area: 1300,
    beds: 3,
    baths: 1,
    garages: 1,
  },
  {
    image: E6,
    type: "Sell",
    price: "32,000",
    priceUnit: "",
    title: "Lakeside manor",
    location: "2464 Royal Ln. Mesa, New Jersey",
    area: 700,
    beds: 2,
    baths: 1,
    garages: 1,
  },
  {
    image: E7,
    type: "Rent",
    price: "520",
    priceUnit: "/ month",
    title: "Oceanfront oasis",
    location: "6391 Elgin St. Celina, Delaware",
    area: 1500,
    beds: 3,
    baths: 2,
    garages: 3,
  },
  {
    image: E8,
    type: "Rent",
    price: "360",
    priceUnit: "/ month",
    title: "Skyline tower",
    location: "2715 Ash Dr. San Jose, South Dakota",
    area: 1250,
    beds: 3,
    baths: 2,
    garages: 1,
  },
];
export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto flex flex-col  px-[5vw] lg:px-[5vw] xl:px-[16vw]">
        <HeroPrimaryHeading
          text1={"buy & sell your dream"}
          text2={"Real-estate"}
        />
      </div>
      <div className="lg:mb-[150px]">
        <img
          src={HeroImg}
          alt=""
          className="w-full object-cover px-[5vw] lg:px-[5vw] xl:px-[8vw]"
        />
      </div>
      <div className="w-full  pt-[100px] px-[5vw] lg:px-[5vw] xl:px-[16vw] flex flex-col justify-center items-center gap-6">
        <SecondoryHeadings
          text1={"Recent properties"}
          text2={"Featured properties"}
        />
        <div
          className="grid auto-rows-auto auto-cols-fr 
                gap-[41px] 
                md:gap-[40px] 
                grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3"
        >
          {properties.map((item, index) => (
            <PropertyCard key={index} {...item} />
          ))}
        </div>
        <span className="my-5">
          <PrimaryBlackBtn text={"Explore all"} />
        </span>
      </div>

      <div className="w-full  pt-[100px] px-[5vw] lg:px-[5vw] xl:px-[16vw] ">
        <TextImageSection
          text1={"about us"}
          text2={"The ideal way to find your dream home"}
          text3={
            "Wake up to the sound of waves and the smell of salt air in one of our stunning coastal homes. Perfect for those seeking a serene escape, these properties offer unmatched ocean views and direct beach safe neighborhoods, and nearby schools access."
          }
          text4={"Read more"}
          imgSrc={splitImg1}
        />
      </div>

      <div className="w-full  pt-[100px] px-[5vw] lg:px-[5vw] xl:px-[16vw] ">
        <TextImageSection2
          text1={"Why Choose Us"}
          text2={"Why we are best in Real-Estate market?"}
          text3={
            "With our unmatched expertise, personalized service, and deep knowledge of the real estate market, we make your home buying or selling experience seamless and stress-free. Our dedicated team of professionals listens to your needs, provides tailored."
          }
          text4={"Contact us"}
          imgSrc={splitImg2}
        />
      </div>

      <div className="w-full h-auto flex flex-col  px-[5vw] lg:px-[5vw] xl:px-[16vw] mt-[100px]">
        <SecondoryHeadings
          text1={"Property Categories"}
          text2={"Start your journey to your ideal property"}
        />
      </div>

      <div className="w-full h-auto flex flex-col  px-[5vw] lg:px-[5vw] xl:px-[17vw] mt-[100px]">
        <div className="w-full flex justify-between items-center">
          <div className="h-full flex flex-col  items-start gap-3">
            <CapsuleHeading text={"articles"}/>
            <SecondoryHeadingText text={"Read our latest blogs"}/>
          </div>
          <div className="">
            <PrimaryBlackBtn text={"Explore All"}/>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col  px-[5vw] lg:px-[5vw] xl:px-[16vw] ">
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
      <div className="w-full h-auto flex flex-col  px-[5vw] lg:px-[5vw] xl:px-[16vw]">
        <Accordian />
      </div>

      <Footer />
    </>
  );
};
