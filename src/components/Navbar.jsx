import React, { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

  return (
    <div className="fixed flex justify-between items-center px-4 w-full bg-[#0a192f]  text-slate-300 h-[80px]">
      <div>
        <h3 className="text-xl font-bold">Portfolio</h3>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex justify-between gap-5">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger menu icon for mobile */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!menu ? <Menu size={28} /> : <X size={28} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          !menu ? "hidden" : "flex"
        } absolute left-0 top-0 w-full h-screen bg-[#0a192f]  flex-col justify-center items-center`}
      >
        <li className="py-4 text-4xl">Home</li>
        <li className="py-4 text-4xl">About</li>
        <li className="py-4 text-4xl">Skills</li>
        <li className="py-4 text-4xl">Work</li>
        <li className="py-4 text-4xl">Contact</li>
      </ul>

      {/* Social icons sidebar */}
      <div className=" hidden fixed top-[35%] left-0 lg:flex flex-col space-y-4">
        <ul>
          {/* LinkedIn Icon */}
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300 px-4"
              href="https:linkedin.com/in/muskan-loach-70a956288"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          {/* GitHub Icon */}
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 rounded-r-lg">
            <a
              className="flex justify-between items-center w-full text-gray-300 px-4"
              href="https://github.com/Muskan-7867"
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