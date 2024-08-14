import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import { watchTrailer } from '../Utils/ReduxStore/moviesSlice';

const MovieCard = ({movie}) => {
  const dispatch = useDispatch();
  const onCardClick = (movieId)=>{
    dispatch(watchTrailer(movieId));
  }
  const poster_path = movie?.poster_path;
  return (
    <div onClick={()=>onCardClick(movie?.id)} className='flex flex-col justify-between text-center bg-gray-700 hover:cursor-pointer hover:bg-white hover:text-black'>
      <div className='w-[180px] bg-gray-400'>
        {poster_path && <img className='w-[100%]' src={IMG_CDN_URL + poster_path } alt="poster" />}
        {!poster_path && <div className='flex justify-center items-center bg-gray-400'>Poster Not Available</div>}
      </div>
      <div>
        <p>Rating - {movie?.vote_average} ⭐</p>
      </div>
    </div>
  )
}

export default MovieCard;