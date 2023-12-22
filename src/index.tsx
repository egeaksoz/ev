import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login'
import Layout from './sharedComponents/Layout/Layout'
import Signup from './pages/Signup/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App /></Layout>
  },
  {
    path: '/login',
    element: <Layout><Login /></Layout>
  },
  {
    path: '/signup',
    element: <Layout><Signup /></Layout>
  }
])

const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
