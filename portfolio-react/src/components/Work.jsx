import React from "react";
import CRYPTO from "../assets/cryptoWork.png";

export const Work = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-400 w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#FFD524]">
            Projects
          </p>
          <p className="py-4">
            // These are some of the recent projects I made
          </p>
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-3 gap-20">
          <a href="https://kirtan-crypto-app.netlify.app/" target="_blank">
            <div
              style={{ backgroundImage: `url(${CRYPTO})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:scale-110 duration-500"
            >
              <div>
                <h1 className="text-2xl font-bold flex justify-center items-center mt-[300px] text-gray-400">
                  Crypto Tracking app{" "}
                </h1>
              </div>
            </div>
          </a>
          <a href="https://kirtan-crypto-app.netlify.app/" target="_blank">
            <div
              style={{ backgroundImage: `url(${CRYPTO})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:scale-110 duration-500"
            >
              <div>
                <h1 className="text-2xl font-bold flex justify-center items-center mt-[300px] text-gray-400">
                  Crypto Tracking app{" "}
                </h1>
              </div>
            </div>
          </a>
          <a href="https://kirtan-crypto-app.netlify.app/" target="_blank">
            <div
              style={{ backgroundImage: `url(${CRYPTO})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  hover:scale-110 duration-500"
            >
              <div>
                <h1 className="text-2xl font-bold flex justify-center items-center mt-[300px] text-gray-400">
                  Crypto Tracking app{" "}
                </h1>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
