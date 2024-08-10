import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addBollywood2023 } from "../Utils/ReduxStore/moviesSlice";

const useBollywood2023 = ()=>{
    const dispatch = useDispatch();
    const bollywood2023 = async()=>{
        const movies = await fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&&primary_release_year=2023&page=1&with_original_language=hi', API_OPTIONS);
        const data = await movies.json();
        dispatch(addBollywood2023(data?.results));
    }
    useEffect(()=>{
        bollywood2023();
    }, [])
}
export default useBollywood2023;