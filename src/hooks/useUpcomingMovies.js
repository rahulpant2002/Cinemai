import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utils/ReduxStore/moviesSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const {upcomingMovies} = useSelector(store=>store?.movies);
    const upcomingMoviesFetch = async()=>{
        const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const data = await movies.json();
        dispatch(addUpcomingMovies(data?.results));
    }
    useEffect(()=>{
        !upcomingMovies && upcomingMoviesFetch();
    }, [])
}
export default useUpcomingMovies;