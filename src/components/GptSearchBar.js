import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex  justify-center ">
      <form className="w-1/2 bg-black  flex flex-row rounded-lg">
        <input
          className="p-4 m-4  w-[80%] rounded-lg"
          type="text"
          placeholder={lang.telugu.gptSearchPlaceHolder}
        />
        <button className=" my-4 mr-2 font-bold p-4 w-[25%] bg-red-800 text-white rounded-lg">
          {lang.telugu.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
