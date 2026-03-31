import React from 'react'

import GptSearchBar from './GptSearchBar'

const GptSearchPage = () => {

    // console.log(languageKey)
  return (
    <div className=' relative h-screen w-full'>
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"alt='bg-image'  className='  object-cover h-screen w-full'/>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black flex justify-center items-center ">
                       <div className='z-100  absolute m-auto w-4/12 h-auto p-6  border-black rounded-lg  py-8  bg-black/70 text-white'>

              <GptSearchBar/>
              </div>
              
              </div>

    </div>
  )
}

export default GptSearchPage
