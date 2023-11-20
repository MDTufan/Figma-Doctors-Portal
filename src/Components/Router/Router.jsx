import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Appointment from '../Appointment/Appointment';
import Login from '../Login/Login';

const Router = () => {
    const router=createBrowserRouter([
        {
          path:"/",
          element: <Layout />,
          children:[
            {
              path:'/',
              element:<Home />
            },
            {
              path:'/appointment',
              element: <Appointment />
            },
           
            {
              path:'/login',
              element:<Login />
            },
            //  {
            //   path:'/contact',
            //   element:<Contact />
            // },
            //  {
            //   path:'/signup',
            //   element:<SignUp />
            // },
            //  {
            //   path:'/login',
            //   element:<LogIn />
            // },
           
           
           
          ]
        }
      ])
  return (
    <div>
      <RouterProvider router={router} /> 
      
    </div>
  );
}

export default Router;
