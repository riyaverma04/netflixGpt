import React, { useRef } from 'react'
import language from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'

// import genAI from '../utils/openai';
import groq from '../utils/openai';
import { setGptSuggestedMovies ,setGptSearchInput } from '../utils/gptSearchSlice';
import { API_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {
  const dispatch = useDispatch();
        const languageKey= useSelector(store=> store.config?.lang);
        const refSearchInput = useRef(null);
//         const handleGptSubmit = async (e) => {

//   e.preventDefault();

//   try {
//     const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });

//     const result = await model.generateContent(
//       refSearchInput.current.value
//     );

//     const response = await result.response;
//     const text = response.text();

//     console.log(text);

//   } catch (error) {
//     console.error("Gemini Error:", error);
//   }

//   console.log(refSearchInput.current?.value);
// };

 const handlegptSuggestedMovies = async(movie)=>{
  
        
        const data  = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();

        console.log(json.results[0])
        
        
        return json.results[0];
        
        

    }




const handleGptSubmit = async (e) => {
    e.preventDefault();
    if(!refSearchInput.current.value) return;
  

    dispatch(setGptSearchInput(refSearchInput.current.value));
    try {
      const mood = refSearchInput.current.value;

      const response = await groq.chat.completions.create({
       model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `
Suggest as much as you can movies based on user's mood.
Only return movie names separated by commas.
Do not explain anything.
`,
          },
          {
            role: "user",
            content: refSearchInput.current.value,
          },
        ],
      });

      const text = response.choices[0]?.message?.content;
      console.log(response.choices[0])

      console.log("AI Query:", text);
      const gptSuggestedMovies = text.split(",").map((movie) => movie.trim());
        
      const promiseArray =  gptSuggestedMovies.map(movie =>(

        handlegptSuggestedMovies(movie)
      )
        
      
      
         
        );
        const tmdbMovies = await Promise.all(promiseArray )
        console.log("TMDB Movies:", tmdbMovies);
        dispatch(setGptSuggestedMovies(tmdbMovies));
      
      console.log("Suggested Movies:", gptSuggestedMovies);
      refSearchInput.current.value = "";

    } catch (error) {
      console.error("Groq Error:", error);
    }
  };
  return (
    <div className='flex gap-2 justify-center items-center flex-col md:flex-row '>
                <input type="text"  ref={refSearchInput} placeholder={language[languageKey].gptPlaceHolder}  className=' w-[90%] md:w-10/12 px-3 py-3  text-sm md:text-lg rounded-lg text-black'/>
                <button onClick={handleGptSubmit} className='w-auto px-4 py-3 text-sm md:px-5 md:py-2 font-bold md:text-lg bg-red-600 text-white rounded-lg'>{language[languageKey].search}</button>
              </div>
  )
}

export default GptSearchBar
