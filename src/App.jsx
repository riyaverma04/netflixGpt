
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUser from './components/SignUser'
import Body from './components/Body'
import Header from './components/Header'

function App() {
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
