import React, { useEffect , useState } from 'react'
import { useSelector } from 'react-redux'
import translateText from '../utils/translateText';

const TrailorInfo = () => {
  const selectedLanguage = useSelector(store => store.config?.lang);
    //to get the trailor info we need to subscribe to the store
    const trailorsArray = useSelector(store => store.movies?.nowPlayingMovies);
    const [translatedTitle, setTranslatedTitle] = useState("");
    const [translatedOverview, setTranslatedOverview] = useState("");
    // console.log(trailorsArray)
    // if(trailorsArray === null) return;
    if (!trailorsArray) return null;
    const trailor = trailorsArray[3];
    // console.log(trailor)
    const {id, title,overview} = trailor;
    console.log("language from trailor info ", selectedLanguage)

    useEffect(()=>{
      const translate = async()=>{
        if(!title) return;
        
          

    console.log("TITLE:", title);
    console.log("LANG:", selectedLanguage);
        const translateTitle = await translateText(title, selectedLanguage);
        console.log("RESULT:", translateTitle); // 👈 VERY IMPORTANT
        setTranslatedTitle(translateTitle);
      }
      translate();

    },[title , selectedLanguage]);
    useEffect(()=>{
      const translate = async()=>{
        if(!overview) return;
          

    console.log("OVERVIEW:", overview);
    console.log("LANG:", selectedLanguage);
        const translateOverview = await translateText(overview, selectedLanguage);
        console.log("RESULT:", translateOverview); // 👈 VERY IMPORTANT
        setTranslatedOverview(translateOverview);
      }
      translate();

    },[overview , selectedLanguage]);

    const [translatedPlayButton, setTranslatedPlayButton] = useState("");
    const [translatedMoreInfoButton, setTranslatedMoreInfoButton] = useState("");

    useEffect(() =>{
      const translate = async ()=>{
        const translatePlayButton = await translateText("Play" , selectedLanguage);
        const translateMoreInfoButton = await translateText("More Info" , selectedLanguage);
        setTranslatedPlayButton(translatePlayButton);
        setTranslatedMoreInfoButton(translateMoreInfoButton);
      }
      translate();
    },[selectedLanguage])
    
  return (
   <div className='h-screen bg-gradient-to-r from-black to-transparent absolute w-full z-10'>
     <div className='w-6/12 md:w-6/12 lg:w-4/12 flex flex-col gap-4 absolute text-white top-[35%] md:top-[40%] -translate-y-1/2 left-8 md:left-[50px]  space-y-[-9px] md:space-y-[5px]'> 
        <h1 className='font-bold text-xl md:text-4xl'>{ translatedTitle || title }</h1>
        <p className='font-semibold text-md md:text-lg truncate md:whitespace-normal md:overflow-visible md:font-medium'>{translatedOverview || overview}</p>
        <div className='flex gap-5'>
            <button className=' px-3 py-1 font-semibold text-md  rounded-md md:px-5 md:py-2 md:font-bold md:text-lg bg-red-600 text-white md:rounded-lg'>{translatedPlayButton || "Play"}</button>
            <button className=' px-3 py-1 font-semibold text-md rounded-md  md:px-5 md:py-2 md:font-bold md:text-lg bg-red-600 text-white md:rounded-lg'>{translatedMoreInfoButton || "More Info"}</button>
        </div>
       
      
    </div>
   </div>
  )
}

export default TrailorInfo
