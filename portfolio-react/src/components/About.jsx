import React from "react";
import profile from "../assets/prof.png";

export const About = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-400 w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#FFD524]">
            About
          </p>
          <div className="block">
            <img src={profile} alt="" className="w-56 mt-[25px] inline-block" />
            <p className="py-4">
              // These are the technologoies I have worked with!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
