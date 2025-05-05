import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../Pages/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto '>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;