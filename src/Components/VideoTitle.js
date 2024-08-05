import React from 'react'

const VideoTitle = ({title, description, rating}) => {
  return (
    <div className='w-screen aspect-video text-white pt-[15%] pl-8 absolute bg-gradient-to-r from-black'>
      <h1 className='font-bold text-3xl'>{title}</h1>
      <p className='w-1/3 my-4 opacity-85'>{description}</p>
      <div>
        <button className='bg-white rounded-md p-3 m-2 w-24 text-black font-bold hover:bg-opacity-80'>▷ Play</button>
        <button className='bg-gray-500 rounded-md p-3 m-2 w-36 text-white'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
