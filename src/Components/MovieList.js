import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  return (
    <div className='text-white pt-2 pl-4 md:pt-4 md:pl-8'>
      <h2 className='font-semibold text-xl py-1 md:text-2xl md:py-2'>{title}</h2>
      <div className='flex gap-4 overflow-x-auto no-scrollbar pb-3'>
        {movies?.map((movie)=><MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default MovieList;
