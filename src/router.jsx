import React from 'react'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<p>Home</p>} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </>
  )
)

export default router
