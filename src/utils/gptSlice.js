import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        searchMovies: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addSearchMovieResult: (state, action) => {
            state.searchMovies = action.payload;
        }
    },
});

export const { toggleGptSearchView, addSearchMovieResult } = gptSlice.actions;

export default gptSlice.reducer;