import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addEvergreenMovies } from "../Utils/ReduxStore/moviesSlice";

const useEvergreenMovies = ()=>{
    const dispatch = useDispatch();
    const evergreenMovies = async()=>{
        const movies = await fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&primary_release_year=1975&page=1&with_original_language=hi', API_OPTIONS);
        const data = await movies.json();
        dispatch(addEvergreenMovies(data?.results));
    }
    useEffect(()=>{
        evergreenMovies();
    }, [])
}
export default useEvergreenMovies;