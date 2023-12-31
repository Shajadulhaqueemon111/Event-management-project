import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Components/Route';
import Error from './Components/ErrorPage/Error';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';

import Authprovider from './Components/AuthProvider/Authprovider';
import CourseDetails from './Pages/Details/CourseDetails';
import PrivateRoute from './Components/PrivateRoute';
import ApplyedCourse from './Pages/ApplyedCourse';
import AboutDetails from './Pages/About details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>        
      },
      {
        path:'/apply-courses',
        element:<PrivateRoute><ApplyedCourse></ApplyedCourse></PrivateRoute>,
        loader:()=>fetch('/course.json')       
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><CourseDetails></CourseDetails> </PrivateRoute>,
        loader:()=>fetch('../course.json')
              
      },
      {
        path:'/about',
        element:<PrivateRoute><AboutDetails></AboutDetails></PrivateRoute>
              
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  
  </React.StrictMode>,
)
