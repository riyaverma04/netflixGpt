// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey:import.meta.env.VITE_GPT_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true 
// });

// export default openai;
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(
//   {
//     apiKey: import.meta.env.VITE_GEMINI_KEY
//   }
// );

// export default genAI;

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_KEY,
  dangerouslyAllowBrowser: true,
});
export default groq;