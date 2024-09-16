import React, { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-scroll"; 

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

  return (
    <div className="fixed flex justify-between items-center px-4 w-full bg-[#0a192f]  text-slate-300 h-[80px]">
      <div>
        <h3 className="text-xl font-bold">Portfolio</h3>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex justify-between cursor-pointer gap-5">
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
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!menu ? <Menu size={28} /> : <X size={28} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`absolute left-0 top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transform transition-all duration-500 ease-in-out ${
          menu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <li className="py-4 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-4 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons sidebar */}
      <div className=" hidden fixed top-[35%] left-0 lg:flex flex-col space-y-4">
        <ul>
          {/* LinkedIn Icon */}
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300 px-4"
              href="https://linkedin.com/in/muskan-loach-70a956288"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          {/* GitHub Icon */}
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300 px-4"
              href="https://github.com/Muskan-7867"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          {/* Email Icon */}
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500 rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300 px-4"
              href="mailto:muskanloach984@gmail.com"
            >
              Email <Mail size={30} />
            </a>
          </li>

          {/* Resume Icon */}
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500 rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300 px-4"
              href="/resume.pdf"
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
