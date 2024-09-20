import React from "react";

const Work = () => {
  const projects = [
    {
      id: 1,
      image: "/images/todo.jpg",
      title: "Todo App",
      demoLink: "https://full-stack-todo-app-roan.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Full-stack-todo-app.git",
    },
    {
      id: 2,
      image: "/images/tictac.jpg",
      title: "Tic Tac Toe",
      demoLink: "https://dragable-tic-tac-toe-game.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Dragable-tic-tac-game.git",
    },
    {
      id: 3,
      image: "/images/netflix.jpg",
      title: "Netflix Clone",
      demoLink: "https://netflix-clone-xi-ruddy.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Netflix-Clone.git",
    },
    {
      id: 4,
      image: "/images/stopwatch.jpg",
      title: "Stopwatch",
      demoLink: "https://stopwatch-web-application-mauve.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Stopwatch.git",
    },
    {
      id: 5,
      image: "/images/yt.avif",
      title: "YouTube Clone",
      demoLink: "https://my-youtube-8f5j.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/MY-youtube.git",
    },
    {
      id: 6,
      image: "/images/weather.jpg",
      title: "Weather App",
      demoLink: "https://weather-app-ten-ecru-45.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Weather-app.git",
    },
  ];

  return (
    <div name="work" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 animate-slideIn">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-600" >Work</p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Grid Container for Projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {projects.map(({ id, image, title, demoLink, codeLink }) => (
            <div
              key={id}
              className="relative shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  overflow-hidden"
            >
        <img src={image} alt={title}   className="w-full h-full object-cover group-hover:opacity-20 transition-opacity duration-300 ease-in-out" />
              {/* Overlay with Buttons */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-lg font-bold text-white tracking-wider">{title}</span>
                <div className="pt-4">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
