import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"
import { Helmet } from 'react-helmet';

const Layout = () => {
    return (
        <>
            <Helmet>
                <title>AJ App Development Group</title>
                <link rel="icon" type="image/png" href="../../titlelogo.png" />
            </Helmet>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;