import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-linear-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-purple-600">Me</span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Passionate Web Developer crafting modern, responsive, and
            user-friendly digital experiences.
          </p>
        </div>

        {/* Main Card */}
        <div className=" p-0.75 rounded-3xl bg-linear-to-r from-pink-500 via-purple-500 to-blue-500">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Left - Profile */}
              <div className="text-center md:text-left animate-fadeIn">

                <div className="w-40 h-40 mx-auto md:mx-0 mb-6 rounded-full 
                bg-linear-to-tr from-pink-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-5xl">
                    👩‍💻
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800">
                  Aditi Vishwakarma
                </h3>

                <p className="text-purple-600 font-medium mt-1">
                  Frontend Developer
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Hi! I'm Aditi, a passionate <a className=" underline decoration-pink-500">Web Developer </a>specializing in
                  creating modern, responsive, and user-focused websites.
                  I enjoy learning new technologies and building impactful
                  digital products.
                </p>
              </div>

              {/* Right - Info */}
              <div className="space-y-6 animate-fadeIn">

                {/* Education */}
                <div className="p-5 rounded-xl bg-white shadow-md border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    🎓 Education
                  </h4>

                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• BSc IT (2024) — CGPA: 9.23</li>
                    <li>• HSC (2021) — 79.18%</li>
                    <li>• SSC (2019) — 61.80%</li>
                  </ul>
                </div>

                {/* Skills */}
                <div className="p-5 rounded-xl bg-white shadow-md border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    🚀 Skills
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Tailwind",
                      "Git",
                      "Responsive UI",
                      "API Integration",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full
                        bg-purple-100 text-purple-700 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div className="p-5 rounded-xl bg-white shadow-md border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    🎯 Career Goal
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    To become a professional full-stack developer and
                    contribute to impactful products while continuously
                    growing my technical and creative skills.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
