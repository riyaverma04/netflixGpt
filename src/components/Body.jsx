import React, { useEffect } from 'react'
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import  TrailorContainer from './TrailorContainer'
import MovieCardsContainer from './MovieCardsContainer'

const Body = () => {
  useNowPlayingMovies();
 
  
  return (
    <div>
        <Header/>
        {/* 
          trailor container
           - movie trailor in background
           - movie info
           

          movie cards
        
        
        
        */}
        <TrailorContainer/>
        <MovieCardsContainer/>
       

      
    </div>
  )
}

export default Body
