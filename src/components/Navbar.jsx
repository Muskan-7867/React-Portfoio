import React, { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

  return (
    <div className="z-50 fixed flex justify-between items-center bg-emerald-700 px-4 w-full h-[80px] text-slate-300">
      <div>
        <h3 className="font-bold text-xl">Portfolio</h3>
      </div>

      {/* Desktop menu */}
      <ul className="md:flex justify-between gap-5 hidden cursor-pointer">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger menu icon for mobile */}
      <div onClick={handleClick} className="z-50 md:hidden cursor-pointer">
        {!menu ? <Menu size={28} /> : <X size={28} />}
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-[50%] w-[50%] h-[50%] bg-white text-black flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform ${
          menu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <ul className="space-y-4 w-full max-w-xs">
          <li className="bg-white shadow-lg p-2 rounded-lg w-full text-center cursor-pointer">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="bg-white shadow-lg p-2 rounded-lg w-full text-center cursor-pointer">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="bg-white shadow-lg p-2 rounded-lg w-full text-center cursor-pointer">
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="bg-white shadow-lg p-2 rounded-lg w-full text-center cursor-pointer">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="bg-white shadow-lg p-2 rounded-lg w-full text-center cursor-pointer">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social icons sidebar */}
      <div className="top-[35%] left-0 fixed lg:flex flex-col space-y-4 hidden">
        <ul>
          {/* LinkedIn Icon */}
          <li className="flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] rounded-r-lg w-[160px] h-[60px] transition-transform duration-300">
            <a
              className="flex justify-between items-center px-4 w-full text-gray-300"
              href="https://linkedin.com/in/muskan-loach-70a956288"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          {/* GitHub Icon */}
          <li className="flex justify-between items-center bg-gray-800 ml-[-100px] hover:ml-[-10px] rounded-r-lg w-[160px] h-[60px] transition-transform duration-300">
            <a
              className="flex justify-between items-center px-4 w-full text-gray-300"
              href="https://github.com/Muskan-7867"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          {/* Email Icon */}
          <li className="flex justify-between items-center bg-red-500 ml-[-100px] hover:ml-[-10px] rounded-r-lg w-[160px] h-[60px] transition-transform duration-300">
            <a
              className="flex justify-between items-center px-4 w-full text-gray-300"
              href="mailto:muskanloach984@gmail.com"
            >
              Email <Mail size={30} />
            </a>
          </li>

          {/* Resume Icon */}
          <li className="flex justify-between items-center bg-green-500 ml-[-100px] hover:ml-[-10px] rounded-r-lg w-[160px] h-[60px] transition-transform duration-300">
            <a
              className="flex justify-between items-center px-4 w-full text-gray-300"
              href="https://drive.google.com/file/d/1CiWFDzU_xJ3w84pUSDAC11a27VoK--fs/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <AiOutlineFileText size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
