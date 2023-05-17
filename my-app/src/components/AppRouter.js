import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/HomePage';
import FleeTheFlood from '../pages/FleeTheFlood';
import PrivacyPolicy from './components/Contact';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/fleetheflood' component={FleeTheFlood} />
                <Route path='/privacypolicy' component={PrivacyPolicy} />
            </Switch>
        </Router>
    );
}

export default AppRouter;
