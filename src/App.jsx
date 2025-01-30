import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Country from './pages/country'
import AppLayout from '../components/Layout/AppLayout'


const router =createBrowserRouter ([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'about',
        element:<About/>,
      },
      {
        path:'country',
        element:<Country/>,
      },
      {
        path:'contact',
        element:<Contact/>,
      },
    ]
  },
  
  
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider> 

 
}

export default App