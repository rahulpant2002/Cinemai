import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../Utils/languageConstants'
import openai from '../Utils/openai'

const SearchBar = ()=>{
    const langKey = useSelector((store)=>store?.config?.lang)
    const searchTextRef = useRef('null');

    const handleSubmit = async()=>{
        const searchText = searchTextRef.current.value;
        const searchQuery = "Act as Movie Recommendation System and suggest some movies for the query :" + searchText
                             +  ". Give me maximum 20 movies and in comma separated manner"

        const searchResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchQuery }],
            model: 'gpt-3.5-turbo',
        });
    }

  return (
    <div className='pt-[8%] flex justify-center'>
      <form onSubmit={(e)=>e.preventDefault()} className='bg-black bg-opacity-75 w-[50%] rounded-lg'>
        <input ref={searchTextRef} type="text" placeholder={lang[langKey]?.placeholderText} className='py-2 px-4 my-4 mx-[2.5%] w-[75%]' />
        <button onClick={handleSubmit} className='py-2 px-4 my-4 mx-[2.5%] w-[15%] bg-red-700 rounded-lg text-white'>{lang[langKey]?.search}</button>
      </form>
    </div>
  )
}

export default SearchBar
