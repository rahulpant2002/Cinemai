import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/ReduxStore/moviesSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = async()=>{
        const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&with_original_language=hi', API_OPTIONS);
        const data = await movies.json();
        dispatch(addTopRatedMovies(data?.results));
    }
    useEffect(()=>{
        topRatedMovies();
    }, [])
}
export default useTopRatedMovies;