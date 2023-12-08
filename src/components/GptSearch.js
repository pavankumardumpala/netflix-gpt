import React from "react";
import { BG_URL } from "../utils/constants";
import GptMovieSuggessions from "./GptMovieSuggessions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute -z-10">
        <img src={BG_URL} alt="Logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggessions />
    </div>
  );
};

export default GptSearch;
