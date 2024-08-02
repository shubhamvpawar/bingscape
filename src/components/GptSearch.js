import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="background"
        ></img>
      </div>
      <div className="pt-[23%] md:pt-0">
        <GptSearchbar />
        <GptMoviesSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
