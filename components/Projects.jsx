import Image from "next/image";
import Link from "next/link";
import React from "react";
import movieProjectImg from "../public/assets/images/p1.jpeg";
import projectManagerImg from "../public/assets/images/p2.png";
import imageFinderProjectImg from "../public/assets/images/p3.jpeg";
import mobileProjectImg from "../public/assets/images/p4.png";
export default function Projects() {
  return (
    <div className="w-full pt-10" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl text-[#94a3b8] tracking-widest uppercase pb-4">
          Projects
        </p>
        <h2 className="text-slate-50 py-4 ">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="MERN Project Manager"
            backgroundImg={projectManagerImg}
            projectUrl="/project-manager"
            tags={["Mongo", "Express", "Node", "React"]}
          />
          <ProjectItem
            title="React Movie App"
            backgroundImg={movieProjectImg}
            projectUrl="/movie-project"
            tags={["HTML", "CSS", "JavaScript", "React"]}
          />
          <ProjectItem
            title="React Native Food App"
            backgroundImg={mobileProjectImg}
            projectUrl="/food-ui-app"
            tags={["React Native", "JavaScript", "Maps API"]}
          />
          <ProjectItem
            title="Image Finder"
            backgroundImg={imageFinderProjectImg}
            projectUrl="/image-finder"
            tags={["HTML", "CSS", "JavaScript"]}
          />
        </div>
      </div>
    </div>
  );
}

const ProjectItem = ({ title, backgroundImg, projectUrl, tags }) => {
  return (
    <Link href={projectUrl}>
      <div className="cursor-pointer relative flex items-center group justify-center h-auto w-full shadow-lg shadow-slate-900 rounded-xl p-2 group hover:bg-gradient-to-r from-[#1e293b] to-[#0f172a]">
        <Image
          className="rounded-xl group-hover:opacity-10 transition-opacity duration-200"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden p-5 justify-between group-hover:flex flex-col w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="py-2 md:py-4 text-lg md:text-2xl lg:text-3xl text-white tracking-wider text-center">
            {title}
          </h3>

          <div className="flex justify-evenly pb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-slate-50 bg-slate-800 lg:text-lg shadow-lg shadow-slate-900 lg:px-4 lg:py-2 p-2 rounded-lg font-black text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link href={projectUrl}>
            <p className="font-black text-center lg:text-lg py-2 rounded-lg bg-[#3758ec] text-slate-50 text-sm cursor-pointer shadow-lg shadow-slate-800 tracking-wide">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </Link>
  );
};
