import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies =()=>{
    const dispatch = useDispatch();
    const [loading, setLoading]= useState(true)
    const handlePopularMovies = async()=>{
      try{
          const fetchedMovies = await fetch('https://api.themoviedb.org/3/movie/popular',API_OPTIONS);
        const json = await fetchedMovies.json();
        // console.log(json);
        dispatch(addPopularMovies(json.results));
      }catch(err){
        console.log(err)
      }finally{
        setLoading(false)
      }


    }
    useEffect(()=>{
        handlePopularMovies();
    },[]);
    return loading
}
export default usePopularMovies;