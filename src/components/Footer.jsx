import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full mt-16 mb-7">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white lg:px-0 px-6 space-y-6 md:space-y-0">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={Logo} alt="logo" className="md:w-30 w-24" />
        </div>
        
        {/* Navigation Links */}
        <div>
          <ul className="flex flex-row items-center justify-center space-x-6 md:space-x-8 font-normal">
            <li>
              <a href="#home" className="hover:text-purple-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-purple-400 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                About Me
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-600 mt-7 w-full" />
    </footer>
  );
};

export default Footer;
