import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/ReduxStore/moviesSlice";

const useNowPlayingMovies = ()=>{
  const dispatch = useDispatch();
  const {nowPlaying} = useSelector(store=>store?.movies);
  const nowPlayingFetch = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  } 
  useEffect(()=>{
    !nowPlaying && nowPlayingFetch();
  }, [])
};

export default  useNowPlayingMovies;