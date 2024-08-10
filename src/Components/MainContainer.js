import React from 'react'
import MovieTrailer from './MovieTrailer'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies || movies.length===0) return null;

    const mainMovie = movies[0];
    const {original_title, overview, vote_average, id} = mainMovie;

  return (
    <div className='text-white'>
      <VideoTitle title={original_title} description={overview} rating={vote_average} />
      <MovieTrailer movieId={id}/>
    </div>
  )
}

export default MainContainer
