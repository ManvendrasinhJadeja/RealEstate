import React from "react";

export const SecondoryWhiteBtn = ({text}) => {
  return (
    <>

      <a
        href={"#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 text-sm font-medium text-black border border-gray-300 rounded-md hover:bg-gray-100 transition"
      >
        {text}
      </a>
    </>
  );
};
