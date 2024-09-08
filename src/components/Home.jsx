import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-emerald-500">Hi, my Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Muskan</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I am a Frontend Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A Frontend Developer builds and designs user interfaces for websites
          and web apps using HTML, CSS, JavaScript, and frameworks like React.
          They ensure a responsive, visually appealing, and interactive user
          experience while collaborating with designers and backend developers.
        </p>
        
        <div >
          <button
            className="font-sans flex items-center px-6 py-3 my-2 gap-2 shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto
              border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full
              before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden border-2 rounded-full group"
            type="submit"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
            <FaArrowRight  className="ml-3"/></span> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
