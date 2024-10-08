import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addBollywoodMovies } from "../Utils/ReduxStore/moviesSlice";

const useBollywoodMovies = ()=>{
    const dispatch = useDispatch();
    const {bollywoodMovies} = useSelector(store=>store?.movies);
    
    const bollywoodMoviesFetch = async()=>{
        const movies = await fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_original_language=hi', API_OPTIONS);
        const data = await movies.json();
        dispatch(addBollywoodMovies(data?.results));
    }
    useEffect(()=>{
        !bollywoodMovies && bollywoodMoviesFetch();
    }, [])
}
export default useBollywoodMovies;