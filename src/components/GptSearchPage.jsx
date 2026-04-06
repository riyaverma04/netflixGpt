import React from 'react'

import GptSearchBar from './GptSearchBar'
import GptMoviesContainer from './GptMoviesContainer'

const GptSearchPage = () => {

    // console.log(languageKey)
  return (
    <div className=' relative h-screen w-full'>
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"alt='bg-image'  className=' fixed object-cover h-screen w-full'/>
              <div className="  h-auto md:absolute  inset-0 bg-gradient-to-b from-black via-black/30 to-black flex justify-center items-center ">
                       <div className='z-20  h-auto   lg:m-auto lg:mt-40   w-full lg:w-10/12  md:p-10  border-black rounded-lg  py-8  bg-black/70 text-white'>

              <div className='mt-36 md:mt-0'>
                <GptSearchBar/>
              <GptMoviesContainer/>
              </div>
              </div>
              
              </div>

    </div>
  )
}

export default GptSearchPage
