import React from "react";
import ShieldIcon from "../assets/Shield.png"; 

const Testimonial = () => {
  return (
    <section id="about" className="md:scroll-mt-24 scroll-mt-80 w-full text-center py-15 px-6 relative mt-15">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-purple-500" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Kaleb Lechtenberg
        </h3>
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          "Working with this freelancer has been great. His attention to detail
          is unparalleled and finished all work ahead of schedule. Will gladly
          send more work and I do not hesitate to recommend him to you on your
          project also."
        </p>

        {/* Shield Image */}
        <div className="mt-10 flex justify-center">
          <img
            src={ShieldIcon}
            alt="shield"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
