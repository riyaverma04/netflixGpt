import React, { useEffect } from 'react'
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import  TrailorContainer from './TrailorContainer'
import MovieCardsContainer from './MovieCardsContainer'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'
import {Atom} from 'react-loading-indicators'

const Body = () => {
  const gptSearchPageview = useSelector(store=> store.gptSearch?.gptSearchContainer);
 
   const loading = useNowPlayingMovies();

   if(loading){
    return  (
          <div className='w-full h-[100vh] flex justify-center items-center bg-black'>
            <Atom color="#ec1010" size="medium" />
          </div>
        );
   }
 
  
  return  (
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
