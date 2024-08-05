import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/ReduxStore/moviesSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = async()=>{
        const movies = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const data = await movies.json();
        dispatch(addPopularMovies(data?.results));
    }
    useEffect(()=>{
        popularMovies();
    }, [])
}
export default usePopularMovies;