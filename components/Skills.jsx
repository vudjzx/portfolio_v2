import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import React from "react";
import {
  SiJavascript,
  SiCss3,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
export default function Skills() {
  return (
    <div id="skills" className="w-full pt-24 lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl text-[#94a3b8] tracking-widest uppercase pb-4">
          Skills
        </p>
        <h2 className="text-slate-50 py-4 ">What I know</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-xl flex items-center p-5 shadow-xl shadow-slate-900 hover:scale-105 ease-in duration-300">
            <SiHtml5 size={60} className="text-slate-50 mr-4" />
            <p className="text-slate-50 font-bold text-xl tracking-wide">
              HTML5
            </p>
          </div>

          <div className="rounded-xl flex items-center p-5 shadow-xl shadow-slate-900 hover:scale-105 ease-in duration-300">
            <SiCss3 size={60} className="text-slate-50 mr-4" />
            <p className="text-slate-50 text-xl font-bold tracking-wide">
              CSS3
            </p>
          </div>

          <div className="rounded-xl flex items-center p-5 shadow-xl shadow-slate-900 hover:scale-105 ease-in duration-300">
            <SiJavascript size={60} className="text-slate-50 mr-4" />
            <p className="text-slate-50 text-xl font-bold tracking-wide">
              JavaScript
            </p>
          </div>
          <div className="rounded-xl flex items-center p-5 shadow-xl shadow-slate-900 hover:scale-105 ease-in duration-300">
            <FaReact size={60} className="text-slate-50 mr-4" />
            <p className="text-slate-50 text-xl font-bold tracking-wide">
              ReactJS / React Native
            </p>
          </div>

          <div className="rounded-xl flex items-center p-5 shadow-xl shadow-slate-900 hover:scale-105 ease-in duration-300">
            <SiTypescript size={60} className="text-slate-50 mr-4" />
            <p className="text-slate-50 text-xl font-bold tracking-wide">
              TypeScript
            </p>
          </div>

          <div className="rounded-xl flex items-center p-5 shadow-xl shadow-slate-900 hover:scale-105 ease-in duration-300">
            <FaNodeJs size={60} className="text-slate-50 mr-4" />
            <p className="text-slate-50 text-xl font-bold tracking-wide">
              NodeJS
            </p>
          </div>

          <div className="rounded-xl flex items-center p-5 shadow-xl shadow-slate-900 hover:scale-105 ease-in duration-300">
            <TbBrandNextjs size={60} className="text-slate-50 mr-4" />
            <p className="text-slate-50 text-xl font-bold tracking-wide">
              NextJS
            </p>
          </div>

          <div className="rounded-xl flex items-center p-5 shadow-xl shadow-slate-900 hover:scale-105 ease-in duration-300">
            <SiTailwindcss size={60} className="text-slate-50 mr-4" />
            <p className="text-slate-50 text-xl font-bold tracking-wide">
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
