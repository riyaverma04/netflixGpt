import { ArrowLeft } from 'lucide-react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeWatchingMovie } from '../utils/watchingMovieSlice';


const MovieWatch = () => {
    const navigate = useNavigate()
    const dispatch= useDispatch();
    //getting movie from redux
    const getmovie= useSelector((store)=> store.watchingMovie)
   
    useEffect(()=>{
        
    if(getmovie){
        localStorage.setItem('watchingMovie',JSON.stringify(getmovie));
    }
    },[getmovie])
    const getWatchingMovie= localStorage.getItem("watchingMovie");
    const movie =  getmovie|| (getWatchingMovie ? JSON.parse(getWatchingMovie) : null);
    if (!movie) {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <p>Loading movie...</p>
    </div>
  );
}
    return (

    <div className="bg-black min-h-screen text-white">

  {/* Header */}
  <div className="flex items-center gap-4 p-4">
    <button onClick={() => {
        navigate(-1)
        
        }}><ArrowLeft/></button>
    <h1 className="text-lg md:text-2xl font-bold">
      {movie?.title}
    </h1>
  </div>

  {/* Video Section */}
  <div className="w-full flex justify-center">
    <div className="w-full md:w-[80%] aspect-video bg-gray-900 rounded-lg overflow-hidden">
      {/* Replace with iframe/player */}
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${movie?.trailerKey}`}
        allowFullScreen
      />
    </div>
  </div>

  {/* Movie Info */}
  <div className="p-4 md:px-20">
    <h2 className="text-xl md:text-3xl font-bold">
      {movie?.title}
    </h2>

    <p className="text-gray-400 mt-2">
      ⭐ {movie?.vote_average} • {movie?.release_date}
    </p>

    <p className="mt-4 text-sm md:text-base leading-relaxed">
      {movie?.overview}
    </p>
  </div>

</div>
  )
}

export default MovieWatch
