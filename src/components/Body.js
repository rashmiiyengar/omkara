import React from "react";
import Vedio from "./Vedio";

const Body = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* First Row with Carousel */}
      <div className="flex-1 relative overflow-hidden bg-cover bg-center">
        {/* Carousel Component or Content */}
        <Vedio />
        {/* Overlay for Text */}
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        {/* Content for the first section goes here */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-3xl font-bold text-white">WHO WE ARE</h1>
        </div>
      </div>

      {/* Second Row with Two Equally Split Divs */}
      <div className="flex-1 overflow-y-auto bg-gray-200 p-4">
        <div className="flex">
          {/* First Div (Left Side) */}
          <div className="flex-1 p-4">
            {/* Content for the first div goes here */}
            <p className="text-xl font-bold mb-4">Left Side Content</p>
          </div>

          {/* Second Div (Right Side) */}
          <div className="flex-1 p-4">
            {/* Content for the second div goes here */}
            <p className="text-xl font-bold mb-4">Right Side Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;