import React, { useState, useCallback } from "react";
import images from "../images/signature.png";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  const [clicked, setClicked] = useState(false); // Use state to track menu visibility

  const handleClick = useCallback(() => {
    setClicked((pre) => !pre); // Toggle menu visibility
  }, [clicked]);

  return (
    <>
      <div className="border-b border-white grid grid-cols-2 bg-[rgb(17,7,31)] text-white px-6 py-4 items-center h-15 w-full md:border-none">
        {/* Logo Section */}
        <div>
          <img className=" " src={images} alt="Logo" width={80} />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 justify-end text-xl">
        <a href="#home" className="hover:text-[#ae95d2] cursor-pointer">Home</a>
      <a href="#projects" className="hover:text-[#ae95d2] cursor-pointer">Projects</a>
      <a href="#experiences" className="hover:text-[#ae95d2] cursor-pointer">Experiences</a>
      <a href="#contact" className="hover:text-[#ae95d2] cursor-pointer">Contact</a>
        </ul>

        {/* Mobile Navigation Button */}
        <div className="flex justify-end md:hidden">
          <button onClick={handleClick}>
            <TiThMenu className="size-8" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {clicked && (
  <div className="bg-[rgb(17,7,31)] w-full text-white md:hidden">
    <ul>
      <li className="text-center border-b border-white text-xl p-3">
        <a href="#home">Home</a>
      </li>
      <li className="text-center border-b border-white text-xl p-3">
        <a href="#projects">Projects</a>
      </li>
      <li className="text-center border-b border-white text-xl p-3">
        <a href="#experiences">Experiences</a>
      </li>
      <li className="text-center border-b border-white text-xl p-3">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
)}
    </>
  );
}

export default Navbar;
