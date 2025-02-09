import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './styles/global.css'
import LoginPage from './pages/login.jsx';
import RegistersPage from './pages/registers.jsx';
import UserPage from './pages/users.jsx';
import ProductPage from './pages/products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegistersPage />,
  },
  {
    path: "/users",
    element: <UserPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
