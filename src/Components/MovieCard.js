import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({movie}) => {
  return (
    <div>
      <div className='w-[180px]'>
        <img src={IMG_CDN_URL + movie?.poster_path} alt="poster" />
      </div>
      <p>{movie?.title}</p>
      <p>Rating - {movie?.vote_average}</p>
      <p>Release - {movie?.release_date}</p>
    </div>
  )
}

export default MovieCard
