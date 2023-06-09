import React from 'react';
import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/HomePage';
import FleeTheFlood from './components/FleeTheFlood';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="fleetheflood" element={<FleeTheFlood />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
