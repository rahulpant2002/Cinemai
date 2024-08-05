import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant"
import { addTrailerVideo } from "../Utils/ReduxStore/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const movieTrailer = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const clips = await data.json();

        const vdos = clips.results?.filter((vdo)=>vdo?.type==="Trailer");
        const trailer = vdos.length ? vdos[0] : clips.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    
    useEffect(()=>{
        movieTrailer();
    }, [])
}
export default useMovieTrailer;