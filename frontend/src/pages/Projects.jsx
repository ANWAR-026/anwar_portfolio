import { useEffect, useState } from "react";
import API from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("projects/")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      id="projects"
      className="
        w-full py-24 px-6 md:px-12
        bg-gradient-to-b from-white via-blue-50 to-white
        text-gray-900
        relative overflow-hidden
      "
    >

      {/* 🌊 BACKGROUND DECOR */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-200/40 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-[-140px] right-[-140px] w-[380px] h-[380px] bg-cyan-200/30 blur-[150px] rounded-full"></div>

      {/* TITLE */}
      <div className="text-center mb-20 relative z-10">

        <h4 className="text-blue-600 text-sm tracking-[0.4em] uppercase font-semibold">
          Portfolio
        </h4>

        <h2 className="
          text-5xl md:text-6xl
          font-extrabold
          mt-4
          tracking-tight
          leading-tight
          bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500
          text-transparent bg-clip-text
        ">
          My Creative Projects
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-7">
          A collection of projects where I transform ideas into real-world data and software solutions.
        </p>

        {/* underline */}
        <div className="w-28 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">

        {projects.map((project) => (
          <div
            key={project.id}
            className="
              group
              bg-white
              border border-blue-100
              rounded-3xl
              p-7
              shadow-md
              hover:shadow-xl
              hover:-translate-y-2
              transition duration-300
            "
          >

            {/* TITLE */}
            <h3 className="
              text-2xl font-bold
              tracking-wide
              mb-3
              text-gray-900
              group-hover:text-blue-700
              transition
            ">
              {project.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="
              text-gray-600
              text-sm
              leading-7
              mb-6
              font-light
            ">
              {project.description}
            </p>

            {/* TOOLS */}
            <div className="flex flex-wrap gap-2 mb-6">

              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="
                    text-xs
                    px-3 py-1.5
                    bg-blue-50
                    border border-blue-100
                    rounded-full
                    text-blue-700
                    font-medium
                    tracking-wide
                    hover:bg-blue-100
                    transition
                  "
                >
                  {tool}
                </span>
              ))}

            </div>

            {/* BUTTON */}
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                w-full
                text-center
                py-3
                rounded-xl
                font-semibold
                tracking-wide
                bg-gradient-to-r from-blue-600 to-cyan-500
                text-white
                hover:shadow-lg
                hover:scale-[1.02]
                transition
              "
            >
              View Project
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;