import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './HomePage';
import FleeTheFlood from './FleeTheFlood';
import PrivacyPolicy from './PrivacyPolicy';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/fleetheflood" element={<FleeTheFlood />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
