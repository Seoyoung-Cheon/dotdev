import { HiArrowDown } from "react-icons/hi";
import React from "react";
import background from "../../assets/code.jpg";
import { features } from "../../constants/data";

const Feature = () => {
  return (
    <div className="mt-20 border-b border-neutral-800 ">
      <div className="text-center p-0.5">
        <img src="" alt="" />
        <span className="dark:bg-neutral-900 text-indigo-500 py-1 px-2 text-4xl font-medium uppercase rounded-full light: border light: border-neutral-500 light: bg-white dark:border-0">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
            Your Codes
          </span>
          <div>
            <HiArrowDown className="w-8 h-20 inline-block" />
          </div>
        </h2>
        {features.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex justify-center items-center w-10 h-10 dark:bg-neutral-900 text-indigo-700 rounded-full p-2 mx-6 dark:border-0 light: bg-white light: border light: border-neutral-500">
                <div className="w-full h-full">{item.icon}</div>
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{item.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
