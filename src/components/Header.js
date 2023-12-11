import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="relative bg-amber-300 shadow-xl">
      {/* Logo and Navigation */}
      <div className="flex items-center justify-between p-2 md:p-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link to="/">
            <span className="text-black text-lg font-extralight ml-2">
              <span className="font-light text-3xl block">Omkara</span>
              <span className="block md:mx-8">Dance Academy</span>
            </span>
          </Link>
        </div>

        {/* Responsive Menu Button for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="text-black focus:outline-none focus:border-none"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex p-2 md:m-4 space-x-4">
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-xl transition-all duration-400 hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            <Link to="/bollywood">Bollywood Classes</Link>
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            <Link to="/services">Special Services</Link>
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            Costume Rental
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            Gallery
          </li>
        </ul>
      </div>

      {/* Navigation in the Body */}
      {isNavOpen && (
        <ul className="md:hidden p-2 md:m-4 space-x-4">
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-xl transition-all duration-400 hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            <Link to="/bollywood">Bollywood Classes</Link>
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            <Link to="/services">Special Services</Link>
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            Costume Rental
          </li>
          <li className="text-black text-md md:text-xl font-bold hover:text-gray-700 hover:shadow-md transition-all duration-300 hover:cursor-pointer">
            Gallery
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;