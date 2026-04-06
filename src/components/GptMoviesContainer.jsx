import { useSelector } from "react-redux";
import MovieCard from "./movieCardsContainer";
import { POSTER_URL } from '../utils/constants';






const GptMoviesContainer = ()=>{
    const gptSuggestedMovies = useSelector(store => store.gptSearch?.gptSuggestedMovies);
    const gptSearchInput = useSelector(store => store.gptSearch?.gptSearchInput);
   

   
    return(
        <div>

             <div >
                    <div className={" mt-6 w-full relative z-20 px-5"}>
                       { gptSuggestedMovies && <h1>Here are search for : {gptSearchInput}</h1> }
                        
                    <div className=' flex  flex-wrap md:flex-nowrap md:overflow-x-auto  overflow-y-auto no-scrollbar h-auto md:overflow-y-hidden '>{
                      gptSuggestedMovies?.map((movie)=>{
                            return(
                                <div key={movie.id} className="min-w-[150px] m-3" >
                                    <img src={`${POSTER_URL+movie.poster_path}`} alt="" srcset=""  className=' w-auto md:w-[150px] h-[300px] md:h-[225px] object-cover rounded-lg cursor-pointer  transition-transform duration-300 hover:scale-110 mt-3 ' />
                                </div>
                            )
                        })
                    }</div>
                    </div>
                  
                </div>
           

            
        </div>

    )
}

export default GptMoviesContainer;  


