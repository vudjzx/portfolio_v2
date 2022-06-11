import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/images/p4.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Head from "next/head";

const FoodApp = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Food App</title>
        <meta name="description" content="Victor Duran portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-4 text-slate-50">Food App</h2>
          <h3 className="text-slate-50">React Native Project</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 text-slate-50">
          <p className="text-[#94a3b8]">Food Store Browsing App</p>
          <h2 className="text-slate-50">Overview</h2>
          <p className="text-slate-50">
            Mobile application built with react native simulating a food
            delivery app like UberEats.
          </p>
          <p>Category filtering is implemented.</p>
          <p>
            Products have a carousel of images and the Maps API is implemented
            to find a path to each mock restaurant in the data
          </p>

          <a
            href="https://www.youtube.com/watch?v=afutTERQuU0"
            target="_blank"
            rel="noreferrer"
          >
            <button className="font-bold px-8 py-2 mt-4 mr-8 shadow-slate-900">
              Demo Video
            </button>
          </a>
          <a
            href="https://github.com/vudjzx/ui-food-app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="font-bold px-8 py-2 mt-4 shadow-slate-900">
              Code
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
                <RiRadioButtonFill className="pr-1" /> React Native
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-slate-600 shadow-slate-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Maps API
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

export default FoodApp;
