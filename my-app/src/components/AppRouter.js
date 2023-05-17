import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './HomePage';
import FleeTheFlood from './FleeTheFlood';
import PrivacyPolicy from './PrivacyPolicy';

function AppRouter() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/fleetheflood' component={FleeTheFlood} />
            <Route path='/privacypolicy' component={PrivacyPolicy} />
        </Router>
    );
}

export default AppRouter;
