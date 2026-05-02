import React from 'react'
import { POSTER_URL } from '../utils/constants';
const Card = ({movie,handleGoToMovieClick}) => {
  return (
    <div key={movie.id} className="min-w-[150px]   " onClick={handleGoToMovieClick}>
    {                     
     movie.poster_path &&  <img src={`${POSTER_URL+movie.poster_path}`} alt="" srcset=""  className='w-[150px] h-[225px] object-cover rounded-lg cursor-pointer  transition-transform duration-300 hover:scale-110 mt-3'  />
    }                    
    </div>
  )
}

export default Card
