
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUser from './components/SignUser'
import Body from './components/Body'

import { useDispatch } from 'react-redux'
import Popular from './components/Popular'
import NowPlaying from './components/NowPlaying'
import TopRated from './components/TopRated'
import MovieWatch from './components/MovieWatch'


function App() {
  const dispatch = useDispatch();
 
  const appRoute = createBrowserRouter([{
    path: "/",
    element: <SignUser/>


    },
   {
    path: "/recommended",
    element: <Body/>
   },{
    path:"/popular",
    element:<Popular/>
   }
   ,{
    path:"/nowPlaying",
    element:<NowPlaying/>
   },{
    path:"/topRated",
    element:<TopRated/>
   },{
    path:'/movie-watch',
    element:<MovieWatch/>
   }


])



  return (
   <>
   <RouterProvider router={appRoute}>
    
   </RouterProvider>
   </>
  )
}

export default App
