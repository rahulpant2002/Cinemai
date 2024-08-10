import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useBollywoodMovies from '../hooks/useBollywoodMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import SmartSearchPage from './SmartSearchPage';
import TrailerContainer from './TrailerContainer';
import useBollywood2023 from '../hooks/useBollywood2023';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useBollywoodMovies();
  useUpcomingMovies();
  useBollywood2023();

  const {isSmartSearch, id} = useSelector((store)=>({
    isSmartSearch : store?.smartSearch?.isSmartSearch,
    id : store?.movies?.showTrailer
  }))

  return (
    <div>
      <Header/>
      {
        isSmartSearch ? <SmartSearchPage/> : (
            id ? <TrailerContainer movieId={id}/> :
            <>
              <MainContainer/>
              <SecondaryContainer/>
            </>
        )
      }
    </div>
  )
}

export default Browse