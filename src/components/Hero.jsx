import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFigma,
  faLinkedin,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MediumIcon from "../assets/medium.png";
import HeroImg from "../assets/Hero.png";
import StarImg from "../assets/Star.png";

const Hero = () => {
  return (
    <section id="home" className="md:scroll-mt-24 scroll-mt-100 w-full bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Top: Text + Image */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 lg:pt-15 md:pt-8 lg:pb-15 md:pb-4">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold">
            PRODUCT <br /> DESIGNER
          </h1>
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mt-3 bg-gradient-to-r from-[#FA709A] to-[#FEE140] bg-clip-text text-transparent">
            CRISTIAN MUNOZ
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center flex-nowrap gap-3 sm:gap-4 mt-6 w-full">
            {[
              { icon: faInstagram },
              { icon: faFigma },
              { icon: faLinkedin },
              { icon: faTwitter },
              { icon: faTelegram },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white rounded-lg cursor-pointer hover:bg-white/10"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-xl sm:text-2xl"
                />
              </div>
            ))}

            {/* Medium (PNG) */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white rounded-lg cursor-pointer hover:bg-white/10">
              <img
                src={MediumIcon}
                alt="Medium"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-6 w-full">
            <a
              href="#"
              download
              className="bg-[#292929] hover:bg-[#303030] px-5 py-3 rounded-md flex items-center justify-center space-x-2 w-full text-sm sm:text-base"
            >
              <span>Download Curriculum Vitae</span>
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>

        {/* Right Image (Hidden on Tablet/Mobile) */}
        <div className="flex-1 hidden lg:flex justify-end mt-10 lg:mt-0">
          <img
            src={HeroImg}
            alt="Hero Right"
            className="w-100 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Bottom: Stats Section */}
      <div className="w-full mt-12 md:mt-16 flex flex-col md:flex-row justify-around items-center bg-[#0b0b0b] text-[#c8fec7] py-8 rounded-2xl shadow-md space-y-8 md:space-y-0 max-w-7xl mx-auto border border-gray-700 lg:mb-7">
        <div className="text-center">
          <h3 className="md:text-5xl lg:text-7xl font-bold text-5xl">90%</h3>
          <p className="md:text-xl text-center mt-3 md:text-left">
            Job Success <br />
            Score on Upwork
          </p>
        </div>

        <div className="mx-6 hidden lg:block">
          <img src={StarImg} alt="Star" className="w-16" />
        </div>

        <div className="text-center">
          <h3 className="md:text-5xl lg:text-7xl font-bold text-5xl">
            &gt;25.000
          </h3>
          <p className="md:text-xl text-center mt-3 md:text-left">
            Duplicates on Figma <br />
            Community
          </p>
        </div>

        <div className="mx-6 hidden lg:block">
          <img src={StarImg} alt="Star" className="w-16" />
        </div>

        <div className="text-center">
          <h3 className="md:text-5xl lg:text-7xl font-bold text-5xl">&gt;2K</h3>
          <p className="md:text-xl text-center mt-3 md:text-left">
            In Finished <br />
            Works
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
