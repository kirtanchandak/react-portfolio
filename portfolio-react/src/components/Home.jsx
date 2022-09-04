import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#FFD524]">Hi, my name is</p>
        <h1 className="text-4xl font-bold text-white">Kirtan Chandak</h1>
        <h2 className="text-4xl font-bold text-gray-400">
          I am a JavaScript and Python Devloper!
        </h2>
        <p className="text-gray-400 py-4 max-w-[700px]">
          I am web-devloper trying to build projects and create amazing things.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-2 flex items-center hover:bg-[#FFD524]  hover:border-[#FFD524]">
            View Work <AiOutlineArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
