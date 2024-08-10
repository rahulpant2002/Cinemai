import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import NoTrailer from './NoTrailer';

const MovieTrailer = ({movieId}) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store)=>store?.movies?.trailerVideo[movieId]);

    if (!trailerVideo?.key) {
        return <NoTrailer/>
    }

  return (
    <div>
      <iframe className='w-screen aspect-video' 
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="Movie Trailer"></iframe>
    </div>
  )
}

export default MovieTrailer;
