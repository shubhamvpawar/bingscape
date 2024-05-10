import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    //Fetch Data from Movies API and update store
    const dispatch = useDispatch();

    //Memoisation
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    const getUpcomingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
    };

    //Memoisation
    useEffect(() => {
        if (!upcomingMovies) getUpcomingMovies();
    }, [])
};

export default useUpcomingMovies;