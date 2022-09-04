import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo-image" className="w-[180px] mt-5" />
      </div>
      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <a href="/">Home</a>
          </li>
          <li className="py-6 text-4xl">
            <a href="/about">About</a>
          </li>
          <li className="py-6 text-4xl">
            <a href="/skills">Skills</a>
          </li>
          <li className="py-6 text-4xl">
            <a href="/projects">Projects</a>
          </li>
          <li className="py-6 text-4xl">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0C61BF]">
            <a
              href="https://www.linkedin.com/in/kirtan-chandak-65736b159/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              LinkedIn <AiFillLinkedin size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              href="https://github.com/kirtanchandak"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Github <AiFillGithub size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1C96E8]">
            <a
              href="https://twitter.com/chandak_kirtan"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Twitter <AiOutlineTwitter size={40} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DD4B3F]">
            <a
              href="mailto:deepamchandak123@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              E-mail <AiOutlineMail size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
