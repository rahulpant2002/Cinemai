import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  return (
    <div className='pt-4 text-white pl-8 pr-0'>
      <h2 className='font-semibold text-2xl py-2'>{title}</h2>
      <div className='flex gap-4 overflow-y-scroll'>
        {movies?.map((movie)=><MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default MovieList;
