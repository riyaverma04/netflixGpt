import React, { useRef } from 'react'
import language from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'

// import genAI from '../utils/openai';
import groq from '../utils/openai';
import { setGptSuggestedMovies } from '../utils/gptSearchSlice';

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






const handleGptSubmit = async (e) => {
    e.preventDefault();

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
      dispatch(setGptSuggestedMovies(gptSuggestedMovies));
      console.log("Suggested Movies:", gptSuggestedMovies);

    } catch (error) {
      console.error("Groq Error:", error);
    }
  };
  return (
    <div className='flex gap-2  '>
                <input type="text"  ref={refSearchInput} placeholder={language[languageKey].gptPlaceHolder}  className='w-11/12 px-2 rounded-lg text-black'/>
                <button onClick={handleGptSubmit} className='px-5 py-2 font-bold text-lg bg-red-600 text-white rounded-lg'>{language[languageKey].search}</button>
              </div>
  )
}

export default GptSearchBar
