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
import SmartSearchContainer from './SmartSearchContainer';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useBollywoodMovies();
  useUpcomingMovies();
  useEvergreenMovies();

  const isSmartSearch = useSelector((store)=> store?.smartSearch?.isSmartSearch);
  // console.log(isSmartSearch);
  return (
    <div>
      <Header/>
      {
        isSmartSearch ? <SmartSearchContainer/> : (
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
