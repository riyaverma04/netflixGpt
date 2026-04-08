import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import usePopularMovies from '../hooks/usePopularMovies';
import translateText from '../utils/translateText';
import useTopRatedMovies from '../hooks/useTopRatedMovies';



const MovieCardsContainer = () => {
  const selectedLanguage = useSelector(store => store.config?.lang);
    const nowPlayingMoviesArray = useSelector(store=> store.movies?.nowPlayingMovies);
    const popularMovieArray = useSelector(store => store.movies?.popularMovies);
    const topRatedMovieArray = useSelector(store => store.movies?.topRatedMovies);
    const [titleNowPlaying, setTitleNowPlaying] =useState("");
    const [titlePopular, setTitlePopular] =useState("");
    const [titleTopRated, setTitleTopRated] =useState("");
    usePopularMovies();
    useTopRatedMovies(); // Call the hook for top-rated movies
     if(popularMovieArray === null)  return;
     if(topRatedMovieArray === null) return; 
     
     
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
     
    //console.log("this is console from moviecards ", nowPlayingMoviesArray)
  return (
    <div className='bg-black '>
        <MovieCard title={titleNowPlaying || "Now Playing"}  movies={nowPlayingMoviesArray} isFirst/>
        <MovieCard title={titlePopular || "Popular"}  movies={popularMovieArray}/>
        <MovieCard title={titleTopRated || "Top Rated"}  movies={topRatedMovieArray}/>
        
      
    </div>
  )
}

export default MovieCardsContainer
