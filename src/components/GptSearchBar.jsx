import React from 'react'
import language from '../utils/language'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
        const languageKey= useSelector(store=> store.config?.lang);
  return (
    <div className='flex gap-2  '>
                <input type="text" placeholder={language[languageKey].gptPlaceHolder}  className='w-11/12 px-2 rounded-lg'/>
                <button className='px-5 py-2 font-bold text-lg bg-red-600 text-white rounded-lg'>{language[languageKey].search}</button>
              </div>
  )
}

export default GptSearchBar
