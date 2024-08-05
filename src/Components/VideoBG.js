import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBG = ({movieId}) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store)=>store?.movies?.trailerVideo);
  return (
    <div>
      <iframe className='w-screen aspect-video' 
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key + "&cc_load_policy=0"}
        title="BackGround Trailer Running"></iframe>
    </div>
  )
}

export default VideoBG
