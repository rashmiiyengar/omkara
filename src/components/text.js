import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative h-screen flex flex-col">
      {/* Image Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://bloximages.chicago2.vip.townnews.com/pantagraph.com/content/tncms/assets/v3/editorial/8/4d/84d21b8d-ffad-5b0d-b272-74ce6f4be1d4/5be4bed65286f.image.jpg?resize=1013%2C500')" }}
      ></div>

      {/* Logo and Navigation */}
      <div className="relative z-10 flex items-center justify-between p-4">
        {/* Logo on the left */}
        <div className="flex items-center">
         
          <span className="text-white text-lg font-extralight ml-2 ">
            <span className="font-light text-4xl block">Omkara
                </span><span className="block mx-12">Dance Academy</span> </span>
        </div>

        {/* Navigation on the right */}
        <ul className="flex p-4 m-4">
          <li className="text-white px-4 text-xl font-bold hover:text-gray-700 hover:shadow-xl transition-all duration-400 hover:cursor-pointer">
         <Link to="/">Home</Link>
           </li>
          <li className="text-white px-4 text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            <Link to="/about">About Us</Link>
            </li>
          <li className="text-white px-4 text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">Bollywood Classes</li>
          <li className="text-white px-4 text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">Special Services</li>
          <li className="text-white px-4 text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">Costume Rental</li>
          <li className="text-white px-4 text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">Gallery</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;