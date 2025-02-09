import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <div>login page</div>,
  },
  {
    path: "/register",
    element: <div>resgister page</div>,
  },
  {
    path: "/users",
    element: <div>users page</div>,
  },
  {
    path: "/products",
    element: <div>products page</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
