
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
          I am a Web Developer
        </h2>
        
        <p className="text-[#8892b0] py-4 max-w-[700px] animate-slideInFromRight">
        I am a Full-Stack Developer with a strong focus on frontend development and a growing expertise in backend technologies. I specialize in React, React Native, TypeScript, JavaScript, HTML, and CSS, crafting dynamic and user-friendly web applications. My experience includes state management, performance optimization, API integration, and real-time applications. On the backend, I have worked with Node.js, Express.js, MongoDB, PostgreSQL, Firebase, and MySQL, with a foundational understanding of authentication (JWT, OAuth), WebSockets, and REST APIs. While my expertise lies in frontend development, I am constantly improving my backend skills to build scalable and efficient applications.
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
