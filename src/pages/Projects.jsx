import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio using React & Tailwind CSS.",
    tech: ["React", "Tailwind", "Vite"],
    live: "#",
    code: "#",
  },
 
  {
    title: "Ticket Resolver",
    desc: "Issue management system using Django.",
    tech: ["Django", "MySQL", "Bootstrap"],
    live: "#",
    code: "#",
  },
  {
    title: "Agency_AI",
    desc: "Modern responsive landing page, using API based design.",
    tech: [ "JS", "API","React","tailwind" ,"React-hot-Toast","motion"],
    live: "agency-ai-sigma-pearl.vercel.app",
    code: "https://github.com/Aditiv2004/Agency_AI",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-24 px-6 mb-20 rounded-3xl bg-linear-to-br from-pink-900 via-purple-900 to-blue-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-pink-500">Projects</span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Some of my best work created with modern technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white/10 backdrop-blur-xl
              border border-white/20 shadow-xl overflow-hidden
              hover:scale-105 hover:border-pink-500
              transition-all duration-500"
            >
              {/* linear Overlay */}
              <div
                className="absolute inset-0 bg-linear-to-br
                from-pink-500/20 via-purple-500/20 to-blue-500/20
                opacity-0 group-hover:opacity-100 transition duration-500"
              ></div>

              {/* Content */}
              <div className="relative p-7 flex flex-col h-full">

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                      bg-white/20 text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-full
                    bg-linear-to-r from-pink-500 to-purple-500
                    text-white text-sm font-medium
                    hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-full
                    border border-white/30 text-white text-sm
                    hover:bg-white hover:text-black transition"
                  >
                    Source Code
                  </a>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
