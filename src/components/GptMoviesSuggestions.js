import React from 'react'
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';

const GptMoviesSuggestions = () => {
    const gpt = useSelector(store => store.gpt)
    const {searchMovies} = gpt;
    return (
        <div className="m-10 px-6 py-9 text-white bg-black bg-opacity-60 rounded-2xl">
            <div className="col-span-4">
                <div className="col-span-1">
                    {searchMovies.results?.map((movie) => (
                        <div className="pr-4 pb-2 flex justify-between">
                            <img className="w-32 md:w-48" alt="Movie Card" src={IMG_CDN_URL + movie.poster_path} />
                            <div className='mx-2'>
                                <p className='mt-2 text-lg font-bold'>{movie.original_title}</p>
                                <p className='mt-2 font-semibold'>{"Release Date: " + movie.release_date}</p>
                                <p className='mt-2'>{movie.overview}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
        </div>
    )
}

export default GptMoviesSuggestions;