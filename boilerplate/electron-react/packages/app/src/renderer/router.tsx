
import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello</div>,
  },
  {
    path: '/home',
    element: <div>home</div>
  }
])