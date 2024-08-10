import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import { watchTrailer } from '../Utils/ReduxStore/moviesSlice';

const MovieCard = ({movie}) => {
  const dipatch = useDispatch();
  const onCardClick = (movieId)=>{
    dipatch(watchTrailer(movieId));
  }
  return (
    <div onClick={()=>onCardClick(movie?.id)} className='text-center hover:cursor-pointer hover:bg-white hover:text-black'>
      <div className='w-[180px]'>
        <img src={IMG_CDN_URL + movie?.poster_path} alt="poster" />
      </div>
      <p>{movie?.title}</p>
      <p>Rating - {movie?.vote_average} ⭐</p>
    </div>
  )
}

export default MovieCard;