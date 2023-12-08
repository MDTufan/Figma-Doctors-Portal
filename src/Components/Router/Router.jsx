import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Appointment from '../Appointment/Appointment';
import Login from '../Login/Login';
import SignUp from '../Singup/SignUp';
import Deshboard from '../Deshboard/Deshboard';
import NotFound from '../404/NotFound';
import PrivoteRoute from '../PrivoteRoute/PrivoteRoute';
import MyAppoinment from '../MyAppmm/MyAppoinment';

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
             {
              path:'/signup',
              element:<SignUp />
            },
             
             {
              path:'*',
              element:<NotFound />
            },
           
           
           
          ]
        },
        {
          path:'/dashboard',
          element:<PrivoteRoute> <Deshboard /> </PrivoteRoute>,
          children:[
            {
              path:'/dashboard',
              element:<MyAppoinment />
            }
        ]
        },
      ])
  return (
    <div>
      <RouterProvider router={router} /> 
      
    </div>
  );
}

export default Router;
