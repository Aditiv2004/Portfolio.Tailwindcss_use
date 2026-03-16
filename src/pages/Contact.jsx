import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s8uwyyp",
        "template_r987j8n",
        form.current,
        "DEJt_nQmP158kXPxC"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 mt-20 rounded-3xl bg-linear-to-br from-pink-900 via-purple-900 to-blue-900"
    >
      <div className="max-w-4xl mx-auto flex justify-center">

        {/* linear Border */}
        <div
          className="p-0.5 rounded-2xl bg-linear-to-r
          from-blue-500 via-purple-500 to-pink-500
          shadow-2xl w-full max-w-md"
        >
          {/* Form Card */}
          <div
            className="bg-white/80 backdrop-blur-xl rounded-2xl
            p-8 md:p-10 hover:-translate-y-1
            transition-all duration-300"
          >
            {/* Heading */}
            <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
              Contact Me
            </h2>

            {/* Form */}
            <form
              ref={form}
               
              onSubmit={sendEmail}
              className="space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                  outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                  outline-none transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                  outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white
                bg-linear-to-r from-indigo-500 to-purple-600
                hover:opacity-90 hover:scale-[1.02]
                transition-all duration-300 shadow-lg"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
