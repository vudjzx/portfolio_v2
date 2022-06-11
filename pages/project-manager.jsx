import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/images/project-manager.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Head from "next/head";

const ProjectManager = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Project Manager</title>
        <meta name="description" content="Victor Duran portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 bg-gray-200"
          layout="fill"
          objectFit="contain"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-4 text-slate-50">MERN Project Manager</h2>
          <h3 className="text-slate-50">Fullstack React Project</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 text-slate-50">
          <p className="text-[#94a3b8]">Project Manager</p>
          <h2 className="text-slate-50">Overview</h2>
          <p className="text-slate-50">
            This is a fullstack application for project management and
            collaboration. Users can create new projects and add collaborators
            and tasks to them. All collaborators can see task updates and who
            completed tasks in real time.
          </p>
          <p>
            Frontend built with React, TailwindCSS and TypeScript, backend was
            built with MongoDB, Express, NodeJS and Typescript, Socket.IO was
            implemented for real time task updates on a project.
          </p>
          <p className="font-black text-slate-50">
            Some demo accounts to use if you don't have an account:
          </p>
          <p className="text-slate-50">
            <span className="font-black text-slate-50">User(s): </span>
            mail@mail.com / mail1@mail.com / mail2@mail.com
          </p>
          <p className="text-slate-50">
            <span className="font-black">Password: </span> admin123
          </p>

          <a href="https://teal-gaufre-71c798.netlify.app/" target="_blank">
            <button className="font-bold px-8 py-2 mt-4 mr-8 shadow-slate-900">
              Live Site
            </button>
          </a>
          <a href="https://github.com/vudjzx/managr_frontend" target="_blank">
            <button className="font-bold px-8 py-2 mt-4 mr-8 shadow-slate-900">
              Frontend Code
            </button>
          </a>
          <a href="https://github.com/vudjzx/managr_backend" target="_blank">
            <button className="font-bold px-8 py-2 mt-4 shadow-slate-900">
              Backend Code
            </button>
          </a>
        </div>
        <div className="col-span-4 lg:w-full lg:col-span-1 bg-slate-50 shadow-xl shadow-slate-900 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-slate-700">
              Technologies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJS
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Socket.IO
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <div className="flex p-1">
            <BiArrowBack className="mx-4 text-slate-50" size={25} />
            <p className="text-lg font-bold cursor-pointer text-slate-50">
              Back
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectManager;
