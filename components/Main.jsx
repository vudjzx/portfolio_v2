import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#94a3b8]">
            Mobile - Web developer
          </p>
          <h1 className="text-slate-50 py-4">
            Hi I'm <span className="text-[#3758ec]">Victor</span>
          </h1>
          <h1 className="text-slate-50 py-4">A Frontend Developer</h1>
          <p className="py-4 text-slate-50 max-w-[70%] m-auto">
            I mainly focus on the frontend development of applications using
            technologies like React, React Native and NextJS but know my way
            around the backend with NodeJS. I also enjoy learning new
            technologies and building things that are useful to the world.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/vudjj" target="_blank">
              <div className="bg-slate-50 p-3 rounded-full shadow-lg shadow-slate-900 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn size={30} className="text-slate-800" />
              </div>
            </a>
            <a href="https://github.com/vudjzx" target="_blank">
              <div className="bg-slate-50 p-3 rounded-full shadow-lg shadow-slate-900 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size={30} className="text-slate-800" />
              </div>
            </a>
            <a href="mailto:vudjzx@gmail.com" target="_blank">
              <div className="bg-slate-50 p-3 rounded-full shadow-lg shadow-slate-900 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail size={30} className="text-slate-800" />
              </div>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1yAKkpN4SUUGrO8T8aGXMtyvYFnstW5V0/view"
            target="_blank"
          >
            <button className="w-1/2 my-4 py-4 font-bold text-xl">
              My Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
