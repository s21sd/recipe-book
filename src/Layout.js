import React from 'react'
import ReactDOM from 'react-dom/client';
import { Outlet } from "react-router-dom"
import Header from './Header';
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout