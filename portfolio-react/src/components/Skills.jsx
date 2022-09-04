import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import REACT from "../assets/react.png";
import TAIL from "../assets/tailwind.png";
import JS from "../assets/javascript.png";
import PY from "../assets/python.png";

export const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-400 w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#FFD524]">
            Skills
          </p>
          <p className="py-4">
            // These are the technologoies I have worked with!
          </p>
        </div>
        <div className="w-full grid grid-cols-6 sm:grid-cols-3 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="html" className="w-20 mx-auto" />
            <p className="py-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="html" className="w-20 mx-auto" />
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JS} alt="html" className="w-20 mx-auto" />
            <p className="py-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={REACT} alt="html" className="w-20 mx-auto" />
            <p className="py-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={TAIL} alt="html" className="w-20 mx-auto" />
            <p className="py-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={PY} alt="html" className="w-20 mx-auto" />
            <p className="py-4">PYTHON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
