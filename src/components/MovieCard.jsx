import React from 'react';
import { POSTER_URL } from '../utils/constants';


const MovieCard = ({title, movies,isFirst}) => {
    
   // console.log("this is moviesArray from movie Card ", movies)
   
    
  return (
    <div >
        <div className={`${isFirst ? "-mt-44" : "mt-6"}  relative z-20 px-5}`}>
            <h1 className='text-3xl font-bold pb-4 text-white  '>{title}</h1>
        <div className='flex gap-5 overflow-x-auto no-scrollbar h-auto m-8 '>{
          movies?.map((movie)=>{
                return(
                    <div key={movie.id} className="min-w-[150px]" >
                        <img src={`${POSTER_URL+movie.poster_path}`} alt="" srcset=""  className='w-[150px] h-[225px] object-cover rounded-lg cursor-pointer  transition-transform duration-300 hover:scale-110 mt-3' />
                    </div>
                )
            })
        }</div>
        </div>
      
    </div>
  )
}

export default MovieCard
