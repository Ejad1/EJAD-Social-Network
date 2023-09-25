import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import { NewPublication } from './composants/NewPublication.jsx'
import { Notifications } from './composants/Notifications.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>
  },
  {
    path:'/publi',
    element: <NewPublication afficher={ true }></NewPublication>
  },
  {
    path:'/notifications',
    element: <Notifications></Notifications>
  },
  {
    path:'/',
    element: <App></App>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }></RouterProvider>
  </React.StrictMode>,
)
