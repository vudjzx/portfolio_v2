import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/images/reviewer-cover.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Head from "next/head";

const MovieReviewer = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Movie Reviewer</title>
        <meta name="description" content="Victor Duran portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          priority
          className="absolute z-1 bg-slate-800"
          layout="fill"
          objectFit="contain"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-4 text-slate-50">GraphQL Movie Reviewer</h2>
          <h3 className="text-slate-50">Fullstack React Project</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 text-slate-50">
          <p className="text-[#94a3b8]">Movie Reviewer</p>
          <h2 className="text-slate-50">Overview</h2>
          <p className="text-slate-50">
            This project allows the users to browse/filter movies and tv shows
            aswell as write reviews for them. Users can also view the whole list
            of reviews provided by a custom built API.
          </p>
          <p>
            Frontend built with React and TailwindCSS, displays a list of movies
            and tv shows provided by themoviedb.org API. Backend built with
            GraphQL and NodeJS using Apollo Server, for creation and listing of
            reviews.
          </p>
          <a
            href="https://reviewhub.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="font-bold px-8 py-2 mt-4 mr-8 shadow-slate-900">
              Live Site
            </button>
          </a>
          <a
            href="https://github.com/vudjzx/reviews-frontend"
            target="_blank"
            rel="noreferrer"
          >
            <button className="font-bold px-8 py-2 mt-4 mr-8 shadow-slate-900">
              Frontend Code
            </button>
          </a>
          <a
            href="https://github.com/vudjzx/reviews-backend"
            target="_blank"
            rel="noreferrer"
          >
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
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GraphQL
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Apollo Server
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJS
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
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

export default MovieReviewer;
