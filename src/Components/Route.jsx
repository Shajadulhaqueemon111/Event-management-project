import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer/Footer';

const Route = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
            <Footer></Footer>
        </div>
    );
};

export default Route;