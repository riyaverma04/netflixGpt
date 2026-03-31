import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';



const MovieCardsContainer = () => {
    const nowPlayingMoviesArray = useSelector(store=> store.movies?.nowPlayingMovies);
    const popularMovieArray = useSelector(store => store.movies?.popularMovies);
    const topRatedMovieArray = useSelector(store => store.movies?.topRatedMovies);
    usePopularMovies();
    useTopRatedMovies(); // Call the hook for top-rated movies
     if(popularMovieArray === null)  return;
     if(topRatedMovieArray === null) return;  
     
    //console.log("this is console from moviecards ", nowPlayingMoviesArray)
  return (
    <div className='bg-black '>
        <MovieCard title={'Now Playing'}  movies={nowPlayingMoviesArray} isFirst/>
        <MovieCard title={'Popular'}  movies={popularMovieArray}/>
        <MovieCard title={'Top Rated'}  movies={topRatedMovieArray}/>
        
      
    </div>
  )
}

export default MovieCardsContainer
