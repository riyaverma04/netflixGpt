import React from 'react'
import { useSelector } from 'react-redux'

const TrailorInfo = () => {
    //to get the trailor info we need to subscribe to the store
    const trailorsArray = useSelector(store => store.movies?.nowPlayingMovies);
    // console.log(trailorsArray)
    if(trailorsArray === null) return;
    const trailor = trailorsArray[3];
    // console.log(trailor)
    const {id, title,overview} = trailor;
    
  return (
   <div className='h-screen bg-gradient-to-r from-black to-transparent absolute w-full z-10'>
     <div className='w-6/12 md:w-6/12 lg:w-4/12 flex flex-col gap-4 absolute text-white top-[35%] md:top-[40%] -translate-y-1/2 left-8 md:left-[50px]  space-y-[-9px] md:space-y-[5px]'> 
        <h1 className='font-bold text-xl md:text-4xl'>{title}</h1>
        <p className='font-semibold text-md md:text-lg truncate md:whitespace-normal md:overflow-visible md:font-medium'>{overview}</p>
        <div className='flex gap-5'>
            <button className=' px-3 py-1 font-semibold text-md  rounded-md md:px-5 md:py-2 md:font-bold md:text-lg bg-red-600 text-white md:rounded-lg'>play</button>
            <button className=' px-3 py-1 font-semibold text-md rounded-md  md:px-5 md:py-2 md:font-bold md:text-lg bg-red-600 text-white md:rounded-lg'>more info</button>
        </div>
       
      
    </div>
   </div>
  )
}

export default TrailorInfo
