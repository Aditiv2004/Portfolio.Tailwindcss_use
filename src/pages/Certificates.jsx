import React from "react";
import ADVANCED from "../assets/ADVANCED.jpg";
import Frontend from "../assets/Frontend.jpg";
import web from "../assets/web.jpg";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="w-full py-24 px-6 bg-linear-to-br from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            My <span className="text-pink-600">Certificates</span>
          </h2>

          {/* Underline */}
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Professional certifications and learning achievements.
          </p>
        </div>

        {/* linear Border Box */}
        <div className="p-0.75 rounded-3xl bg-linear-to-r from-pink-500 via-purple-500 to-blue-500">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1 */}
              <div
                className="p-6 rounded-xl bg-white shadow-md border border-gray-100
                hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  Advanced Web & UI/UX Design
                </h3>

                <p className="text-gray-600 text-sm">
                  Issued by Magic Bus India Foundation
                </p>

                <img
                    src={ADVANCED}
                  
                  alt="Certificate"
                  className="inline-block mt-2"
                />
                <p className="mt-4 text-blue-600 font-medium hover:underline">
                  View Certificate →
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="p-6 rounded-xl bg-white shadow-md border border-gray-100
                hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  Frontend Web Developer Certificate
                </h3>

                <p className="text-gray-600 text-sm">
                  Issued by Infosys | Springboard
                </p>

                <img
                src={Frontend}
                alt="Certificate"
                  className="inline-block mt-2" />
                  <p className="mt-4 text-blue-600 font-medium hover:underline">
                  View Certificate →
                  </p>
                
              </div>

               {/* Card 3 */}
              <div
                className="p-6 rounded-xl bg-white shadow-md border border-gray-100
                hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                   Entrepreneurship & Innovation: Web
                      Development Job Simulation
                </h3>

                <p className="text-gray-600 text-sm">
                  Issued by CITY OF MORETON BAY
                </p>

                <img
                src={web}
                alt="Certificate"
                  className="inline-block mt-2" />
                  <p className="mt-4 text-blue-600 font-medium hover:underline">
                  View Certificate →
                  </p>
                
              </div>


            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
