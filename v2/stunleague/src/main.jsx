import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Welcome from './routes/Welcome.jsx'
import Home from './routes/Home.jsx'
import ServerInfo from './routes/ServerInfo.jsx'

const router = createBrowserRouter ([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path: '/',
        element: <Welcome/>
      },
      {
        path: 'Home',
        element: <Home/>
      },
      {
        path:"ServerInfo",
        element: <ServerInfo/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
