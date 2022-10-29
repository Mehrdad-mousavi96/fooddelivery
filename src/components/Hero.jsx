import React from "react";
import Image from "../Images/Herojpg.jpeg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="bg-red-200 max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
            The <span className="font-bold text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold  text-orange-500">
            Food <span className="font-bold text-white">Delivered</span>
          </h1>
        </div>
        <img className="w-full max-h-[500px] object-cover" src={Image} />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
