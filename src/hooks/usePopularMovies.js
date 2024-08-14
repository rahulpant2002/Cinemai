import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/ReduxStore/moviesSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const {popularMovies} = useSelector(store=>store?.movies);
    const popularMoviesFetch = async()=>{
        const movies = await fetch('https://api.themoviedb.org/3/movie/popular?with_original_language=hi&page=1', API_OPTIONS);
        const data = await movies.json();
        dispatch(addPopularMovies(data?.results));
    }
    useEffect(()=>{
        !popularMovies && popularMoviesFetch();
    }, [])
}
export default usePopularMovies;