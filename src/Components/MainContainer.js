import React from 'react'
import VideoBG from './VideoBG'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    const {original_title, overview, vote_average, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} description={overview} rating={vote_average} />
      <VideoBG movieId={id}/>
    </div>
  )
}

export default MainContainer
