import { useSelector } from "react-redux";


const GptMoviesContainer = ()=>{
    const gptSuggestedMovies = useSelector(store => store.gptSearch?.gptSuggestedMovies);
    return(
        <div>
            <h1>{gptSuggestedMovies?.join(", ")}</h1>
        </div>

    )
}

export default GptMoviesContainer;  