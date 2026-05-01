import { useDispatch } from "react-redux";
import React, { useState,useEffect } from 'react'
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
  const handleNowPlayingMovie = async ()=>{
    try{
      
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
    }catch(err){
      console.log(err);
    }finally {
      setLoading(false); 
    }

  }
  useEffect(()=>{
    handleNowPlayingMovie()
  },[])
  return loading
}
export default useNowPlayingMovies;