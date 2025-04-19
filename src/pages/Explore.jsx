import React from "react";
import E3 from "../assets/Explore/E03.jpg";
import E4 from "../assets/Explore/E04.jpg";
import E5 from "../assets/Explore/E05.jpg";
import E6 from "../assets/Explore/E06.jpg";
import E7 from "../assets/Explore/E07.jpg";
import E8 from "../assets/Explore/E08.jpg";
import E9 from "../assets/Explore/E09.jpg";
import E10 from "../assets/Explore/E10.jpg";
import E11 from "../assets/Explore/E11.jpg";
import E12 from "../assets/Explore/E12.jpg";
import E13 from "../assets/Explore/E13.jpg";
import E14 from "../assets/Explore/E14.jpg";
import PropertyCard from "../components/PropertyCard";
import { HeroPrimaryHeading } from "../layouts/HeroPrimaryHeading";
import { Navbar } from "../layouts/Navbar";
import { PrimaryBlackBtn } from "../components/PrimaryBlackBtn";

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
  {
    image: E9,
    type: "Sale",
    price: "360",
    priceUnit: "/ month",
    title: "Harborview villas",
    location: "3722 Seaside Blvd, San Diego, California",
    area: 1345,
    beds: 4,
    baths: 2,
    garages: 1,
  },
  {
    image: E10,
    type: "Rent",
    price: "360",
    priceUnit: "/ month",
    title: "Maplewood grove",
    location: "254 Maplewood Ave, Nashville, Tennessee",
    area: 1680,
    beds: 3,
    baths: 2,
    garages: 1,
  },
  {
    image: E11,
    type: "Sale",
    price: "360",
    priceUnit: "/ month",
    title: "Evergreen heights",
    location: "875 Green Valley Ln, Portland, Oregon",
    area: 1020,
    beds: 2,
    baths: 1,
    garages: 1,
  },
  {
    image: E12,
    type: "Rent",
    price: "360",
    priceUnit: "/ month",
    title: "Riverside enclave",
    location: "593 Riverfront Dr, New Orleans, Louisiana",
    area: 1860,
    beds: 4,
    baths: 3,
    garages: 2,
  },
  {
    image: E13,
    type: "Sale",
    price: "460",
    priceUnit: "/ month",
    title: "Bluewater estates",
    location: "1290 Ocean Blvd, Myrtle Beach, South Carolina",
    area: 1150,
    beds: 2,
    baths: 2,
    garages: 1,
  },
  {
    image: E14,
    type: "Rent",
    price: "560",
    priceUnit: "/ month",
    title: "Woodland retreat",
    location: "645 Skyline Rd, Las Vegas, Nevada",
    area: 1580,
    beds: 4,
    baths: 2,
    garages: 1,
  },
];

export const Explore = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col px-[5vw] lg:px-[5vw] xl:px-[16vw] items-center">
        <HeroPrimaryHeading text1={"all propertie"} text2={"properties"} />
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
        <span className="my-7">
          <PrimaryBlackBtn text={"Explore all"} />
        </span>
      </div>
    </>
  );
};
