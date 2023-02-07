import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import AboutUs from './about-us';
import Help from './help';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div> error</div>
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/help",
    element: <Help />,
  },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
