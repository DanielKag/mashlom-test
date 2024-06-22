import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import ErrorPage from './error-page'
import Shell from './shell'
import Phototherapy from './systems/phototherapy'
import Triage from './systems/triage'
import Protocol from './systems/protocol'
import Home from './home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />, // Default component
      },
      {
        path: 'phototherapy',
        element: <Phototherapy />,
      },
      {
        path: 'triage',
        element: <Triage />,
      },
      {
        path: 'protocol',
        element: <Protocol />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
