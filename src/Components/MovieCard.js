import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({movie}) => {
  return (
    <div className='text-center hover:cursor-pointer hover:bg-white hover:text-black'>
      <div className='w-[180px]'>
        <img src={IMG_CDN_URL + movie?.poster_path} alt="poster" />
      </div>
      <p>{movie?.title}</p>
      <p>Rating - {movie?.vote_average} ⭐</p>
    </div>
  )
}

export default MovieCard
