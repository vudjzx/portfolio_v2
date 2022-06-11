import Image from "next/image";
import React from "react";
import developerImg from "../public/assets/images/developer.jpg";
export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl text-[#94a3b8] tracking-widest uppercase">
            About
          </p>
          <h2 className="text-slate-50 py-4">A little bit about me...</h2>
          <p className="text-slate-50 py-2">
            I am a college student/self-taught React and React Native developer
            with experience building responsive web applications and mobile apps
            for android and iOS. I also have experience with NodeJS, TypeScript
            and building RESTful APIs.
          </p>
        </div>
        <div className="my-4 relative w-full lg:h-[500px] md:h-[350px] h-[600px]">
          <Image
            className="rounded-xl shadow-xl shadow-slate-900"
            layout={"fill"}
            objectFit={"cover"}
            src={developerImg}
          />
        </div>
      </div>
    </div>
  );
}
