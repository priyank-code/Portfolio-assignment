import React from "react";
import LaptopImage from "../assets/Hero.png";
import NeonRight from "../assets/Top.png"; 
import NeonLeft from "../assets/Bottom.png";

const ThankYou = () => {
  return (
    <section className="relative w-full md:mt-30 sm:mt-20 mt-15 max-w-7xl mx-auto lg:px-0 px-4">
      <div className="w-full mx-auto relative bg-[#a87ff3] rounded-2xl flex items-center gap-4 md:gap-6 p-4 md:p-6">
        
        {/* Laptop Image */}
        <div className="relative -mt-16 md:-mt-28 flex-shrink-0 z-20">
          <img
            src={LaptopImage}
            alt="Laptop"
            className="w-28 sm:w-32 md:w-40 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="text-white text-xs sm:text-sm md:text-base relative z-20">
          <p className="font-medium">Thanks for visit my website</p>
          <p className="mt-2 opacity-90">
            If you have any questions you can write me to any of my social
            networks, I am sure I will answer you.
          </p>
        </div>

        {/* Right Top Image */}
        <img
          src={NeonRight}
          alt="Neon Right"
          className="absolute right-0 top-0 h-16 sm:h-20 md:h-24 object-contain pointer-events-none z-0"
        />

        {/* Bottom Left Image*/}
        <img
          src={NeonLeft}
          alt="Neon Left"
          className="absolute left-0 bottom-0 h-16 sm:h-20 md:h-24 object-contain pointer-events-none z-0"
        />
      </div>
    </section>
  );
};

export default ThankYou;
