import React from "react";

const skills = [
  { name: "HTML", level: 95, icon: "🌐" },
  { name: "CSS", level: 90, icon: "🎨" },
  { name: "JavaScript", level: 85, icon: "⚡" },
  { name: "React", level: 80, icon: "⚛️" },
  { name: "Tailwind", level: 90, icon: "💎" },
  { name: "Git & GitHub", level: 75, icon: "🔧" },
  { name: "API Integration", level: 7, icon: "🔗" },
  { name: "Responsive Design", level: 30, icon: "📱" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 px-6 bg-linear-to-br from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            My <span className="text-purple-600">Skills</span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Main Card */}
        <div className="p-0.75 rounded-3xl bg-linear-to-r from-pink-500 via-purple-500 to-blue-500">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-xl bg-white shadow-md border border-gray-100
                  hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-gray-800">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  {/* Percentage */}
                  <p className="mt-2 text-sm text-gray-600 text-right">
                    {skill.level}%
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

