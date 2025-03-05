

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
              <p>Hi I am Muskan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p > I am a Full-Stack Developer with a strong focus on frontend development and a growing expertise in backend technologies. I specialize in React, React Native, TypeScript, JavaScript, HTML, and CSS, crafting dynamic and user-friendly web applications. My experience includes state management, performance optimization, API integration, and real-time applications. On the backend, I have worked with Node.js, Express.js, MongoDB, PostgreSQL, Firebase, and MySQL, with a foundational understanding of authentication (JWT, OAuth), WebSockets, and REST APIs. While my expertise lies in frontend development, I am constantly improving my backend skills to build scalable and efficient applications.</p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default About;
