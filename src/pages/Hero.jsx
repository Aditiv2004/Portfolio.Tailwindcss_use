import React from "react";
import profile from "./profile.webp"; // adjust path
import images from "./images.avif";
import arrowtop from "./arrowtop.png";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${images})`,
      }}
      className=" relative pt-12.5 pb-30 px-8 min-h-3  bg-cover  bg-center  flex items-center rounded-b-3xl "
    >
      {/* main container */}
      <div className="max-w-7xl w-full ">
        {/* Container */}
        <div className="max-w-7xl w-full px-7  flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Image */}
          <div className="flex justify-center md:justify-center-safe  w-full md:w-1/2">
            <img
              src={profile}
              alt="Aditi"
              className="w-65 h-65 md:w-[320px] md:h-80 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-center items-center pr-25">

            <h1 className="  text-3xl md:text-3xl font-bold text-gray-900 ">
              Hey I'm{" "}
              <span className="text-pink-600 ">Aditi</span>
            </h1>

            <h2 className="text-lg md:text-xl text-blue-600 font-bold mt-3 ">
              Web Developer
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed max-w-md mx-auto md:mx-0 text-center">
              Hi, I am Aditi Vishwakarma. I am a web developer. I have a passion for
              web development and love to create websites. I am a quick learner and
              always ready to learn new things.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5 mt-5 text-blue-600 text-xl">

              <a href="#" className="hover:text-purple-600 transition fab fa-facebook-f"></a>
              <a href="#" className="hover:text-purple-600 transition fab fa-instagram"></a>
              <a href="www.linkedin.com/in/aditi-vishwakarma-devloper" className="hover:text-purple-600 transition fab fa-linkedin-in"></a>
              <a href="https://github.com/Aditiv2004" className="hover:text-purple-600 transition fab fa-github"></a>

            </div>

            {/* Button */}
            <div className="mt-7">
              <a
                href="/resume.pdf"
                download
                className="inline-block px-7 py-2 rounded-full text-white font-semibold bg-linear-to-r from-purple-600 to-blue-500 shadow-lg hover:scale-105 transition"
              >
                Download CV
              </a>
            </div>
            {/* arrow bounce */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">

              <img
                src={arrowtop}// <-- apna image path yaha
                alt="Scroll Down" onClick={()=>{
                  document.getElementById("about").scrollIntoView({behavior:"smooth"})
                }}
                className=" w-7 sm:w-8 md:w-5 lg:w-7 cursor-pointer hover:scale-110 transition duration-300"/>

            </div>

          </div>
        </div>
      </div>
    
    </section >
  );
}
