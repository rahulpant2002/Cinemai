import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className='w-screen aspect-video text-white pl-3 pt-[4%] md:pt-[15%] md:pl-8 absolute bg-gradient-to-r from-black'>
      <h1 className='font-bold text-2xl md:text-3xl'>{title}</h1>
      <p className='hidden md:inline-block w-1/3 my-4 opacity-85'>{description}</p>
      <div>
        <button className='bg-white rounded-md p-1 m-1 w-16 md:p-3 md:m-2 md:w-24 text-black font-bold hover:bg-opacity-80'>▷ Play</button>
        <button className='hidden md:inline-block bg-gray-500 rounded-md p-1 m-1 w-24 md:p-3 md:m-2 md:w-36 text-white'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
