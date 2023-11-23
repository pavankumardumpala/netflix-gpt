import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-gray-900 ">
      <h1 className=" text-5xl font-bold">{title}</h1>
      <p className=" py-6 text-lg w-1/4">{overview}</p>
      <div className="flex flex-row">
        <button className=" bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 font-bold rounded-lg flex flex-row  ">
          <FaPlay /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white font-bold  p-4 px-12 text-xl bg-opacity-50 hover:opacity-80 rounded-lg flex flex-row">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
