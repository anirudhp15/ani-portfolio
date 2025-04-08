"use client";

import React, { useState } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
  AiFillMail,
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";
import { ReactTyped } from "react-typed";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const Footer: React.FC = () => {
  // Email form state
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // State for toggling tutoring details dropdown
  const [isTutoringOpen, setIsTutoringOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:anirudhpottammal@nyu.edu?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      message
    )}%0D%0A%0D%0AFrom:%20${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
    setEmail(""); // Clear the input fields after submission
    setSubject("");
    setMessage("");
  };

  return (
    <footer
      id="footer2"
      className="relative z-10 p-8 w-full h-auto bg-gradient-to-b from-indigo-200 to-indigo-500"
    >
      <h1 className="flex flex-row justify-center items-center pt-4 text-4xl font-bold tracking-tighter text-center text-indigo-400">
        <MdOutlineConnectWithoutContact className="inline-block mr-2" />
        get in touch with me!
      </h1>
      <div className="py-8 text-center">
        <ReactTyped
          className="text-sm tracking-wide text-center text-white lg:text-lg"
          typeSpeed={20}
          backSpeed={50}
          startWhenVisible={true}
          strings={[
            "have a question or want to work together on a project? feel free to reach out!",
          ]}
        />
      </div>
      <div className="grid w-[90%] grid-cols-1 gap-8 mx-auto lg:grid-cols-6">
        {/* Contact Form */}
        <div className="col-span-1 p-6 h-auto text-black bg-white rounded-lg shadow-lg duration-200 lg:col-span-2 transform-all hover:-translate-y-1">
          <h2 className="flex flex-row justify-center pb-8 text-2xl font-bold tracking-tighter">
            <AiOutlineMail className="mt-1 mr-2" />
            Contact Me
          </h2>
          <div className="flex flex-col items-center space-y-8">
            <a
              href="mailto:anirudhpottammal@nyu.edu"
              className="flex items-center space-x-2 text-sm font-semibold text-indigo-400 transition duration-100 hover:text-indigo-300"
            >
              <AiOutlineMail className="text-xl transition-all duration-200 ease-in-out transform hover:scale-125 hover:text-indigo-300" />
              <span className="pr-1 text-black">Email:</span>{" "}
              anirudhpottammal@nyu.edu
            </a>
            <a
              href="tel:+1-732-666-3371"
              className="flex items-center space-x-2 text-sm font-semibold text-indigo-400 transition duration-100 hover:text-indigo-300"
            >
              <AiOutlinePhone className="text-xl transition-all duration-200 ease-in-out transform hover:scale-125 hover:text-[#5a48ff]" />
              <span className="pr-1 text-black">Call:</span> +1 (732) 666 - 3371
            </a>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-8"
          >
            <div className="w-full mt-6">
              <label
                htmlFor="email"
                className="mb-1 text-xs font-semibold text-gray-500"
              >
                YOUR EMAIL
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm transition-all duration-200 ease-in-out border-2 border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                placeholder="email@example.com"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="subject"
                className="mb-1 text-xs font-semibold text-gray-500"
              >
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm transition-all duration-200 ease-in-out border-2 border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                placeholder="How can I help you?"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="message"
                className="mb-1 text-xs font-semibold text-gray-500"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 text-sm transition-all duration-200 ease-in-out border-2 border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white transition-all duration-300 ease-in-out bg-indigo-400 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Calendar Embed */}
        <div className="col-span-1 p-4 bg-white rounded-lg duration-200 lg:col-span-4 transform-all hover:-translate-y-1">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2IFIHotzbZlKmJvfyczj3IW1Qe4adTuZbS0YE1s1m9QwsbEg08Ljqo4FnXB1m6Iv80v3l-Je4_?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      {/* Social Icons & Copyright */}
      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-4 text-white">
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] hover:bg-white rounded-lg p-1 transition-all duration-200 hover:scale-110"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#181717] hover:bg-white rounded-lg p-1 transition-all duration-200 hover:scale-110"
          >
            <AiFillGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4405F] hover:bg-white rounded-lg p-1 transition-all duration-200 hover:scale-110"
          >
            <AiFillInstagram size={30} />
          </a>
          <a
            href="https://www.youtube.com/channel/yourchannelID"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF0000] hover:bg-white rounded-lg p-1 transition-all duration-200 hover:scale-110"
          >
            <AiFillYoutube size={30} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-[#000000] hover:bg-white rounded-lg p-1 transition-all duration-200 hover:scale-110"
          >
            <AiFillMail size={30} />
          </a>
        </div>
        <p className="mt-4 text-sm text-[#ddd5ff]">
          © {new Date().getFullYear()} AniPotts. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
