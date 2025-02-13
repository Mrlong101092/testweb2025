import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './styles/global.css'
import LoginPage from './pages/login.jsx';
import RegistersPage from './pages/registers.jsx';
import UserPage from './pages/users.jsx';
import BookPage from './pages/books.jsx';
import TodoApp from './component/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[  
      {
        index: true,
        element: <TodoApp/>
      },    
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/books",
        element: <BookPage />
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegistersPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
