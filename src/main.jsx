import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Leaderboard from './components/Leaderboard.jsx'


const appRoutes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:'/',
      element:<Dashboard/>
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'signup',
      element:<Signup/>
    },
    {
      path:'leaderboard',
      element:<Leaderboard/>
    },
  ],
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoutes}/>
  </StrictMode>
)
