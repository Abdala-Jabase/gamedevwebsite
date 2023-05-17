import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GameDescription from './pages/FleeTheFlood';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main>
        <GameDescription />
      </main>
      <Footer />
    </div>
  );
}

export default App;
