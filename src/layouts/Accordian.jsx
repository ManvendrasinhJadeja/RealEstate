import React, { useState } from "react";
import { CapsuleHeading } from "../components/CapsuleHeading";
import { SecondoryHeadingText } from "../components/SecondoryHeadingText";

export const Accordian = () => {
  const accordian_data = [
    {
      id: 1,
      title: "How long does it take to buy a home?",
      answer:
        "The home-buying process typically takes 30 to 60 days from the time an offer is accepted, depending on factors like financing, inspections, and the closing process.",
    },
    {
      id: 2,
      title: "How much should I save for a down payment?",
      answer:
        "It's recommended to save at least 20% of the home's price, but many lenders accept lower amounts with mortgage insurance.",
    },
    {
      id: 3,
      title: "Do I need a real estate agent to sell my home?",
      answer:
        "While not required, a real estate agent can help with pricing, marketing, and navigating the paperwork, making the process smoother.",
    },
    {
      id: 4,
      title: "What should I look for during a home inspection?",
      answer:
        "Look for issues with the roof, foundation, plumbing, electrical systems, and HVAC. A good inspector will point out major and minor problems.",
    },
    {
      id: 5,
      title: "What is the first step in buying a home?",
      answer:
        "The first step is to get pre-approved for a mortgage to understand your budget and show sellers you're serious.",
    },
  ];

  const [accordian, setAccordian] = useState(0);

  return (
    <div className="w-full h-auto py-2 px-2 flex justify-between items-start flex-wrap my-[100px]">
      <div className="w-[40%] py-4">
        <CapsuleHeading text="FAQ" />
        <h2 className="text-[30px] md:text-[40px] lg:text-[48px] text-[#000000] Inter600   leading-[112%]">
        Frequently Asked Questions
        </h2>
      </div>

      <div className="w-[60%] space-y-4 flex flex-col items-center">
        {accordian_data.map((e) => (
          <div
            key={e.id}
            className="w-[700px] py-[20px] bg-[#f7f7f7] border-[0.2px] border-solid border-[#b3aeaed9] rounded-[10px] flex flex-col cursor-pointer px-[20px] Inter800"
            onClick={() => setAccordian(e.id)}
          >
            <div className="font-bold text-[24px] flex-wrap flex justify-between px-1">
              <div>{e.title}</div>
              <div className="text-[17px]">
                {accordian === e.id ? (
                  <i className="ri-subtract-fill" />
                ) : (
                  <i className="ri-add-line" />
                )}
              </div>
            </div>
            <div
              className={`text-[14px] text-left px-1 transition-all duration-300 ${
                accordian === e.id ? "block" : "hidden"
              }`}
            >
              {e.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
