import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const GptMoviesSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { searchMovies } = gpt;
  if (searchMovies == null) return;

  return (
    <div className="m-2 md:m-10 px-auto py-6 text-white bg-black bg-opacity-80 rounded-2xl">
      {searchMovies.results?.map((movie) => (
        <div className="pr-4 pb-2 flex justify-between col-span-4">
          <img
            className="w-32 md:w-48 col-span-1 pl-2"
            alt="Movie Card"
            src={IMG_CDN_URL + movie.poster_path}
          />
          <div className="mx-2 col-span-3">
            <p className="mt-2 text-lg font-bold">{movie.original_title}</p>
            <p className="mt-2 font-semibold">
              {"Release Date: " + movie.release_date}
            </p>
            <p className="mt-2">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GptMoviesSuggestions;
