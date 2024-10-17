import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="gap-8 grid grid-cols-2 w-full max-w-[1000px]">
          <div className="sm:text-right pb-8 pl-4">
            <p className="inline border-emerald-600 border-b-4 font-bold text-4xl">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="gap-8 grid sm:grid-cols-2 px-4 w-full max-w-[1000px]">
            <div className="sm:text-right font-bold text-4xl animate-fadeIn">
              <p>Hi I'm Muskan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p >I am a passionate Frontend Developer specializing in building dynamic, responsive, and user-friendly websites and web applications. With a strong foundation in HTML, CSS, and JavaScript, along with experience in frameworks like React, I bring designs to life with clean, efficient code.
                     I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.</p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default About;
