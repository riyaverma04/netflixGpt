import { useEffect,useState } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const [loading,setLoading]= useState(true);
    const handleTopRatedMoves = async()=>{
         try{
            const fetchData  = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json = await fetchData.json();
        // console.log(json);
            dispatch(addTopRatedMovies(json.results));

         }catch(err){
            console.log(err)
         }finally{
            setLoading(false)
         }

    }



    useEffect(()=>{
        handleTopRatedMoves();

    },[])  
    return loading
}
export default useTopRatedMovies;