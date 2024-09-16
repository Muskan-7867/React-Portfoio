import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* Applying slideIn animation */}
        <p className="text-emerald-500 animate-slideIn">Hi, my Name is</p>
        
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] animate-slideInFromRight">
          Muskan
        </h1>
        
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] animate-slideIn">
          I am a Frontend Developer
        </h2>
        
        <p className="text-[#8892b0] py-4 max-w-[700px] animate-slideInFromRight">
          A Frontend Developer builds and designs user interfaces for websites
          and web apps using HTML, CSS, JavaScript, and frameworks like React.
          They ensure a responsive, visually appealing, and interactive user
          experience while collaborating with designers and backend developers.
        </p>
        
        <div>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-emerald-500 hover:bg-emerald-500"
            type="submit"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <FaArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
