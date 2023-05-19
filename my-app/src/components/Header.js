import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <nav className="navbar">
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fleetheflood">Flee the Flood</Link></li>
                <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
