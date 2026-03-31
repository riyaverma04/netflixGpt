import { useDispatch } from "react-redux";
import React, { useEffect } from 'react'
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
  const handleNowPlayingMovie = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))

  }
  useEffect(()=>{
    handleNowPlayingMovie()
  },[])
}
export default useNowPlayingMovies;