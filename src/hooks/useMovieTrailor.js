import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieTrailor } from '../utils/movieSlice';

const useMovieTrailor =  () => {
    const dispatch = useDispatch();
    const[loading, setLoading ]= useState(true);
    const handleMovieTrailor = async()=> {
        try{
            // console.log(id)
            setLoading(true)

            const data = await fetch('https://api.themoviedb.org/3/movie/999136/videos', API_OPTIONS)
            const json = await data.json();
            console.log(json)
            
            const trailorVideo = json.results?.filter(item => {
               
           return item.type === "Trailer" 
           
           
           
        });
        
        dispatch(addMovieTrailor(trailorVideo));
    }catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
        
    }


    useEffect(()=>{
        handleMovieTrailor();
    },[]);
    return loading ;
}

export default useMovieTrailor;
