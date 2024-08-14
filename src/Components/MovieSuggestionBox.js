import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const MovieSuggestionBox = () => {
  const {smartSearchMoviesResult, isSpecificMovie} = useSelector((store)=>store?.smartSearch)
  if(!smartSearchMoviesResult) return null;
  return (
    <div className='p-4 m-4 bg-black bg-opacity-90 text-white'>
        {
          isSpecificMovie && <MovieList title="Recommendations" movies={smartSearchMoviesResult}/>
        }
        {
          !isSpecificMovie && smartSearchMoviesResult.map((list)=>{
            if(list.length) return <MovieList key={list[0]?.title} title={list[0]?.title} movies={list}/>
          })
        }
    </div>
  )
}

export default MovieSuggestionBox;
