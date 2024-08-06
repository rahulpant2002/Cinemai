import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../Utils/languageConstants'

const SearchBar = () => {
    const langKey = useSelector((store)=>store?.config?.lang)
  return (
    <div className='pt-[8%] flex justify-center'>
      <form className='bg-black bg-opacity-75 w-[50%] rounded-lg'>
        <input type="text" placeholder={lang[langKey]?.placeholderText} className='py-2 px-4 my-4 mx-[2.5%] w-[75%]' />
        <button className='py-2 px-4 my-4 mx-[2.5%] w-[15%] bg-red-700 rounded-lg text-white'>{lang[langKey]?.search}</button>
      </form>
    </div>
  )
}

export default SearchBar
