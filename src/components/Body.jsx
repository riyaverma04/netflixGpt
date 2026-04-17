import React, { useEffect } from 'react'
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import  TrailorContainer from './TrailorContainer'
import MovieCardsContainer from './MovieCardsContainer'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'

const Body = () => {
  const gptSearchPageview = useSelector(store=> store.gptSearch?.gptSearchContainer);
 
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
        {gptSearchPageview ?  <GptSearchPage/> : <> <TrailorContainer/>
        <MovieCardsContainer/></> }
       
       

      
    </div>
  )
}

export default Body
