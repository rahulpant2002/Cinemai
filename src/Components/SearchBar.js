import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../Utils/languageConstants'
import openai from '../Utils/openai'
import { API_OPTIONS } from '../Utils/constant'
import { addSmartSearchMovies, addSpecificMovie, removeSpecificMovie } from '../Utils/ReduxStore/smartSearchSlice'


const SearchBar = ()=>{
    const dispatch = useDispatch();
    const langKey = useSelector((store)=>store?.config?.lang)
    const searchTextRef = useRef('null');

    const searchMovie = async(movie)=>{
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
      const json = await data.json();
      return json.results;
    }

    const handleSubmit = async()=>{
        const searchText = searchTextRef.current.value;
        const specificMovieInfo = await searchMovie(searchText);
        if(specificMovieInfo.length) {
          dispatch(addSpecificMovie());
          dispatch(addSmartSearchMovies(specificMovieInfo));
        }
        else{
          dispatch(removeSpecificMovie());
          const searchQuery = "Act as Movie Recommendation System and suggest some movies for the query :" + searchText
                              +  ". Give me maximum 20 movies and in comma separated manner with no full stop at the end. Example Gadar, Tere Naam, Hum Tumhare Hain Sanam"

          const searchResult = await openai.chat.completions.create({
              messages: [{ role: 'user', content: searchQuery }],
              model: 'gpt-3.5-turbo',
          });

          const movieList = searchResult?.choices?.[0]?.message?.content.split(', ');
          const moviePromiseArray = movieList.map((movie)=>searchMovie(movie));
          const movieSmartSearch = await Promise.all(moviePromiseArray);
          
          const filteredMovies = movieSmartSearch.map((list, index)=>(
            list.filter((movie)=>movie?.title.toLowerCase() === movieList[index].toLocaleLowerCase()
          )))
          dispatch(addSmartSearchMovies(filteredMovies));
      }
    }

    const handleEnter = (e)=>{
      if(e.key==='Enter') handleSubmit();
    }

  return (
    <div className='md:pt-[8%] pt-[40%] flex justify-center '>
      <form onSubmit={(e)=>e.preventDefault()} className='bg-black bg-opacity-75 w-[85%] md:w-[50%] rounded-lg '>
        <input onKeyDown={handleEnter} ref={searchTextRef} type="text" placeholder={lang[langKey]?.placeholderText} className='py-1 px-2 my-2 md:py-2 md:px-4 md:my-4 mx-[2%] w-[75%] rounded-lg' />
        <button onClick={handleSubmit} className='p-1 my-2 md:py-2 md:px-4 md:my-4 mx-[2%] w-[17%] bg-red-700 rounded-lg text-white'>{lang[langKey]?.search}</button>
      </form>
    </div>
  )
}

export default SearchBar
