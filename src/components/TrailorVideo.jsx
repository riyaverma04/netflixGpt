import React from 'react'
import useMovieTrailor from '../hooks/useMovieTrailor'
import { useSelector } from 'react-redux';

const TrailorVideo = () => {
    const trailorData = useSelector(store => store.movies?.movieTrailor);
    useMovieTrailor();
    if(trailorData === null) return ;
    const {key,id} = trailorData[0];
  //   console.log("hey",trailorData)
  
  // console.log("id form trailr video ", id)
  // console.log("key", key)
   
  

  return (
    <div className="relative z-0">
        <iframe  src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&playsinline=1&controls=0`} title="YouTube video player" allow="accelerometer; autoplay;  mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  referrerPolicy="strict-origin-when-cross-origin" className="h-screen w-full "></iframe>
      
    </div>
    // allow="autoplay; mute" 
    // allow="accelerometer; autoplay;  mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //src={`https://www.youtube.com/embed/${key}?si=p0t4j69O0sxdHWwx`}
  )
}

export default TrailorVideo
