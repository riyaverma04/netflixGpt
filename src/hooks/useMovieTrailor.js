import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieTrailor } from '../utils/movieSlice';

const useMovieTrailor =  ({id}) => {
    const dispatch = useDispatch();
    const handleMovieTrailor = async()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/999136/videos', API_OPTIONS)
        const json = await data.json();
        // console.log(json)
        const trailorVideo = json.results?.filter(item => {
           return item.type === "Trailer"

            
            
        });

        dispatch(addMovieTrailor(trailorVideo));
        
    }


    useEffect(()=>{
        handleMovieTrailor();
    },[])
}

export default useMovieTrailor;
