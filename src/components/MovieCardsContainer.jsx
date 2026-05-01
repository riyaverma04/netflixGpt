import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import usePopularMovies from '../hooks/usePopularMovies';
import translateText from '../utils/translateText';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import {Atom} from 'react-loading-indicators'
import { useNavigate } from 'react-router-dom';




const MovieCardsContainer = () => {
  const selectedLanguage = useSelector(store => store.config?.lang);
    const nowPlayingMoviesArray = useSelector(store=> store.movies?.nowPlayingMovies);
    const popularMovieArray = useSelector(store => store.movies?.popularMovies);
    const topRatedMovieArray = useSelector(store => store.movies?.topRatedMovies);
    const [titleNowPlaying, setTitleNowPlaying] =useState("");
    const [titlePopular, setTitlePopular] =useState("");
    const [titleTopRated, setTitleTopRated] =useState("");
    const loading = usePopularMovies();
    const navigate = useNavigate();
         const topRatedMovieLoading = useTopRatedMovies(); // Call the hook for top-rated movies
   
     
     
     useEffect(()=>{
      const translate = async ()=>{
        const translateTitleNowPlaying = await translateText("Now Playing", selectedLanguage);
        const translateTitlePopular = await translateText("Popular", selectedLanguage);
        const translateTitleTopRated = await translateText("Top Rated", selectedLanguage);
        setTitleNowPlaying(translateTitleNowPlaying);
        setTitlePopular(translateTitlePopular);
        setTitleTopRated(translateTitleTopRated);
      }
      translate()
     },[selectedLanguage])
     const handleNowPlaying=(choice)=>{
      navigate(`/${choice}`)

     }
     if (loading || topRatedMovieLoading) {
    return (
      <div className='w-full h-[100vh] flex justify-center items-center bg-black'>
        <Atom color="#ec1010" size="medium" />
      </div>
    );
  }
  

  if (!popularMovieArray || !topRatedMovieArray) {
    return null;
  }
     
    //console.log("this is console from moviecards ", nowPlayingMoviesArray)
  return (
    <div className='bg-black '>
        <MovieCard title={titleNowPlaying || "Now Playing"}  movies={nowPlayingMoviesArray} isFirst handleClick={()=>{handleNowPlaying('nowPlaying')}}/>
        <MovieCard title={titlePopular || "Popular"}  movies={popularMovieArray} handleClick={()=>{handleNowPlaying('popular')}}/>
        <MovieCard title={titleTopRated || "Top Rated"}  movies={topRatedMovieArray} handleClick={()=>{handleNowPlaying('topRated')}}/>
        
      
    </div>
  )
}

export default MovieCardsContainer
