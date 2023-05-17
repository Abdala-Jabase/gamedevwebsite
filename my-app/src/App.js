import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
