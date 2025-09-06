import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full top-0 left-0 z-50 bg-black text-white shadow-md sticky">
      <nav className="max-w-7xl py-6 mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-18" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 font-normal">
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

        {/* Desktop CTA Button */}
        <a
          href="#contact"
          className="hidden md:block ml-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
        >
          Contact Me
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-2xl duration-400 ease-in"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-black px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 font-normal items-start">
          <li>
            <a
              href="#home"
              className="hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-normal transition inline-block"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
