import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useBollywoodMovies from '../hooks/useBollywoodMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useEvergreenMovies from '../hooks/useEvergreenMovies';
import { useSelector } from 'react-redux';
import SmartSearchPage from './SmartSearchPage';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useBollywoodMovies();
  useUpcomingMovies();
  useEvergreenMovies();

  const isSmartSearch = useSelector((store)=> store?.smartSearch?.isSmartSearch);
  return (
    <div>
      <Header/>
      {
        isSmartSearch ? <SmartSearchPage/> : (
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
