import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestionBox from './MovieSuggestionBox'
import BgImg from '../Utils/BgImg.jpg'

const SmartSearchPage = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={BgImg} alt="bgImg " className='h-screen object-cover md:h-auto '/>
      </div>
      <SearchBar/>
      <MovieSuggestionBox/>
    </div>
  )
}

export default SmartSearchPage
