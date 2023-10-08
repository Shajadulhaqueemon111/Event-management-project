import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { Toaster } from 'react-hot-toast';


const Route = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
              
            <Toaster/>
           
        </div>
    );
};

export default Route;