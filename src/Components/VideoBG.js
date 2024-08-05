import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBG = ({movieId}) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store)=>store?.movies?.trailerVideo);
  return (
    <div>
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key}
      title="Let’s Build a Tech Blog using HTML, Tailwind CSS, React, and Appwrite Cloud as a backend 🔥"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBG
