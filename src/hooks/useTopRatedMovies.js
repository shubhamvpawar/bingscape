import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    //Fetch Data from Movies API and update store
    const dispatch = useDispatch();

    const topRatedMovies = useSelector((store) => store.movies.toRatedMovies);

    const getTopRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        if (!topRatedMovies) getTopRatedMovies();
    }, [])
};

export default useTopRatedMovies;