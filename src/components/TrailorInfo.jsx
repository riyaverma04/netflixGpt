import React from 'react'
import { useSelector } from 'react-redux'

const TrailorInfo = () => {
    //to get the trailor info we need to subscribe to the store
    const trailorsArray = useSelector(store => store.movies?.nowPlayingMovies);
    console.log(trailorsArray)
    if(trailorsArray === null) return;
    const trailor = trailorsArray[3];
    console.log(trailor)
    const {id, title,overview} = trailor;
    
  return (
   <div className='h-screen bg-gradient-to-r from-black to-transparent absolute w-full z-10'>
     <div className='w-4/12 flex flex-col gap-4 absolute text-white top-1/3 -translate-y-1/2 left-[50px] '> 
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='font-semibold '>{overview}</p>
        <div className='flex gap-5'>
            <button className='px-5 py-2 font-bold text-lg bg-red-600 text-white rounded-lg'>play</button>
            <button className='px-5 py-2 font-bold text-lg bg-red-600 text-white rounded-lg'>more info</button>
        </div>
       
      
    </div>
   </div>
  )
}

export default TrailorInfo
