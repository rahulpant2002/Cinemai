import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestionBox from './MovieSuggestionBox'
import BgImg from '../Utils/BgImg.jpg'

const SmartSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BgImg} alt="bgImg" />
      </div>
      <SearchBar/>
      <MovieSuggestionBox/>
    </div>
  )
}

export default SmartSearchPage
