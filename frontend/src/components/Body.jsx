import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import Header from './Header.jsx'
import Signup from './Signup.jsx'
const Body = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Signup/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default Body
