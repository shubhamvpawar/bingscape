import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovieResult } from "../utils/gptSlice";

const GptSearchbar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async () => {
    const movie = searchText.current.value;

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSearchMovieResult(json));
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-2/4 bg-transparent grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="px-4 my-4 ml-2 py-2 col-span-9 rounded-lg"
          placeholder="What will you like to watch today?"
        />
        <button
          onClick={searchMovieTMDB}
          className="col-span-3 my-4 ml-2 mr-2 py-2 md:m-4 px-2 bg-red-600 text-white rounded-lg rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
