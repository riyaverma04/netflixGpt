import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addWatchingMovie } from '../utils/watchingMovieSlice';
const useWatchingMovie=()=>{
    const navigate = useNavigate()
  const dispatch = useDispatch();
     const handleDispatchMovie=(movie)=>{
         console.log(movie)
    dispatch(addWatchingMovie(movie))
    //navigating to the movieWatch
    navigate('/movie-watch');


     }


     return handleDispatchMovie
}
export  default useWatchingMovie;