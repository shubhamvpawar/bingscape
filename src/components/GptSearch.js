import React from 'react'
import GptSearchbar from './GptSearchbar';
import GptMoviesSuggestions from './GptMoviesSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={BG_URL}
                    alt='background'>
                </img>
            </div>
            <GptSearchbar />
            <GptMoviesSuggestions />
        </div>
    )
}

export default GptSearch;