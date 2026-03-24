
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUser from './components/SignUser'
import Body from './components/Body'

import { useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch();
 
  const appRoute = createBrowserRouter([{
    path: "/",
    element: <SignUser/>


    },
   {
    path: "/browser",
    element: <Body/>
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
