import React from 'react'
import Header from '../components/Header'
import Register from './Register'
import { createBrowserRouter, Outlet } from 'react-router'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
  const appLayout = createBrowserRouter([
        {
          path: '/',
          element: <Register/>
        },
        {
          path: '/browse',
          element: <Browse/>
        }
  ])
  return (
    <div>
        <RouterProvider router={appLayout}/>
    </div>
  )
}


export default Body
