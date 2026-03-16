import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-linear-to-r from-pink-800  via-purple-500  to-blue-500  shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white text-2xl font-bold"
          style={{ textShadow: "1px 0 10px #fc0" }}
        >
          {/* <i className="fas fa-laptop-code"></i> */}
          <img
            src="/LOGO1.JPG"
            alt="Logo"
            className="w-10 h-10 object-cover border border-white/30 p-2 rounded-xl shadow-lg backdrop-blur"
          />

          Aditi
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

        {/* Menu */}
        <div
          className={`${menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center gap-6
          absolute md:static top-full left-0 w-full md:w-auto
          bg-[#2575fc] md:bg-transparent py-6 md:py-0`}
        >

          <a href="#home" className="text-white hover:text-gray-200">Home</a>
          <a href="#about" className="text-white hover:text-gray-200">About</a>
          <a href="#skills" className="text-white hover:text-gray-200">Skills</a>
          <a href="#projects" className="text-white hover:text-gray-200">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
          <a href="#certificates" className="text-white hover:text-gray-200">Certificates</a>

          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-linear-to-r from-[#00c6ff] to-[#2575fc] hover:bg-blue-500 translate-2    shadow-sky-700 border-r-amber-50  px-5 py-2 rounded-full text-white"
          >            <i className="fas fa-cloud-arrow-down"></i> Download Resume


          </a>
        </div>

      </div>
    </nav>
  );
}
