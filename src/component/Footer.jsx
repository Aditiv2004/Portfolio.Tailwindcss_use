import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-r from-purple-700 to-blue-600 text-white pt-16 pb-6 px-6">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-4">
            Aditi<span className="text-pink-400">.</span>
          </h2>

          <div className="w-20 h-1 bg-pink-500 rounded-full mb-4"></div>

          <p className="text-sm text-gray-100 leading-relaxed">
            Thank you for visiting my portfolio! I'm Aditi Vishwakarma, a passionate
            web developer eager to collaborate and build amazing things on the web.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Me</h4>

          <p className="text-sm mb-2">
            📧 aditivishwakarma503@gmail.com
          </p>

          <p className="text-sm">
            📞 +91 9136303552
          </p>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>

          <div className="flex gap-4">

            {["GitHub", "LinkedIn", "Instagram", "Facebook"].map((item) => (
              <a
                key={item}
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full bg-white/20 backdrop-blur-md
                hover:bg-pink-600 hover:scale-110 transition-all duration-300"
              >
                {item[0]}
              </a>
            ))}

          </div>
        </div>

        {/* Projects */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Featured Projects</h4>

          <ul className="space-y-2 text-sm">

            {[
              "Portfolio Website",
              "Ticket Resolver System",
              "GlassMorphism Mini Project",
              "Brainwave Clone",
            ].map((project) => (
              <li key={project}>
                <a
                  href="#"
                  className="hover:text-pink-300 transition"
                >
                  {project}
                </a>
              </li>
            ))}

          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="w-[90%] h-0.5 bg-white/20 mx-auto my-10 rounded-full"></div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-200">
        © 2025 Aditi Vishwakarma. All rights reserved.
      </div>

    </footer>
  );
}
