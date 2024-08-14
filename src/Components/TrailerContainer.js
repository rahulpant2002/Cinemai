import React from 'react'
import MovieTrailer from './MovieTrailer'
import { useDispatch } from 'react-redux'
import { offTrailer } from '../Utils/ReduxStore/moviesSlice';

const TrailerContainer = ({movieId}) => {
    const dispatch = useDispatch();
    const handleClose = ()=>{                    
        dispatch(offTrailer(movieId));
    }
    console.log(movieId);
    return (
        <div className='pt-60 md:pt-0 bg-black'>
            <div>
                <button onClick={handleClose} className='fixed z-30 bg-violet-700 text-white rounded-lg px-4 py-2 m-4 font-bold text-2xl'>Close ✘</button>
            </div>
            <MovieTrailer key={movieId} movieId={movieId} />
        </div>
  )
}

export default TrailerContainer
