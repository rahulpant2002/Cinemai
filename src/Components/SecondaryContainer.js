import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store=>store?.movies);
  return (
    <div className='bg-black w-screen'>
        <div className=' md:-mt-56 z-10 relative mb-3 '>
            <MovieList title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
            <MovieList title={"Bollywood Movies"} movies = {movies?.bollywoodMovies}/>
            <MovieList title={"Bollywood 2023"} movies = {movies?.bollywood2023}/>
            <MovieList title={"Popular"} movies = {movies?.popularMovies}/>
            <MovieList title={"Top Rated Movies"} movies = {movies?.topRatedMovies}/>
            <MovieList title={"Upcoming Movies"} movies = {movies?.upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer
